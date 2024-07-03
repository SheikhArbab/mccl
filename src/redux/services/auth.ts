import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const authApi = createApi({
  reducerPath: 'userApi',
  tagTypes: ['users'],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_backend + "api/",
    credentials: 'include',
    mode: 'cors',
    prepareHeaders: (headers) => {
      if (localStorage.getItem("token")) {
        headers.set('Authorization', `Bearer ${localStorage.getItem("token")}`);
      }
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (user) => ({
        url: 'login/',
        method: 'POST',
        body: user,
      }),
    }),
    newUser: builder.mutation({
      query: (user) => ({
        url: 'register/',
        method: 'POST',
        body: user,
      }),
    }),
    getUserProfile: builder.query({
      query: () => ({
        url: `user/profile`,
        method: 'GET',
      }),
    }),
    getUserById: builder.query({
      query: (id) => ({
        url: `user/${id}/`,
        method: 'GET'
      }),
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: `users/`,
        method: 'GET'
      }),
    }),
    updateUser: builder.mutation({
      query: ({ userId, updateData }) => ({
        url: `user/${userId}/`,
        method: 'PATCH',
        body: updateData,
      }),
      invalidatesTags: ['users'],
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `account-delete/${userId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['users'],
    }),
  }),
});

export const {
  useNewUserMutation,
  useLoginMutation,
  useDeleteUserMutation,
  useGetUserProfileQuery,
  useUpdateUserMutation,
  useGetUserByIdQuery,
  useGetAllUsersQuery
} = authApi;

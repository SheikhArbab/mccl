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
    signUp: builder.mutation({
      query: (user) => ({
        url: 'sign-up',
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
        url: `admin/get/${id}`,
        method: 'GET'
      }),
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: `users`,
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
  useSignUpMutation,
  useLoginMutation,
  useDeleteUserMutation,
  useGetUserProfileQuery,
  useUpdateUserMutation,
  useGetUserByIdQuery,
  useGetAllUsersQuery
} = authApi;

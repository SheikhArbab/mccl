import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'userApi',
  tagTypes: ['users'],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_backend + "api/auth/",
    credentials: 'include',
    mode: 'cors',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (user) => ({
        url: 'sign-in',
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
    getUsers: builder.query({
      query: ({ page, limit, search, role }) => ({
        url: `admin/get-all?page=${page}&limit=${limit}&search=${search}&role=${role}`,
        method: 'GET',
      }),
    }),

    getUserById: builder.query({
      query: (id) => {
        return ({
          url: `admin/get/${id}`,
          method: 'GET'
        })
      },
    }),

    updateUser: builder.mutation({
      query: ({ userId, updateData }) => {

        return {
          url: `account-update/${userId}`,
          method: 'PUT',
          body: updateData,
        };
      },
      invalidatesTags: ['users'],
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `account-delete/${userId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['users'],
    }),
    googleUser: builder.mutation({
      query: (googleUser) => ({
        url: 'google',
        method: 'POST',
        body: googleUser,
      }),
    }),
  }),
});

export const {

  useSignUpMutation,
  useSignInMutation,
  useDeleteUserMutation,
  useGetUsersQuery,
  useGoogleUserMutation,
  useUpdateUserMutation,
  useGetUserByIdQuery

} = authApi;
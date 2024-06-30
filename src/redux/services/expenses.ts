import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const expensesApi = createApi({
    reducerPath: 'expensesApi',
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

        newExpenses: builder.mutation({
            query: (data) => ({
                url: 'expenses/create/',
                method: 'POST',
                body: data,
            }),
        }),
        getExpensesById: builder.query({
            query: (id) => ({
                url: `admin/get/${id}`,
                method: 'GET'
            }),
        }),
        getAllExpensess: builder.query({
            query: () => ({
                url: `users/`,
                method: 'GET'
            }),
        }),
        updateExpenses: builder.mutation({
            query: ({ userId, updateData }) => ({
                url: `user/${userId}/`,
                method: 'PATCH',
                body: updateData,
            }),
        }),
        deleteExpenses: builder.mutation({
            query: (userId) => ({
                url: `account-delete/${userId}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {

    useDeleteExpensesMutation,
    useGetAllExpensessQuery,
    useGetExpensesByIdQuery,
    useNewExpensesMutation,
    useUpdateExpensesMutation

} = expensesApi;

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
        getAllExpenses: builder.query({
            query: ({ date, paidTo, amount, chequeNo, bank, sumOfSr, forWhat, invoiceNumber, dueDate, taxAmount, currency, supplier }) => {
                // Filter out undefined parameters
                const queryParams: any = {
                    ...(date !== undefined && { date }),
                    ...(paidTo !== undefined && { paid_to: paidTo }),
                    ...(amount !== undefined && { amount }),
                    ...(chequeNo !== undefined && { cheque_no: chequeNo }),
                    ...(bank !== undefined && { bank: encodeURIComponent(bank) }),
                    ...(sumOfSr !== undefined && { sum_of_sr: sumOfSr }),
                    ...(forWhat !== undefined && { for_what: encodeURIComponent(forWhat) }),
                    ...(invoiceNumber !== undefined && { invoice_number: invoiceNumber }),
                    ...(dueDate !== undefined && { due_date: dueDate }),
                    ...(taxAmount !== undefined && { tax_amount: taxAmount }),
                    ...(currency !== undefined && { currency }),
                    ...(supplier !== undefined && { supplier: encodeURIComponent(supplier) }),
                };
 
                const queryString = Object.keys(queryParams)
                    .map(key => `${key}=${queryParams[key]}`)
                    .join('&');

                return {
                    url: `expenses/filter/?${queryString}`,
                    method: 'GET'
                };
            },
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
                url: `expenses/delete/${userId}/`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {

    useDeleteExpensesMutation,
    useGetAllExpensesQuery,
    useGetExpensesByIdQuery,
    useNewExpensesMutation,
    useUpdateExpensesMutation

} = expensesApi;

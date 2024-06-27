import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const addressApi = createApi({
    reducerPath: 'addressApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_backend + "api/address/",
        credentials: 'include',
        mode: 'cors',
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        newAddress: builder.mutation({
            query: (address) => ({
                url: 'add',
                method: 'POST',
                body: address,
            }),
        }),
        updateAddress: builder.mutation({
            query: ({ address, id }) => ({
                url: `update/${id}`,
                method: 'PUT',
                body: address,
            }),
        }),
        deleteAddress: builder.mutation({
            query: (id) => ({
                url: `delete/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {

    useNewAddressMutation,
    useUpdateAddressMutation,
    useDeleteAddressMutation

} = addressApi;

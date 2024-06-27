import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_backend + "api/product/",
        credentials: 'include',
        mode: 'cors',
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    endpoints: (builder) => ({

        getProducts: builder.query({
            query: ({ page, limit, search, minPrice, maxPrice, color }) => ({
                url: `get-all?page=${page}&limit=${limit}&search=${search}&minPrice=${minPrice}&maxPrice=${maxPrice}&color=${color}`,
                method: 'GET',
            }),
        }),

        getProductById: builder.query({
            query: (id) => ({
                url: `get/${id}`,
                method: 'GET',
            }),
        }),

        newProduct: builder.mutation({
            query: (data) => ({
                url: 'create',
                method: 'POST',
                body: data,
            }),
        }),

        updateProduct: builder.mutation({
            query: ({ id, product }) => {
                return {
                    url: `update/${id}`,
                    method: 'PUT',
                    body: product,
                };
            },
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `delete/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {

    useGetProductsQuery,
    useNewProductMutation,
    useGetProductByIdQuery,
    useDeleteProductMutation,
    useUpdateProductMutation

} = productApi;
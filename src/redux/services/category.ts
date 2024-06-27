import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_backend + "api/category/",
        credentials: 'include',
        mode: 'cors',
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        newCate: builder.mutation({
            query: (cate) => ({
                url: 'create',
                method: 'POST',
                body: cate,
            }),
        }),
        updateCate: builder.mutation({
            query: ({ cate, cateId }) => ({
                url: `update/${cateId}`,
                method: 'PUT',
                body: cate,
            }),
        }),
        getCate: builder.query({
            query: () => ({
                url: 'get-all',
                method: 'GET',
            }),
        }),
        getCateById: builder.query({
            query: (id) => ({
                url: `get/${id}`,
                method: 'GET',
            }),
        }),
        deleteCate: builder.mutation({
            query: (cateId) => ({
                url: `delete/${cateId}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useNewCateMutation,
    useUpdateCateMutation,
    useGetCateQuery,
    useDeleteCateMutation,
    useGetCateByIdQuery
} = categoryApi;

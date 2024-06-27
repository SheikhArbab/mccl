import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const colorApi = createApi({
    reducerPath: 'colorApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_backend + "api/color/",
        credentials: 'include',
        mode: 'cors',
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        newColor: builder.mutation({
            query: (color) => ({
                url: 'create',
                method: 'POST',
                body: color,
            }),
        }),
        updatecolor: builder.mutation({
            query: ({ id, color }) => {
                return {
                    url: `update/${id}`,
                    method: 'PUT',
                    body: { color },
                };
            },
        }),
        getcolors: builder.query({
            query: () => ({
                url: `get-all`,
                method: 'GET',
            }),
        }),
        deletecolor: builder.mutation({
            query: (colorId) => ({
                url: `delete/${colorId}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {

    useGetcolorsQuery,
    useNewColorMutation,
    useDeletecolorMutation,
    useUpdatecolorMutation,

} = colorApi;
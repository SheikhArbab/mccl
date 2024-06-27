import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const bannerApi = createApi({
    reducerPath: 'bannerApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_backend + "api/banner/",
        credentials: 'include',
        mode: 'cors',
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        newbanner: builder.mutation({
            query: (bnr) => ({
                url: 'create',
                method: 'POST',
                body: bnr,
            }),
        }),
        updatebanner: builder.mutation({
            query: ({ id, bnr }) => {
                return {
                    url: `update/${id}`,
                    method: 'PUT',
                    body: { bnr },
                };
            },
        }),
        getbanners: builder.query({
            query: () => ({
                url: `get-all`,
                method: 'GET',
            }),
        }),
        deletebanner: builder.mutation({
            query: (bnrId) => ({
                url: `delete/${bnrId}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useDeletebannerMutation,
    useNewbannerMutation,
    useGetbannersQuery,
    useUpdatebannerMutation

} = bannerApi;
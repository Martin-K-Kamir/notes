import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

export const albumsApi = createApi({
    reducerPath: "albums",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001",
        fetchFn: async (...args) => {
            await wait(200);
            return fetch(...args);
        },
    }),
    endpoints: builder => ({
        fetchAlbums: builder.query({
            providesTags: (result, error, user) => {
                const tags = result.map(album => ({
                    type: "Album",
                    id: album.id,
                }));
                tags.push({ type: "UsersAlbums", id: user.id });
                return tags;
            },
            query: user => ({
                url: "/albums",
                method: "GET",
                params: {
                    userId: user.id,
                },
            }),
        }),
        addAlbum: builder.mutation({
            invalidatesTags: (result, error, user) => [
                { type: "UsersAlbums", id: user.id },
            ],
            query: user => ({
                url: "/albums",
                method: "POST",
                body: {
                    userId: user.id,
                    title: faker.commerce.productName(),
                },
            }),
        }),
        removeAlbum: builder.mutation({
            invalidatesTags: (result, error, album) => [
                { type: "Album", id: album.id },
            ],
            query: album => ({
                url: `/albums/${album.id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const {
    useFetchAlbumsQuery,
    useAddAlbumMutation,
    useRemoveAlbumMutation,
} = albumsApi;

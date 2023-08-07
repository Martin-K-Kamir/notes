import { setupListeners } from "@reduxjs/toolkit/query";
import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlices.js";
import { albumsApi } from "./apis/albumsApi.js";
import { photosApi } from "./apis/photosApi.js";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photosApi.reducerPath]: photosApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
            .concat(albumsApi.middleware)
            .concat(photosApi.middleware),
});

setupListeners(store.dispatch);

export * from "./thunks/fetchUsers.js";
export * from "./thunks/addUser.js";
export * from "./thunks/removeUser.js";
export * from "./slices/usersSlices.js";
export {
    useFetchAlbumsQuery,
    useAddAlbumMutation,
    useRemoveAlbumMutation,
} from "./apis/albumsApi.js";
export {
    useFetchPhotosQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation,
} from "./apis/photosApi.js";

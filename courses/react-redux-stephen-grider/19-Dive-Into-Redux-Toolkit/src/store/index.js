import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, removeSong, addSong } from "./slices/songsSlice.js";
import { moviesReducer, removeMovie, addMovie } from "./slices/moviesSlice.js";
import { reset } from "./actions.js";

const store = configureStore({
    reducer: {
        songs: songsReducer,
        movies: moviesReducer,
    },
});

export { store, removeSong, addSong, removeMovie, addMovie, reset };

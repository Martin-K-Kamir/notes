import { usersReducer } from "./slices/usersSlices.js";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        users: usersReducer,
    },
});

export * from "./thunks/fetchUsers.js";
export * from "./thunks/addUser.js";
export * from "./thunks/removeUser.js";
export * from "./slices/usersSlices.js";

import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice.js";

const initialState = {
    name: "",
    cost: 0,
};

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload;
        },
        changeCost: (state, action) => {
            state.cost = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(addCar, state => {
            state.name = "";
            state.cost = 0;
        });
    },
});

export const selectForm = state => state.form;
export const { changeName, changeCost } = formSlice.actions;
export const formReducer = formSlice.reducer;

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    searchTerm: "",
    data: [],
};

const carsSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {
        changeSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        addCar: (state, action) => {
            state.data.push({
                id: nanoid(),
                name: action.payload.name,
                cost: action.payload.cost,
            });
        },
        deleteCar: (state, action) => {
            state.data = state.data.filter(car => car.id !== action.payload);
        },
    },
});

export const selectCars = state => state.cars;
export const { changeSearchTerm, addCar, deleteCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;

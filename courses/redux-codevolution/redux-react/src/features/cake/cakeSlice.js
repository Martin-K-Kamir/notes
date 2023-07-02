import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numOfCakes: 10
}

const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers: {
        ordered: state => {
            state.numOfCakes--
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload
        }
    }
})

export const selectAllCakes = state => state.cake.numOfCakes;
export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;


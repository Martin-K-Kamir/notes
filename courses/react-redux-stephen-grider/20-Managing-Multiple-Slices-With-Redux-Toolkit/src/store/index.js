import { configureStore } from "@reduxjs/toolkit";
import {
    carsReducer,
    selectCars,
    addCar,
    changeSearchTerm,
    deleteCar,
} from "./slices/carsSlice";
import {
    formReducer,
    selectForm,
    changeName,
    changeCost,
} from "./slices/formSlice";

const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer,
    },
});

export {
    store,
    selectCars,
    addCar,
    changeSearchTerm,
    deleteCar,
    selectForm,
    changeName,
    changeCost,
};

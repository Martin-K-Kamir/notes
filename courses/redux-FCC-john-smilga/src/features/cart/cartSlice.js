import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// import cartItems from '../../cartItems.js';

const API_URL = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
    cartItems: [],
    amount: 4,
    total: 0,
    isLoading: false,
};

// export const fetchCartItems = createAsyncThunk(
//     'cart/fetchCartItems',
//     async () => {
//         try {
//             const response = await fetch(API_URL);
//             return await response.json();
//         } catch (error) {
//             console.error(error);
//         }
//     }
// );

export const fetchCartItems = createAsyncThunk(
    'cart/fetchCartItems',
    async (_, thunkAPI) => {
        try {
            const response = await axios(API_URL);
            console.log(thunkAPI.getState());
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(`CUSTOM Error: ${error}`);
        }
    }
);

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: state => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            const id = action.payload;
            state.cartItems = state.cartItems.filter(item => item.id !== id);
        },
        increaseAmount: (state, { payload }) => {
            const cartItem = state.cartItems.find(item => item.id === payload);
            cartItem.amount += 1;
        },
        decreaseAmount: (state, { payload }) => {
            const cartItem = state.cartItems.find(item => item.id === payload);
            if (cartItem.amount === 1) {
                state.cartItems = state.cartItems.filter(
                    item => item.id !== payload
                );
            } else {
                cartItem.amount -= 1;
            }
        },
        calculateTotals: state => {
            state.amount = state.cartItems.reduce((total, { amount }) => {
                total += amount;
                return total;
            }, 0);

            state.total = state.cartItems.reduce((total, { amount, price }) => {
                total += amount * price;
                total = parseFloat(total.toFixed(2));
                return total;
            }, 0);
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCartItems.pending, state => {
                state.isLoading = true;
            })
            .addCase(fetchCartItems.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.cartItems = payload;
            })
            .addCase(fetchCartItems.rejected, (state, action) => {
                state.isLoading = false;
                console.log(action);
            });
    },
});

console.log(cartSlice);
export const {
    clearCart,
    removeItem,
    increaseAmount,
    decreaseAmount,
    calculateTotals,
} = cartSlice.actions;
export default cartSlice.reducer;

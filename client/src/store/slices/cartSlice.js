import { createSlice } from '@reduxjs/toolkit';

/* if I found data in my local storage */
const persistedState = localStorage.getItem('persist:root');



const initialState = persistedState ? JSON.parse(persistedState) : [];

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addToCart(state, action) {
            //add product to the cart
        },
        removeFromCart(state, action) {
            // erase everything
        },
        clearCart(state, action) {
            // erase everything
        },
        updateCart(state, action) {
            // update the cart
        },
    }
})

export const {addToCart, removeFromCart, clearCart, updateCart} = cartSlice.actions;

export default cartSlice.reducer
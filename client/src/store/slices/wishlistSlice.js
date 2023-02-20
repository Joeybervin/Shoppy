import { createSlice } from '@reduxjs/toolkit';

/* if I found data in my local storage */
const persistedState = localStorage.getItem('persist:root');



const initialState = persistedState ? JSON.parse(persistedState) : [];

const wishlistSlice = createSlice({
    name : "wishlist",
    initialState,
    reducers : {
        addToWishlist(state, action) {
            //add product to the Wishlist
        },
        removeFromWishlist(state, action) {
            // erase a product everything
        },
        clearWishlist(state, action) {
            //delete everything
        },
        updateWishlist(state, action) {
            // update the Wishlist
        },
    }
})

export const {addToWishlist, removeFromWishlist, clearWishlist, updateWishlist} = wishlistSlice.actions;

export default wishlistSlice.reducer
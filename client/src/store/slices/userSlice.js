import { createSlice } from '@reduxjs/toolkit';

/* if I found data in my local storage */
const persistedState = localStorage.getItem('persist:root');

/* new user */
const newUser = {
        email: "",
        firstName : "connexion",
        lastName : "",
        address : "",
        city : "",
        zip : "",
        wishlist : [],
        orders : [] ,
        insert_date : "",
        token: "",
        messages: [],
    
}

const initialState = persistedState ? JSON.parse(persistedState) : newUser;

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        save(state, action) { // save the user in the state object and localStorage
            Object.assign(state, action.payload)
        },
        logOut(state) {
            Object.assign(state, newUser)
        },
        addProductToWishlist(state, action){
            console.log(action.payload)
            state.wishlist.push(action.payload)
            console.log(state.wishlist)
        },
        removeProducFromWishlist(state, action){
            state.wishlist = state.wishlist.filter(productRef => productRef !== action.payload)
        },
        saveMessage(state, action) {
            const messageToSave = action.payload
            
            state.messages.push(messageToSave)
        },

        addAnOrder(state, action) {
            state.orders.push(action.payload)
        },
    }
})

export const {save, logOut, addProductToWishlist, removeProducFromWishlist, saveMessage, addAnOrder} = userSlice.actions;

export default userSlice.reducer
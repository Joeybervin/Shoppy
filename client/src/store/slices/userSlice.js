import { createSlice } from '@reduxjs/toolkit';

/* if I found data in my local storage */
const persistedState = localStorage.getItem('persist:root');
console.log("persistedState : " , JSON.parse(persistedState))

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
    
}

const initialState = persistedState ? JSON.parse(persistedState) : newUser;

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        save(state, action) {
            
            Object.assign(state, action.payload)
            

            
        },
        logOut(state, action) {
            // erase everything
        },
        upgradeProfile(state, action) {},

        addProductToWishlist(state, action){},
        removeProducFromWishlist(state){},

        orderProduct(state, action) {},
    }
})

export const {save, logOut, upgradeProfile, addProductToWishlist, removeProducFromWishlist, orderProduct} = userSlice.actions;

export default userSlice.reducer
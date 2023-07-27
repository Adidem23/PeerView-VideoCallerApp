import { configureStore } from "@reduxjs/toolkit";
import cartreducer from './createSlice';

const store=configureStore({
    reducer:{
        cart:cartreducer,
    }
})

export default store;
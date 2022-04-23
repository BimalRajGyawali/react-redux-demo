import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/CounterSlice";

const store =  configureStore({
    reducer:{
        counter: counterSlice.reducer
    }
})

export default store;
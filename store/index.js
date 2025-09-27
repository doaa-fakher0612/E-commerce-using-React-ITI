import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./slices/counter";



const store = configureStore({
    reducer :{
        counter : counterSliceReducer
    }
})

export default store;
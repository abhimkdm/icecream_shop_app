import { configureStore } from "@reduxjs/toolkit";
import productReducer from './ProductsSlice';

export const store = configureStore({
    reducer: {
        //Multiple reducers
        //ProductReducer
        products: productReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

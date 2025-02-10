import { configureStore } from "@reduxjs/toolkit";
import productReducer from './ProductsSlice';
import cartReducer from './CartSlice';

export const store = configureStore({
    reducer: {
        //Multiple reducers
        //ProductReducer
        products: productReducer,
        cart: cartReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

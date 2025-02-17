import { configureStore } from "@reduxjs/toolkit";
import productReducer from './ProductsSlice';
import cartReducer from './CartSlice';
import userReducer from './UserSlice';

export const store = configureStore({
    reducer: {
        //Multiple reducers
        //ProductReducer
        products: productReducer,
        cart: cartReducer,
        user: userReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

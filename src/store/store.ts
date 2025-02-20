import { configureStore } from "@reduxjs/toolkit";
import productReducer from './ProductsSlice';
import cartReducer from './CartSlice';
import userReducer from './UserSlice';
import shippingReducer from './ShippingDetailsSlice';

export const store = configureStore({
    reducer: {
        //Multiple reducers
        //ProductReducer
        products: productReducer,
        cart: cartReducer,
        user: userReducer,
        shipping: shippingReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//1. Initialize the state
//2. CateState Interface
//3. Create Slice

import { ProductType } from "../types/ProductType";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartState {
    items : ProductType[];
}

const initialState: CartState = {
    items: []
}; 

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state : any, action: PayloadAction<ProductType>) => {
            state.items.push(action.payload);
        },
        removeFromCart: (state, action: PayloadAction<number>) =>{
            state.items = state.items.filter(item => item.id !== action.payload);
        } 
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

// addToCart : state.items = [{ "id": 1, "title": "Chocolate Ice Cream", "price": 50 }, 
//                              { "id": 2, "title": "Vanilla Ice Cream", "price": 60 }]
// removeFromCart : id = 1; 
//  state.items = [{ "id": 2, "title": "Vanilla Ice Cream", "price": 60 }]
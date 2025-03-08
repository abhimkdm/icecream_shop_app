//1. Initialize the state
//2. CateState Interface
//3. Create Slice

import { CartItemType } from "../types/CartItemType";
import { ProductType } from "../types/ProductType";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartState {
  items: CartItemType[];
}

const initialState: CartState = {
  items: [],
};
//cart/addToCart
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: any, action: PayloadAction<ProductType>) => {
      //state.items.push(action.payload);
      const existingItemIndex = state.items.findIndex(
        (item: CartItemType) => item.product.id === action.payload.id
      );

      if (existingItemIndex >= 0) {
        state.items[existingItemIndex].cartQuantity += 1;
      } else {
        state.items.push({ product: action.payload, cartQuantity: 1 });
      }
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload
      );
    },

    incrementProductQty: (state, action: PayloadAction<ProductType>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.product.id === action.payload.id
      );
      console.log("itemIndex : " + itemIndex);
      if (itemIndex >= 0) {
        state.items[itemIndex].cartQuantity += 1;
      } else {
        //const tempProduct = {...action.payload, cartQuantity : 1}
        //product { cartQuantity: 0}
        state.items.push({ product: action.payload, cartQuantity: 1 });
      }
    },

    decrementProductQty: (state, action: PayloadAction<ProductType>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.product.id === action.payload.id
      );
      if (state.items[itemIndex].cartQuantity > 1) {
        state.items[itemIndex].cartQuantity -= 1;
      } else if (state.items[itemIndex].cartQuantity === 1) {
        state.items = state.items.filter(
          (item) => item.product.id !== action.payload.id
        );
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementProductQty,
  decrementProductQty,
} = cartSlice.actions;
export default cartSlice.reducer;

// addToCart : state.items = [{ "id": 1, "title": "Chocolate Ice Cream", "price": 50 },
//                              { "id": 2, "title": "Vanilla Ice Cream", "price": 60 }]
// removeFromCart : id = 1;
//  state.items = [{ "id": 2, "title": "Vanilla Ice Cream", "price": 60 }]

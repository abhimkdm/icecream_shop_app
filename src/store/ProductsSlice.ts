import { createSlice } from '@reduxjs/toolkit';
import { ProductType } from '../types/ProductType';

//1. Define the Products Type
//2. Import the static data
interface ProductState {
    items : ProductType[];
}

//3. initialize state
const initialState: ProductState = {
    items : []
}

//4. Create Slice
const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {}
})

export default productSlice.reducer;
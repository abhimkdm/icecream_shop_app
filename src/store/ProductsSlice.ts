import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../types/ProductType";
import api from "../api/api";

//Action name : products/fetchProducts
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const res = await api.get("/products");
  return res.data as ProductType[];
});

//1. Define the Products Type
//2. Import the static data
interface ProductState {
  items: ProductType[]; //fulfilled
  loading: boolean; //pending
  error: string | null; //rejected
}

//3. initialize state
const initialState: ProductState = {
  items: [],
  loading: false,
  error: null,
};

//4. Create Slice
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    //fetchProducts: (state: any, action: PayloadAction<ProductType>)
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        //process start
        state.loading = true;
        state.error = null;
        state.items = [];
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<ProductType[]>) => {
        //process complete
        state.loading=false;
        state.items= action.payload;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        //process rejected
        state.loading =false;
        state.items = [];
        state.error = action.error.message || "Failed To Fetch Products...!";
      });
  },
});

export default productSlice.reducer;

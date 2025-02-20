//1. interface - ShippingDetailsType
//2. initialize state - ShippingDetailsState
//3. Create slice for ShippingDetails

import { createSlice } from "@reduxjs/toolkit";
import { ShippingDetailsType } from "../types/ShippingDetailType";

const initialState : ShippingDetailsType = {
    shippingId: 1,
    name: "Amaresh",
    address: "Bangalore",
    country: "India",
    state: "Karnataka",
    city: "Bangalore",
    pincode: 560093
}

const shippingDetailSlice = createSlice({
    name: "shipping",
    initialState,
    reducers: {}
})

export default shippingDetailSlice.reducer;
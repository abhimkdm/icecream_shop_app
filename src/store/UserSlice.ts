import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IUserType {
    userId: number,
    name: string,
    email: string,
    password: string,
    mobile: number,
    isAuthenticated: boolean
}

const initialUserState : IUserType = {
    userId: 1,
    name: "Amaresh",
    email: "amaresh@gmail.com",
    password: "admin",
    mobile: 9898989898,
    isAuthenticated: false
}

const userSlice = createSlice({
    name:"user",
    initialState: initialUserState,
    reducers: {
        isLoggedIn: (state : IUserType , action : PayloadAction<boolean>)=>{
            state.isAuthenticated = action.payload;
        },
        isLoggedOut: (state : IUserType , action : PayloadAction<boolean>)=>{
            state.isAuthenticated = action.payload;
        },
    }
});

export const { isLoggedIn, isLoggedOut} = userSlice.actions;
export default userSlice.reducer;
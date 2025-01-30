import { useState } from "react";


export const AuthProvider = () => {
    //AuthProvider => Token Session Storage => Token Validation => isUserAuthenticated
    const [isAuthenticated, SetIsUserAuthenticated] = useState(false);

    //Fake token
    const login = (token : any) => {
       localStorage.setItem("token", token); //browser
       SetIsUserAuthenticated(!!token);
    }
    const logout = () => {
        localStorage.removeItem("token");
        SetIsUserAuthenticated(false);
    }
}
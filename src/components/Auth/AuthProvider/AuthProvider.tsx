import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { LoginType } from "../../../types/LoginType";
import { isLoggedIn, isLoggedOut } from "../../../store/UserSlice";

//Global State
const AuthContext = createContext({
  isAuthenticated: false,
  login: (token: any) => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: any) => {
  //AuthProvider => Token Session Storage => Token Validation => isUserAuthenticated
  //Selector get the isAuthenticated

  const userInfo = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  const [isAuthenticated, SetIsUserAuthenticated] = useState(userInfo.isAuthenticated);

  //login
  useEffect(() => {
    //one component to another component
    // const token = localStorage.getItem("token");
    // SetIsUserAuthenticated(!!token);
    SetIsUserAuthenticated(userInfo.isAuthenticated);
  }, [userInfo]);

  //Fake token
  // const login = (token: any) => {
  //   localStorage.setItem("token", token); //browser
  //   SetIsUserAuthenticated(!!token);
  //   //dispatch isLoggedIn
  // };

  const login = (user: LoginType) => {
    // console.log(user);
    // console.log(userInfo);

    //Validate the user
    //dispatch the action
    if (user.email === userInfo.email && user.password === userInfo.password) {
      dispatch(isLoggedIn(true));
      console.log("LoggedIn");
    }
    else
      dispatch(isLoggedOut(false));
  };

  const logout = () => {
    // localStorage.removeItem("token");
    // SetIsUserAuthenticated(false);
    dispatch(isLoggedOut(false));
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

// A props
// B props
/// <A> <B> </B> </A>
// props.children

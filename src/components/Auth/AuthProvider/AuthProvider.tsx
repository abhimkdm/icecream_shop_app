import { createContext, useContext, useEffect, useState } from "react";

//Global State
const AuthContext = createContext({
  isAuthenticated: false,
  login: (token: any) => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: any) => {
  //AuthProvider => Token Session Storage => Token Validation => isUserAuthenticated
  const [isAuthenticated, SetIsUserAuthenticated] = useState(false);

  //login
  useEffect(() => {
    //one component to another component
    const token = localStorage.getItem("token");
    SetIsUserAuthenticated(!!token);
  }, []);

  //Fake token
  const login = (token: any) => {
    localStorage.setItem("token", token); //browser
    SetIsUserAuthenticated(!!token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    SetIsUserAuthenticated(false);
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

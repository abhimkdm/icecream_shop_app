import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login/Login";
import NavBar from "./components/common/Navbar";
import Signup from "./components/Auth/SignUp/SignUp";
import NoMatch from "./components/common/Nomatch";
import Products from "./components/Products/Products";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Profile from "./components/Auth/Profile/Profile";
import { AuthProvider } from "./components/Auth/AuthProvider/AuthProvider";
import PrivateRoute from "./components/Auth/PrivateRoute/PrivateRoute";
import { SnackbarProvider } from "notistack";
import Cart from "./components/Cart/Cart";
import CheckOut from "./components/CheckOut/CheckOut";
import OrderSuccess from "./components/Orders/OrderSuccess";

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal:'center'}}>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/products" element={<Products />}>
                <Route path=":productId" element={<ProductDetails />} />
              </Route>
              <Route element={<PrivateRoute />}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/checkout" element={<CheckOut />}></Route>
              </Route>
              <Route path="*" element={<NoMatch />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/ordersuccess" element={<OrderSuccess />}></Route>
            </Routes>
          </Router>
        </SnackbarProvider>
      </AuthProvider>
    </>
  );
};

export default App;

// <div className="App">
//   <header className="App-header">
//     {/* <HomeComponent title="Welcome" name="Home">
//       <h1>Welcome Home</h1>
//     </HomeComponent> */}
//     <Login />
//   </header>
// </div>

// <A> <B> </B> </A>
// const A =(props)=> { props.children }

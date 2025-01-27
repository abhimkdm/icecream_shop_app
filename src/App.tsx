import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login/Login";
import NavBar from "./components/common/Navbar";
import Signup from "./components/Auth/SignUp/SignUp";
import NoMatch from "./components/common/Nomatch";
import Products from "./components/Products/Products";

const App: React.FC = () => {
  return (
    <>
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </Router>
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
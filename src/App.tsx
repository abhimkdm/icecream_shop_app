import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login/Login";
import NavBar from "./components/common/Navbar";
import Signup from "./components/Auth/SignUp/SignUp";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
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
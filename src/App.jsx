import React from "react";
// import { useNavigate } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Home from "./components/Navbar/Pages/Home";
import Apply from "./components/Navbar/Pages/Apply";
import Contact from "./components/Navbar/Pages/Contact";
import About from "./components/Navbar/Pages/About";
import Help from "./components/Navbar/Pages/Help";
import Login from "./components/LogIn/login";
import Forgot from "./components/LogIn/forgot";
import Sign from "./components/LogIn/Signup";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

const App = () => {
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate("/signup");
  // };
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Home />
            </>
          }
        />
        <Route
          path="/apply"
          element={
            <>
              <NavBar />
              <Apply />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <NavBar />
              <About />
            </>
          }
        />
        <Route
          path="/help"
          element={
            <>
              <NavBar />
              <Help />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <NavBar />
              <Contact />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <NavBar />
              <Login />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

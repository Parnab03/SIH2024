import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Home from "./components/Navbar/Pages/Home";
import Apply from "./components/Navbar/Pages/Apply";
import Contact from "./components/Navbar/Pages/Contact";
import About from "./components/Navbar/Pages/About";
import Help from "./components/Navbar/Pages/Help";
import Login from "./components/LogIn/login";
import Sign from "./components/Signup/Sign";
import Forget from "./components/ForgetPassword/Password"
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Home />
              <Footer />
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
              <Footer />
            </>
          }
        />
        <Route
          path="/help"
          element={
            <>
              <NavBar />
              <Help />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <NavBar />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Sign />
            </>
          }
        />
        <Route 
        path="/forget"
        element={
          <>
          <Forget />
          </>
        }
        />
      </Routes>
    </>
  );
};

export default App;

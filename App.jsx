import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar />
          <Home />
        </>
      ),
    },
    {
      path: "/apply",
      element: (
        <>
          <NavBar />
          <Apply />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <NavBar />
          <About />
        </>
      ),
    },
    {
      path: "/help",
      element: (
        <>
          <NavBar />
          <Help />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <NavBar />
          <Contact />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <NavBar />
          <Login />
        </>
      ),
    },
    {
      path: "/forgot",
      element: (
        <>
          <Forgot />
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <Sign />
        </>
      ),
    }
  ]);

  return (
    <>
      <Login />
      <Footer />
      <RouterProvider router={router} />
    </>
  );
};

export default App;

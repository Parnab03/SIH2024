import React from "react"; 
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="container">
      <section className="left">
        <p> Welcome Back!</p>
      </section>
      <section className="right">
        <div className="right-container">
          <div className="upper">
            <h1>Log In</h1>
            <p>Welcome Back. Please Enter Your Details.</p>
          </div>
          <div className="lower">
            <form>
              <div className="input-container">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  defaultValue={"abc@gmail.com"}
                />
              </div>
              <div className="input-container">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
                {/* <Link to="/forgot">Forgot Password?</Link> */}
              </div>
              <div className="btn-container">
                <button className="btn">Log In</button>
              </div>
              <div className="sign-container">
                <p>Don't have an account?</p>
                {/* <Link to="/signup">Sign Up</Link> */}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;

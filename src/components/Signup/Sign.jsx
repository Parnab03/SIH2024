import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="sign-container">
      <section className="sign-left">
        <p> Register Now </p>
      </section>
      <section className="sign-right">
        <div className="sign-right-container">
          <div className="sign-upper">
            <h1>Sign Up</h1>
            <p>New here? Create your account now.</p>
          </div>
          <div className="sign-lower">
            <form>
              <div className="sign-input-container">
                <div className="sign-input-left">
                  <div className="sign-inner-container">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Adam"
                    />
                  </div>
                  <div className="sign-inner-container">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      defaultValue={"abc@gmail.com"}
                    />
                  </div>
                  <div className="sign-inner-container">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      defaultValue={"*****"}
                    />
                  </div>
                </div>
                <div className="sign-input-right">
                  <div className="sign-inner-container">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Sandberg"
                    />
                  </div>
                  <div className="sign-inner-container">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      placeholder="+91 123456789"
                    />
                  </div>
                  <div className="sign-inner-container">
                    <label htmlFor="Repassword">Retype Password</label>
                    <input type="password" name="Repassword" id="Repassword" />
                  </div>
                </div>
              </div>
              <div className="sign-btn-container">
                <button className="btn">Sign Up</button>
              </div>
              <div className="sign-log-container">
                <p>Already have an account?</p>
                <Link to="/login">Log In</Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;

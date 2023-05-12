import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="login-box">
        <h2 className="heading">Login</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input type="text" className="email" id="email" />

          <label htmlFor="password">Password</label>
          <input type="text" className="password" id="password" />

          <input type="submit" className="submit" />
        </form>
        <p className="subheading">
          Need an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

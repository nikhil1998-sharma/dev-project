import React from "react";
import "./Signup.scss";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="signup">
      <div className="signup-box">
        <h2 className="heading">Signup</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" className="name" id="name" />

          <label htmlFor="email">Email</label>
          <input type="text" className="email" id="email" />

          <label htmlFor="password">Password</label>
          <input type="text" className="password" id="password" />

          <input type="submit" className="submit" />
        </form>
        <p className="subheading">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;

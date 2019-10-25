import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="show-desktop hide-mobile" id="nav">
      <li>
        <NavLink to="/" className="link">
          Articles
        </NavLink>
      </li>

      <li>
        <NavLink to="/about" className="link">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className="link">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to="/signup" className="link">
          Signup
        </NavLink>
      </li>
    </ul>
  );
};
export default SignedOutLinks;

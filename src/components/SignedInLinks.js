import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul /* className="show-desktop hide-desktop"*/ id="nav">
      <li>
        <NavLink to="/" className="link">
          Articles
        </NavLink>
      </li>
      <li>
        <NavLink to="/createarticle">Create Article</NavLink>
      </li>
      <li>
        <NavLink to="/about" className="link">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="link">
          Logout
        </NavLink>
      </li>
    </ul>
  );
};
export default SignedInLinks;

import React from "react";
import { Link } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="show-desktop hide-mobile" id="nav">
      <li>
        <Link to="/" className="link">
          Articles
        </Link>
      </li>

      <li>
        <Link to="/about" className="link">
          About
        </Link>
      </li>
      <li>
        <Link to="/login" className="link">
          Login
        </Link>
      </li>
      <li>
        <Link to="/signup" className="link">
          Signup
        </Link>
      </li>
    </ul>
  );
};
export default SignedOutLinks;

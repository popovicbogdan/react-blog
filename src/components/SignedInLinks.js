import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";

const SignedInLinks = props => {
  return (
    <ul className="show-desktop hide-mobile" id="nav">
      <li>
        <Link to="/" className="link">
          Articles
        </Link>
      </li>
      <li>
        <Link to="/createarticle">Create Article</Link>
      </li>
      <li>
        <Link to="/about" className="link">
          About
        </Link>
      </li>
      <li>
        <Link to="/" onClick={props.logout}>
          Logout
        </Link>
      </li>
    </ul>
  );
};
export default connect(
  null,
  { logout }
)(SignedInLinks);

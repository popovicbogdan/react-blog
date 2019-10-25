import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";

const SignedInLinks = () => {
  return (
    <ul className="show-desktop hide-mobile" id="nav">
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
        <a href="/" onClick={this.props.logout}>
          Logout
        </a>
      </li>
    </ul>
  );
};
export default connect(
  null,
  { logout }
)(SignedInLinks);

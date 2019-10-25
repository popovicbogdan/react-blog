import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../static/Reactasaurus.svg";
// import { ReactComponent as LogoTwo } from "../static/logo-white.svg";
import { ReactComponent as Ham } from "../static/ham.svg";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Header = props => {
  const { isAuthenticated } = props;

  const links = isAuthenticated ? <SignedInLinks /> : <SignedOutLinks />;

  return (
    <div>
      <header className="wrapper">
        <NavLink to="/">
          <Logo className="logoo" />
        </NavLink>

        <div className="navi">
          <a href="/" className="hide-desktop">
            <Ham className="menu" />
          </a>

          {links}
        </div>
      </header>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(" state : ", state);
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(Header);

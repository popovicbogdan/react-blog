import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../static/Reactasaurus.svg";
// import { ReactComponent as LogoTwo } from "../static/logo-white.svg";
// import { ReactComponent as Ham } from "../static/ham.svg";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

function Header() {
  return (
    <div>
      <header className="wrapper">
        <NavLink to="/">
          <Logo className="logoo" />
        </NavLink>

        <navbar className="navi">
          {/* <a href="#" className="hide-desktop">
            <Ham className="menu" />
            {/* <img
              src="../static/ham.svg"
              alt="togle-menu"
              className="menu"
              id="menu"
            /> 
          </a> */}

          <SignedInLinks />
          <SignedOutLinks />
        </navbar>
      </header>
    </div>
  );
}

export default Header;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { NavSearch } from "./NavSearch/NavSearch";
import NavMenu from "./NavMenu/NavMenu";

import "./Nav.scss";

export class Nav extends React.Component {
  render() {
    return (
      <nav className="Nav">
        <div className="nav-items-container">
          <div className="nav-logo">
            <img
              src="images/main/logo_text.png"
              alt="insta text logo"
              className="nav-logo"
            />
          </div>
          <NavSearch />
          <NavMenu />
        </div>
      </nav>
    );
  }
}

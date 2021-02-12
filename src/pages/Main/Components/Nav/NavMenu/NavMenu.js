/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

import "./NavMenu.scss";

class NavMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      isDropdownActive: false,
      isHideExceptionTriggered: false,
    };
  }

  toggleNavMenuDropdown = () => {
    console.log("toggle");
    const { isDropdownActive } = this.state;
    this.setState(
      isDropdownActive
        ? { isDropdownActive: false }
        : { isDropdownActive: true }
    );
  };

  hideNavMenuDropdown = (e) => {
    setTimeout(() => this.setState({ isDropdownActive: false }), 100);
  };

  componentDidMount = () => {
    console.log(this.isHideExceptionTriggered);
  };

  render() {
    const { isDropdownActive } = this.state;
    const navMenuItems = [
      {
        divClassName: "nav-menu-item dm",
        imgClassName: "menu-item-icon dm-icon",
        src: "images/main/nav_menu_dm_icon.png",
        alt: "nav bar dm icon",
      },
      {
        divClassName: "nav-menu-item explore",
        imgClassName: "menu-item-icon explore-icon",
        src: "images/main/nav_menu_explore_icon.png",
        alt: "nav bar explore menu icon",
      },
      {
        divClassName: "nav-menu-item heart",
        imgClassName: "menu-item-icon heart-icon",
        src: "images/main/nav_menu_heart_icon.png",
        alt: "nav bar heart menu icon",
      },
    ];
    const navDropdownItems = [
      {
        liClassName: "nav-menu-dropdown-item profile",
        aClassName: "nav-menu-dropdown-item profile",
        divClassName: "nav-dropdown-item-img avatar-img",
        imgClassName: "nav-dropdown-item-img avatar-img",
        src: "images/main/nav_menu_dropdown_avatar.png",
        alt: "nav bar menu dropdown avatar",
        pClassName: "nav-dropdown-item-text profile-text",
        content: "Profile",
      },
      {
        liClassName: "nav-menu-dropdown-item saved",
        aClassName: "nav-menu-dropdown-item saved",
        divClassName: "nav-dropdown-item-img tag-img",
        imgClassName: "nav-dropdown-item-img tag-img",
        src: "images/main/nav_menu_tag_icon.png",
        alt: "nav bar menu dropdown tag",
        pClassName: "nav-dropdown-item-text saved-text",
        content: "Saved",
      },
      {
        liClassName: "nav-menu-dropdown-item settings",
        aClassName: "nav-menu-dropdown-item settings",
        divClassName: "nav-dropdown-item-img settings-img",
        imgClassName: "nav-dropdown-item-img settings-img",
        src: "images/main/nav_menu_settings_icon.png",
        alt: "nav bar menu dropdown settings",
        pClassName: "nav-dropdown-item-text settings-text",
        content: "Settings",
      },
    ];

    return (
      <div className="NavMenu">
        <div className="nav-menu">
          <div className="nav-menu-item home">
            <img
              className={
                isDropdownActive
                  ? "menu-item-icon home-icon active"
                  : "menu-item-icon home-icon"
              }
              src={
                isDropdownActive
                  ? "images/main/onclick_icons/nav_menu_home_icon_white.png"
                  : "images/main/nav_menu_home_icon.png"
              }
              alt="nav bar home menu icon"
            />
          </div>
          {navMenuItems.map((el) => {
            return (
              <div className={el.divClassName}>
                <img className={el.imgClassName} src={el.src} alt={el.alt} />
              </div>
            );
          })}
          <div
            className={
              isDropdownActive
                ? "nav-menu-item avatar active"
                : "nav-menu-item avatar"
            }
            tabIndex="0"
            onClick={this.toggleNavMenuDropdown}
            onBlur={this.hideNavMenuDropdown}
          >
            <img
              className="menu-item-icon avatar-icon"
              src="images/main/account_profile_pic.png"
              alt="nav bar avatar profile"
            />
          </div>
          <div
            className={
              isDropdownActive
                ? "nav-menu-item avatar-outer-border active"
                : "nav-menu-item avatar-outer-border"
            }
          ></div>
        </div>
        <div
          className={
            isDropdownActive ? "nav-menu-dropdown active" : "nav-menu-dropdown"
          }
          tabIndex="0"
        >
          <ul
            className="nav-menu-dropdown-items"
            onClick={this.triggerHideException}
          >
            {navDropdownItems.map((el) => {
              return (
                <li className={el.liClassName}>
                  <a href="" className={el.aClassName}>
                    <div className={el.divClassName}>
                      <img
                        className={el.imgClassName}
                        src={el.src}
                        alt={el.alt}
                      />
                    </div>
                    <p className={el.pClassName}>{el.content}</p>
                  </a>
                </li>
              );
            })}
            <li className="nav-menu-dropdown-item logout">
              <Link to="/" className="nav-menu-dropdown-item logout">
                <p className="nav-dropdown-item-text logout-text">Log Out</p>
              </Link>
            </li>
          </ul>
          <div className="nav-menu-dropdown-connector-figure"></div>
        </div>
      </div>
    );
  }
}

export default NavMenu;

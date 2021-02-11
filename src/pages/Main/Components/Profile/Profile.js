/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import "./Profile.scss";

export class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <div className="account-profile-pic">
          <a href="#" className="account-profile-pic">
            <img
              src="images/main/account_profile_pic.png"
              alt="profile"
              className="account-profile-pic"
            />
          </a>
        </div>
        <div className="account-profile-id-n-name">
          <a href="#" className="account-profile-id">
            <p className="account-profile-id">
              {this.props.currentAccountUserId}
            </p>
          </a>
          <p className="account-profile-name">
            {this.props.currentAccountUser}
          </p>
        </div>
      </div>
    );
  }
}

import React from "react";

import "./Ad.scss";

export class Ad extends React.Component {
  render() {
    return (
      <section className="Ad">
        <img
          className="phone-frame-img"
          src="images/login/login_page_phones.png"
          alt="two phones overlapped showing auto transitioning images"
        />
        <div className="phone-screen"></div>
      </section>
    );
  }
}

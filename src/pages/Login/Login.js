import React from "react";

import { Ad } from "./Components/Ad/Ad";
import LoginBox from "./Components/LoginBox/LoginBox";
import { Footer } from "./Components/Footer/Footer";

import "./Login.scss";

export class Login extends React.Component {
  render() {
    return (
      <div className="Login">
        <section className="login-main">
          <Ad />
          <LoginBox />
        </section>
        <Footer />
      </div>
    );
  }
}

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { withRouter } from "react-router-dom";

import "./LoginBox.scss";

const APILogin = "";

class LoginBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idInput: "",
      pwInput: "",
    };
  }

  handleInput = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  goToMain = () => {
    // 서버 연결 안됐을때 mock login data 사용.
    if (APILogin.length === 0) {
      const { idInput, pwInput } = this.state;
      const isLoginValid = idInput === "peterdlee" && pwInput === "donghun1";
      if (isLoginValid) {
        this.props.history.push("/pstagram/main");
      } else {
        alert("Invalid username and/or password");
      }
    }
    // 서버 연결됐으면 서버와 통신.
    else {
      fetch(APILogin, {
        method: "POST",
        body: JSON.stringify({
          username: this.state.idInput,
          password: this.state.pwInput,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("===========================");
          console.log("Server response: ", result);
        });
    }
  };

  goToMainOnEnter = (e) => {
    if (e.key === "Enter") {
      this.goToMain();
    }
  };

  render() {
    console.log(this.props.history);
    const { idInput, pwInput } = this.state;
    const isLoginButtonActivated = idInput.length > 0 && pwInput.length > 5;
    return (
      <section className="LoginBox">
        <div className="login-box">
          <img
            className="logo"
            src="images/login/logo_text.png"
            alt="pstagram text logo"
          />
          <input
            className="username-box"
            id="idInput"
            type="text"
            placeholder="Phone number, username, or email"
            onChange={this.handleInput}
          />
          <input
            className="pw-box"
            id="pwInput"
            type="password"
            placeholder="Password"
            onChange={this.handleInput}
            onKeyPress={this.goToMainOnEnter}
          />
          <button
            className={
              isLoginButtonActivated ? "login-button activated" : "login-button"
            }
            disabled={false}
            onClick={this.goToMain}
          >
            Log In
          </button>
          <div className="or-box">
            <span className="or-line left"></span>
            <span className="or">
              <p>OR</p>
            </span>
            <span className="or-line right"></span>
          </div>
          <div className="login-with-facebook">
            <img
              className="fb-logo"
              src="images/login/facebook_logo.png"
              alt="facebook logo"
            />
            <a href="#" className="fb-text">
              <p>Log in with Facebook</p>
            </a>
          </div>
          <div className="forgot-pw">
            <a href="#">
              <p>Forgot password?</p>
            </a>
          </div>
        </div>
        <div className="signup-box">
          <p className="no-account-question">
            Don't have an account?{" "}
            <span class="signup-text">
              <a href="#">Sign up</a>
            </span>
          </p>
        </div>
        <p className="get-the-app">Get the app.</p>
        <div className="download">
          <a
            href="https://apps.apple.com/app/instagram/id389801252?vt=lo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="images/login/app_store_button.png"
              alt="download on the app store button"
              className="app-store-button"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D4EC185CE-2123-432F-A390-38000A457199%26utm_content%3Dlo%26utm_medium%3Dbadge"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="images/login/play_store_button.png"
              alt="download from google play button"
              className="play-store-button"
            />
          </a>
        </div>
      </section>
    );
  }
}

export default withRouter(LoginBox);

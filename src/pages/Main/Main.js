/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { Nav } from "./Components/Nav/Nav";
import { Story } from "./Components/Story/Story";
import { Feeds } from "./Components/Feeds/Feeds";
import { Profile } from "./Components/Profile/Profile";
import { Recommend } from "./Components/Recommend/Recommend";
import { Footer } from "./Components/Footer/Footer";

import "./Main.scss";

export class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      currentAccountUserId: "peterdlee",
      currentAccountUser: "Peter D Lee",
    };
  }
  render() {
    const { currentAccountUserId, currentAccountUser } = this.state;
    return (
      <div className="Main">
        <Nav />
        <section className="main">
          <section className="feeds-section">
            <Story />
            <Feeds currentAccountUserId={currentAccountUserId} />
          </section>
          <section className="side-section">
            <Profile
              currentAccountUserId={currentAccountUserId}
              currentAccountUser={currentAccountUser}
            />
            <Recommend />
            <Footer />
          </section>
        </section>
      </div>
    );
  }
}

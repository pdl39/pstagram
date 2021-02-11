import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Login } from "./pages/Login/Login";
import { Main } from "./pages/Main/Main";

import "./styles/reset.css";
import "./styles/common.scss";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/pstagram" component={Login} />
          <Route exact path="/pstagram/main" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

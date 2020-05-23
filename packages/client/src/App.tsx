import React from "react";
import loadable from "@loadable/component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withTranslation } from "react-i18next";
import "./App.css";

const Landing = loadable(() => import("./Components/Landing"));

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" children={<Landing />} />
      </Switch>
    </Router>
  );
}

export default withTranslation()(App);

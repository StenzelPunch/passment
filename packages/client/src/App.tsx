import React from "react";
import loadable from "@loadable/component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withTranslation } from "react-i18next";
import "./App.css";
import { Header } from "./components/Header";

const Landing = loadable(() => import("./components/pages/Landing"));

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" children={<Landing />} />
      </Switch>
    </Router>
  );
}

export default withTranslation()(App);

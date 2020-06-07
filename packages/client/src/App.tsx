import React from "react";
import loadable from "@loadable/component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withTranslation } from "react-i18next";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const Landing = loadable(() => import("./components/pages/Landing"));

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" children={<Landing />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default withTranslation()(App);

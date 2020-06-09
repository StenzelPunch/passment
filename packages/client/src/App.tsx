import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withTranslation } from "react-i18next";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Signup } from "./components/pages/Auth/Signup";
import { Landing } from "./components/pages/Landing";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/signup" children={<Signup />} />
        <Route path="/" children={<Landing />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default withTranslation()(App);

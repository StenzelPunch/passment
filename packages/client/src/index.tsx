import React from "react";
import App from "./App";
import "./languages/i18n.ts";
import "./index.css";
import "normalize.css";

import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root");
if (rootElement && rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

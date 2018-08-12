import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Card from "./composants/card.js";

ReactDOM.render(<Card />, document.getElementById("root"));
registerServiceWorker();

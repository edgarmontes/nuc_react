/*
This file is not a module due it does not have export statement
*/
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"; /*Calling the App module form App.js file in the same folder*/
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "typeface-lobster";
import "typeface-open-sans";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
import React, { Component } from "react";
import Main from "./components/MainComponent";
import "./App.css";
//Adding
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main></Main>
        </div>
      </BrowserRouter>
    );
  }
}

/*A JavaScript moculde is a JavaScript file that contains at least one export.*/
/*This is a new branch 1920*/
export default App;

import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
import Directory from "./components/DirectoryComponent";
import { CAMPSITES } from "./shared/campsites";
import Main from "./components/MainComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES
    };
  }
  render() {
    return (
      <div className="App">
        <Main></Main>
      </div>
    );
  }
}

/*A JavaScript moculde is a JavaScript file that contains at least one export.*/
export default App;

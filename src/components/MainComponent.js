import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Directory from "./DirectoryComponent";
import { CAMPSITES } from "../shared/campsites";
import CampsiteInfo from './CampsiteInfoComponents'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES
      selectedCampsite: null
    };
  }

  onCampsiteSelect(campsite){
      this.setState({selectedCampsite:campsiteID})
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">NuCamp</NavbarBrand>
          </div>
        </Navbar>
        <Directory campsites={this.state.campsites} onClick={campsiteID => this.onCampsiteSelect(campsiteID)} />
        <CampsiteInfo campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]}/>
      </div>
    );
  }
}

/*A JavaScript moculde is a JavaScript file that contains at least one export.*/
export default Main;

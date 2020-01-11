import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Directory from "./DirectoryComponent";
import { CAMPSITES } from "../shared/campsites";
import CampsiteInfo from "./CampsiteInfoComponents";
//Adding
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /*Entry point for all the components used in this file*/
      /*If we change the state directly the entire DOM reloads and defeats the reason to use react*/
      campsites: CAMPSITES,
      selectedCampsite: null //{}
    };
  }

  onCampsiteSelect(campsiteID) {
    /*setState comes from Component and it is a method to update the state to React DOM*/
    this.setState({ selectedCampsite: campsiteID });
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">NuCamp</NavbarBrand>
          </div>
        </Navbar>
        <Directory
          campsites={this.state.campsites}
          onClick={campsiteID => this.onCampsiteSelect(campsiteID)}
        />
        <CampsiteInfo
          campsite={
            this.state.campsites.filter(
              campsite => campsite.id === this.state.selectedCampsite
            )[0]
          }
        ></CampsiteInfo>
        <Footer></Footer>
      </div>
    );
  }
}

/*Copied from Apps.js*/
/*This is a new branch 1920*/
export default Main;

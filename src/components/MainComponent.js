import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Directory from "./DirectoryComponent";
import { CAMPSITES } from "../shared/campsites";
import CampsiteInfo from "./CampsiteInfoComponents";
//Adding
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
//Adding
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /*Entry point for all the components used in this file*/
      /*If we change the state directly the entire DOM reloads and defeats the reason to use react*/
      campsites: CAMPSITES
    };
  }

  onCampsiteSelect(campsiteID) {
    /*setState comes from Component and it is a method to update the state to React DOM*/
    this.setState({ selectedCampsite: campsiteID });
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/directory"
            render={() => <Directory campsites={this.state.campsites} />}
          />
          <Redirect to="/home" />
        </Switch>

        <CampsiteInfo
          campsite={
            this.state.campsites.filter(
              campsite => campsite.id === this.state.selectedCampsite
            )[0]
          }
        ></CampsiteInfo>
        <Footer />
      </div>
    );
  }
}

/*Copied from Apps.js*/
/*This is a new branch 1920*/
export default Main;

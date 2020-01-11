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
//Adding
import Contact from "./ContactComponent";
//Adding
import { COMMENTS } from "../shared/comments";
import { PARTNERS } from "../shared/partners";
import { PROMOTIONS } from "../shared/promotions";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /*Entry point for all the components used in this file*/
      /*If we change the state directly the entire DOM reloads and defeats the reason to use react*/
      campsites: CAMPSITES,
      comments: COMMENTS,
      partners: PARTNERS,
      promotions: PROMOTIONS
    };
  }

  onCampsiteSelect(campsiteID) {
    /*setState comes from Component and it is a method to update the state to React DOM*/
    this.setState({ selectedCampsite: campsiteID });
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          campsite={
            this.state.campsites.filter(campsite => campsite.featured)[0]
          }
          promotion={
            this.state.promotions.filter(promotion => promotion.featured)[0]
          }
          partner={this.state.partners.filter(partner => partner.featured)[0]}
        />
      );
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
          <Route exact path="/contactus" component={Contact} />
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

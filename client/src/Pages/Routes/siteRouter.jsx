//Libraries
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Pages
import Navbar from "../Global/components/NavBar/navBar";
import Home from "../Home/home.jsx";
import SignUp from "../SignUp/signUp";
import Dashboard from "../Dashboard/dashboard";
import PplDetail from "../Dashboard/components/pplDetail"
import Profile from "../Profile/index"
import Offer from "../Offers/offerForm"
class SiteRouter extends Component {
      render() {
            return (
                  <Router>
                        <div>
                              <Navbar />
                              <Switch>
                                    <Route exact path="/Profile" component={Profile} />
                                    <Route exact path="/users/:id" component={PplDetail} />
                                    <Route exact path="/offer/:id :streetNumber:streetName" component={Offer} />
                                    <Route exact path="/Dashboard" component={Dashboard} />
                                    <Route exact path="/SignUp" component={SignUp} />
                                    <Route exact path="/" component={Home} />


                              </Switch>

                        </div>
                  </Router>
            )
      }
}

export default SiteRouter

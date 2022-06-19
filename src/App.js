import React from "react";
import "./App.css";
import ReactGA from "react-ga";
import RouteChangeTracker from "./hooks/routeChangeTracker"
import { Route, Switch } from "react-router-dom";
import Navibar from "./components/navbar/index";
import Main from "./components/main/index";
import Mission from "./components/what-is-hue/index";
import Donate from "./components/donate/index";
import Contact from "./components/contact/index";
import Profile from "./components/profile/index";
import Volunteer from "./components/volunteer/index";
import Juneteenth from "./components/events/Juneteenth/juneteenth";


function App() {
const TRACKING_ID = "G-7DXEZ8NCPR"; 
ReactGA.initialize(TRACKING_ID);
  return (
    <>
      <RouteChangeTracker />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/juneteenth" component={Juneteenth} />
        <Route exact path="/what-is-huemanistic" component={Mission} />
        <Route exact path="/donate" component={Donate} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/volunteer" component={Volunteer} />
        <Route path="/profile/:name" component={Profile} />
      </Switch>
      <Navibar />
    </>
  );
}

export default App;

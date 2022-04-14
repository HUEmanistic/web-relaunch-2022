import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navibar from "./components/navbar";
import Main from "./components/main";
import Mission from "./components/about_mission";
import Donate from "./components/donate";
import Contact from "./components/contact";
import Profile from "./components/profile";


function App() {

  return (
    <>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about_our_mission" component={Mission} />
        <Route exact path="/donate" component={Donate} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/profile/:name" component={Profile} />
      </Switch>
      <Navibar />
    </>
  );
}

export default App;

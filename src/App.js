import React from "react";
import "./App.css";
import { Route, Switch} from "react-router-dom";
import Main from "./components/main";
import Mission from "./components/about_mission";
import US from "./components/about_us";
import BOM from "./components/bom.js";
import Experiences from "./components/experiences";
import Donate from "./components/donate";
import Contact from "./components/contact";
import YBF from "./components/ybf";
import Resources_Research from "./components/resources_research";


function App() {

  return (
    <>
      <Switch>

        <Route exact path="/" component={Main} />
        <Route exact path="/about_our_mission" component={Mission} />
        <Route exact path="/about_us" component={US} />

        <Route path={["/BOM/:id", "/BOM"]}>
          <BOM />
        </Route>
        <Route
          path={["/experiences/:id", "/experiences"]}
          component={Experiences}
        />
        <Route exact path="/donate" component={Donate} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/yourblackfriend" component={YBF} />
        <Route
          exact
          path="/resources_research"
          component={Resources_Research}
        />

      </Switch>
    </>
  );
}

export default App;

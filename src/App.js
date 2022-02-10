import React from "react";
import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import Intro from "./components/intro";
import Intro2 from "./components/intro2";
import Intro3 from "./components/intro3";
import Main from "./components/main";
import Mission from "./components/about_mission";
import US from "./components/about_us";
import BOM from "./components/bom.js";
import Experiences from "./components/experiences";
import Donate from "./components/donate";
import Contact from "./components/contact";
import YBF from "./components/ybf";
import Juneteenth from "./components/juneteenth2021"
import Voting from "./components/special_events/voting/voting.js"
import MLK from "./components/special_events/mlk/mlk.js";
import Resources_Research from "./components/resources_research";
import useLocalStorage from "./hooks/localStorage";

function App() {
  // const location = useLocation();

  const [skip, setSkip] = useLocalStorage("skipIntro", false);
  const history = useHistory();
  let existing = history.location.pathname;
  if (existing === "/") {
    existing = "/main";
  }
  if (skip) {
    history.push(`${existing}`);
  }

  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Intro {...props} setSkip={setSkip} />}
        />
        <Route
          exact
          path="/intro2"
          render={(props) => <Intro2 {...props} setSkip={setSkip} />}
        />
        <Route
          exact
          path="/intro3"
          render={(props) => <Intro3 {...props} setSkip={setSkip} />}
        />
        <Route exact path="/main" component={Main} />
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
        <Route exact path="/juneteenth" component={Juneteenth} />

        <Route exact path="/voting" component={Voting} />

        <Route exact path="/mlk" component={MLK} />
      </Switch>
    </>
  );
}

export default App;

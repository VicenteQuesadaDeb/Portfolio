import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InitialScreen from "../pages/InitialScreen";
import Me from "../pages/Me";
import Experience from "../pages/Experience";
import Education from "../pages/Education";
import Projects from "../pages/Projects";

function Pages({ user }) {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={InitialScreen} />
        <Route path="/projects" component={Projects} />
        <Route path="/experience" component={Experience} />
        <Route path="/education" component={Education} />
        <Route path="/me" component={Me} />
      </Switch>
    </Router>
  );
}

export default Pages;

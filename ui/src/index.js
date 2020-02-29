import ie from "ie-version";
import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import "./css/fonts.css";
import "./css/animations.css";
import "./css/index.css";
import App from "./App";

import {BrowserRouter, Switch, Route} from 'react-router-dom'

/**
 * Root component for mounting our app to the DOM.
 */

if (ie.version && ie.version <= 10) {
  ReactDOM.render(
    <div>
      <h3 style={{ textAlign: "center" }}>Please Upgrade your browser</h3>
    </div>,
    document.getElementById("root")
  );
} else {
  ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App}/>
            <Route path="/:eventYear/:eventType" component={App}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
  );
}

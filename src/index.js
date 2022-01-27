import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";

import Index from "views/Index.js";

const getBasename = () => {
  return `/${process.env.PUBLIC_URL}`;
};

ReactDOM.render(
  <HashRouter basename={getBasename()}>
    <Switch>
      <Route path="/" render={(props) => <Index {...props} />} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);

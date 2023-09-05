import React, { Component } from "react";
// import { Route, Redirect } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
// import { isAuthenticated } from "./helpers";
const ayman = 1;
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      ayman ? <Component {...props} /> : <Redirect to="/signin" />
    }
  />
);

export default PrivateRoute;

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

function PrivateRoute({ component: Component, ...rest }) {
  const auth = useContext(AuthContext)

  return (
    <Route
      {...rest}
      render={props =>
        auth.auth ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default PrivateRoute;
import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import Header from "./components/Header";

function PrivateRoute({ component: Component, ...rest }) {
    const auth = useContext(AuthContext)

    return (
        <Route
            {...rest}
            render={props =>
                auth.auth ? (
                    <Fragment>
                        <Header />
                        <Component {...props} />
                    </Fragment>
                ) : (
                        <Redirect to="/login" />
                    )
            }
        />
    );
}

export default PrivateRoute;

import React from "react";
import {
    Redirect, Route, useLocation
} from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    // let history = useHistory();
    const location = useLocation();
    return (
        <Route  {...rest}        render={({ props }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/loging",
              state: { from: location },
            }}
          />
        )
      }/>
       
       
    );
};

export default PrivateRoute;
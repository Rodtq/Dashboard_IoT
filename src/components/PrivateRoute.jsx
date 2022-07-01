import React, { Component } from 'react';
import { useLocation, Route } from 'react-router-dom';
import useProvideAuth from './hooks/useProvideAuth';

const PrivateRoute = ({ children, ...rest }) => {
    let auth = useProvideAuth();
    let location = useLocation();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}
export default PrivateRoute
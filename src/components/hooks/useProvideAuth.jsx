import React, { Component, useState } from 'react';

const useProvideAuth = () => {
    const [user, setUser] = useState(null);
    const fakeAuth = {
        isAuthenticated: false,
        signin(cb) {
            fakeAuth.isAuthenticated = true;
            setTimeout(cb, 100); // fake async
        },
        signout(cb) {
            fakeAuth.isAuthenticated = false;
            setTimeout(cb, 100);
        }
    };
    const signin = cb => {
        return fakeAuth.signin(() => {
            setUser("user");
            cb();
        });
    };
    const signout = cb => {
        return fakeAuth.signout(() => {
            setUser(null);
            cb();
        });
    };
    return {
        user,
        signin,
        signout
    };

}
export default useProvideAuth;
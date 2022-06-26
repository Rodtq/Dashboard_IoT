import { Breadcrumbs } from '@mui/material';
import React, { Component } from 'react';
import { Link, useLocation } from 'react-router-dom';



const Breadcrumb = () => {
    let location = useLocation();
    let pathnames = location.pathname.split('/').filter(x => x);
    return (
        <Breadcrumbs>
            <Link key={0} to={'/'}>Home</Link>
            {
                pathnames.map((pName, index = 1) => {
                    return (
                        <Link key={index} to={'/' + pName}>{pName}</Link>
                    );
                })
            }
        </Breadcrumbs>
    );
}
export default Breadcrumb;
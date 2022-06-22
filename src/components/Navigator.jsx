import React, { Component } from 'react';
import AddPage from '../pages/AddPage';
import DelPage from '../pages/DelPage';
import Home from '../pages/Home';
import Page404 from '../pages/Page404';
import Hamburguer from '../components/Hamburger';
import ActionMenu from '../components/ActionMenu';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Breadcrumbs, Link, Typography } from '@mui/material';
const Navigator = () => {
    return (
        <BrowserRouter>

            <Hamburguer></Hamburguer>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="addPage" element={<AddPage ></AddPage>} />
                <Route path="delPage" element={<DelPage></DelPage>} />
                <Route path="*" element={<Page404></Page404>} />
            </Routes>
            <ActionMenu></ActionMenu>
        </BrowserRouter>
    );
}
export default Navigator
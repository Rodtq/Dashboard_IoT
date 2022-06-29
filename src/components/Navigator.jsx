import React, { Component, useRef, useEffect } from 'react';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ActionMenu from './ActionMenu';
import SideBar from './SideBar';
import Header from './Header'
import AddPage from '../pages/AddPage';
import DelPage from '../pages/DelPage';
import Home from '../pages/Home';
import Page404 from '../pages/Page404';

const Navigator = () => {

    const sideBarRef = useRef();
    const menuHandler = () => {
        console.log("oi");
        if (sideBarRef.current !== undefined) {
            sideBarRef.current.openDrawer();
        }
    }
    return (
        <BrowserRouter>
            <Header onBtnClick={menuHandler} ></Header>
            <SideBar ref={sideBarRef}></SideBar>
            <Box
             sx={{ml:"5%", mt:"2rem", mr:"5%",mb:"2rem"}}>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="addPage" element={<AddPage ></AddPage>} />
                    <Route path="delPage" element={<DelPage></DelPage>} />
                    <Route path="*" element={<Page404></Page404>} />
                </Routes>
            </Box>
            <ActionMenu></ActionMenu>
        </BrowserRouter>
    );
}
export default Navigator
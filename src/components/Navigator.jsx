import React, { Component } from 'react';

import Hamburguer from '../components/Hamburger';
import ActionMenu from '../components/ActionMenu';
import { BrowserRouter} from "react-router-dom";
const Navigator = () => {
    return (
        <BrowserRouter>
            <Hamburguer></Hamburguer>

            <ActionMenu></ActionMenu>
        </BrowserRouter>
    );
}
export default Navigator
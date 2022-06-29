import { Box, IconButton, Drawer, Divider, Paper } from '@mui/material';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import DashItemList from './DashItemList';

const SideBar = forwardRef((props, ref) => {
    const [state, setState] = useState(false);

    const assets = { type: "assets", items: ['0005168000100d6d', '0005168000100d6c', '0005168000100d6a'] };
    const trackers = { type: "tracker", items: ['0005168000100d6d', '0005168000100d6c', '0005168000100d6a'] };

    const toggleDrawer = (isOpen) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(isOpen);
    };
    useImperativeHandle(ref, () => ({ openDrawer() { setState(true); } }));

    return (
        <Box
            sx={{
                zIndex: 'tooltip', display: 'flex',
                justifyContent: 'flex-start'
            }}
        >
            <Drawer
                anchor='left'
                open={state}
                onClose={toggleDrawer(false)}
            >
                <DashItemList itemList={assets} drawerHandle={toggleDrawer}></DashItemList>
                <Divider />
                <DashItemList itemList={trackers} drawerHandle={toggleDrawer}></DashItemList>
            </Drawer>
        </Box >
    )
})
export default SideBar;
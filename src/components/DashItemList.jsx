import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import React, { Component, useState } from 'react';
import { useEffect } from 'react';


const DashItemList = ({itemList,drawerHandle}) => {
    
    useEffect(() => {
        setDashItemList(itemList.items);
        setDashType(itemList.type);

    })
    const [dashitemList, setDashItemList] = useState([]);
    const [dashType, setDashType] = useState("");
    return (
        <Box
            sx={{ width: 250, color: "gray", height: 250 }}
            role="presentation"
        >
            <List>
                <ListItem key={0}>
                    <ListItemIcon>
                        {dashType === "tracker" ? <DirectionsCarFilledIcon></DirectionsCarFilledIcon> : <QrCode2Icon></QrCode2Icon>}
                    </ListItemIcon>
                    <ListItemText>{dashType}</ListItemText>
                </ListItem>
                <Divider />
                {dashitemList.map((item, index = 1) => {
                    return (
                        <ListItem key={index}>
                            <ListItemButton>
                                <ListItemText primary={item}
                                onClick={drawerHandle(false)} >
                                </ListItemText >
                            </ListItemButton>
                        </ListItem>
                    )
                })}
            </List>
        </Box>
    );
}
export default DashItemList
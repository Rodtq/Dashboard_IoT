import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Grid, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import React, { Component, useState } from 'react';
import { useEffect } from 'react';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';



const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const DashItemList = ({ itemList, drawerHandle }) => {

    useEffect(() => {
        setDashItemList(itemList.items);
        setDashType(itemList.type);
    })
    const [dashitemList, setDashItemList] = useState([]);
    const [dashType, setDashType] = useState("");

    return (

        <Accordion>
            <AccordionSummary >
                <Grid Grid container rowSpacing={1} columnSpacing={2} alignItems="center" >
                    <Grid item>
                        {dashType === "tracker" ? <DirectionsCarFilledIcon></DirectionsCarFilledIcon> : <QrCode2Icon></QrCode2Icon>}
                    </Grid>
                    <Grid item>
                        {dashType}
                    </Grid>
                </Grid>
            </AccordionSummary>
            <AccordionDetails>
                {dashitemList.map((item, index = 1) => {
                    return (
                        <List>
                            <ListItem key={index}>
                                <ListItemButton onClick={drawerHandle(false)}>
                                    <ListItemText primary={item}>
                                    </ListItemText >
                                </ListItemButton>
                            </ListItem>
                        </List>
                    )
                })}
            </AccordionDetails>
        </Accordion>
    );
}
export default DashItemList
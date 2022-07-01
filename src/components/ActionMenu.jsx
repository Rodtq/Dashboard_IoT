import React, { Component } from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import EditIcon from '@mui/icons-material/Edit';
import Container from '@mui/material/Container';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom';

const linkStyle = {
    margin: "0px",
    textDecoration: "none",
    display: "flex",
    justifyContent: 'center', alignItems: 'center', width: '..', height: '..',
  };
const actions = [
    { icon: <Link style={linkStyle} to="/Add"><AddIcon  sx={{m:"0px"}}></AddIcon></Link>, name: 'Add' },
    { icon: <Link style={linkStyle} to="/Remove"><RemoveIcon /></Link>, name: 'Remove' },

];
const ActionMenu = () => {
    return (
        <Container  >
            <SpeedDial
                ariaLabel="SpeedDial openIcon example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon openIcon={<EditIcon />} />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                ))}
            </SpeedDial>
        </Container >
    )
}
export default ActionMenu;
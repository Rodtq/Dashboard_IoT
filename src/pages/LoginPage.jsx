import { Card, Button, Grid, TextField, CardMedia, CardContent, CardActions, Typography, CardHeader } from '@mui/material';
import React, { Component } from 'react';
import EmailIcon from '@mui/icons-material/Email';

const LoginPage = ({ setLogin }) => {
    return (
        <Card sx={{ maxWidth: 345, pr: 4 , backgroundColor:"#e3f2fd"}} >
            <CardMedia
                component="img"
                image="https://smartmodular.com.br/wp-content/uploads/2022/06/SMTLogo_RGB.svg"
                alt="green iguana"
                sx={{ mx: 2, mt: 2 }}
            />
            <CardHeader
                title="Smart IoT Dashboards"></CardHeader>
            <CardContent>
                <Grid Grid container rowSpacing={1} columnSpacing={2} alignItems="center" display="flex" justifyContent="center">
                    <Grid item xs={4}>
                        E-Mail:
                    </Grid>
                    <Grid item xs={8}>
                        <TextField variant="standard"></TextField>
                    </Grid>
                    <Grid item xs={4}>
                        Password:
                    </Grid>
                    <Grid item xs={8}>
                        <TextField variant="standard" type="password"></TextField>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Button size="small">Login</Button>
                <Button size="small">Cancel</Button>
            </CardActions>
        </Card>
    )
}
export default LoginPage;
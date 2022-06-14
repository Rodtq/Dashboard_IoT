import React, { Component } from 'react';
import { Container, Autocomplete, Button, Grid, TextField } from '@mui/material';

const DelPage = () => {
    return (
        <Container>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 0.5 }}>
                <Grid item xs={12}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-dashboard_title"
                        options={["a", "b", "c"]}
                        renderInput={(params) => <TextField {...params} label="Dashboard" />}
                    >
                    </Autocomplete>
                </Grid>
                <Grid item xs={12}>
                    <Grid container direction="row" justifyContent="flex-end" alignItems="flex-end" spacing={0.5}>
                        <Grid item >
                            <Button variant="outlined">Delete</Button>
                        </Grid>
                        <Grid item >
                            <Button variant="outlined">Cancel</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>



    );
}
export default DelPage;

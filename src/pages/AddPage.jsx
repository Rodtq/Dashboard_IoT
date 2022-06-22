import React, { Component } from 'react';
import { Autocomplete, Button, Grid, TextField, Container } from '@mui/material';

const AddPage = () => {
    return (
        <Container container >
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 0.5 }} >
                <Grid item xs={4} >
                    <Autocomplete
                        disablePortal
                        id="combo-box-device_id"
                        options={["a", "b", "c"]}
                        renderInput={(params) => <TextField {...params} label="Device Id" />}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-dashboard-type"
                        options={["Tracker", "Assets Control"]}
                        renderInput={(params) => <TextField {...params} label="Dashboard type" />}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField id="title" label="Title" variant='outlined' fullWidth ></TextField>
                </Grid>
                <Grid item xs={12}  >
                    <Grid container direction="row" justifyContent="flex-end" alignItems="flex-end" spacing={0.5}>
                        <Grid item >
                            <Button variant="outlined">Add</Button>
                        </Grid>
                        <Grid item >
                            <Button variant="outlined">Cancel</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}
export default AddPage;
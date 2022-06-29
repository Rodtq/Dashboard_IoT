import React, { Component } from 'react';
import { Autocomplete, Button, Grid, TextField, Container, Box } from '@mui/material';

const AddPage = () => {
    return (
    
            <Box sx={{ flexGrow: 2}}>
                <Grid container spacing={{ xs: 0.5, md: 0.5 }} columns={{ xs: 4, sm: 12, md: 12}} rowSpacing={{xs : 2}}>
                    <Grid item xs={4} md={4}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-device_id"
                            options={["a", "b", "c"]}
                            renderInput={(params) => <TextField {...params} label="Device Id" />}
                        />
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-dashboard-type"
                            options={["Tracker", "Assets Control"]}
                            renderInput={(params) => <TextField {...params} label="Dashboard type" />}
                        />
                    </Grid>
                    <Grid item xs={4} md={4}>
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
            </Box >
    
    )
}
export default AddPage;
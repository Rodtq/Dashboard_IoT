import React, { Component } from 'react';
import { Autocomplete, Grid, Input, TextField } from '@mui/material';

export const AddPage = () => {
    return (
        <section>

            <Grid container>
                <Autocomplete
                    disablePortal
                    id="combo-box-device_id"
                    options={["a", "b", "c"]}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Device Id" />}
                />
                <select id="type"></select>
                <TextField id="title" label="Title" variant='outlined'></TextField>

            </Grid>
        </section>
    );

}
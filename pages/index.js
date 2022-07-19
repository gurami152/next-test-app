import {Box, Button, Grid} from "@mui/material";
import React from "react";
import Meta from "../app/utils/Meta";


export default function Welcome() {

    return (
        <div>
            {/* meta tags component*/}
            <Meta title={'Welcome'} description={'welcome page'}></Meta>

            {/*content*/}
            <Box padding={"20px 60px"}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}
                          style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                        <h1>Find out all about the flights</h1>
                        <h3>Get information about airports and flights that interest you</h3>
                        <a href={'/airports'} style={{maxWidth: '120px', alignSelf: 'center'}}><Button
                            variant={'contained'}
                            color={'primary'}>Details</Button></a>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <img src="/images/airplane.jpg" style={{maxWidth: '100%'}} alt={'airport image'}/>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

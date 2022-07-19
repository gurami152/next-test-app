import {Box, Button, Card, Grid, Stack} from "@mui/material";
import React from "react";
import useSWR from 'swr'
import Meta from "../app/utils/Meta";

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Airports() {

    const {data, error} = useSWR('/api/airport-info', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <div padding={"20px 60px"}>
            {/* meta tags component*/}
            <Meta title={'Airports'} description={'airports list page'}></Meta>

            {/*content*/}

            <Grid container padding={"20px 60px"} spacing={2}>
                {data.airports?.map((item, index) => {
                    return (
                        <Grid item xs={12} md={3} key={index}
                              style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                            <Card style={{padding: '10px'}}>
                                <small>Airport</small>
                                <h3>{item.code}</h3>
                                <a href={'/airport-info/' + item.code}><Button>More details</Button></a>
                            </Card>
                        </Grid>
                    );
                })
                }
            </Grid>
            {data.airports != null ? (
                    <Stack direction={'row'} padding={"20px 60px"} justifyContent={'space-between'}>
                        <Button>Prev</Button>
                        <Button>Next</Button>
                    </Stack>
                )
                : (
                    <Stack direction={'row'} padding={"20px 60px"} justifyContent={'space-between'}>
                        <h3>Rate limit error. Wait a minute, and try again</h3>
                    </Stack>
                )
            }

        </div>
    )
}

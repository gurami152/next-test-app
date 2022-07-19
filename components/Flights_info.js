import useSWR from "swr";
import {Box, Button, Card, Grid, Stack} from "@mui/material";

import FlightLandIcon from '@mui/icons-material/FlightLand';

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Flights_info({id}) {

    const {data, error} = useSWR('/api/flights/' + id, fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <Box>
            <h4>Arrivals</h4>
            <Stack spacing={2}>
                {data.arrivals?.map((item, index) => {
                    return (
                        <Card key={index}>
                            <div>Origin: {item.origin.code}</div>
                            <div>Destination: {item.destination.code}</div>
                            <div>Type: {item.type}</div>
                            <div>Status: {item.status}</div>
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                    <div><b>Estimated OFF</b> {item.estimated_off}</div>
                                    <div><b>Estimated ON</b> {item.estimated_on}</div>
                            </Stack>
                        </Card>
                    );
                })}
            </Stack>
            <h4>Departures</h4>
            <Stack spacing={2}>
                {data.departures?.map((item, index) => {
                    return (
                        <Card key={index}>
                            <div>Origin: {item.origin.code}</div>
                            <div>Destination: {item.destination.code}</div>
                            <div>Type: {item.type}</div>
                            <div>Status: {item.status}</div>
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                <div><b>Estimated OFF</b> {item.estimated_off}</div>
                                <div><b>Estimated ON</b> {item.estimated_on}</div>
                            </Stack>
                        </Card>
                    );
                })}
            </Stack>
        </Box>
    )
}

import {Box, Card, Stack} from "@mui/material";
import useSWR from "swr";
import {useRouter} from "next/router";
import Flag from 'react-world-flags'
import Flights_info from "../../components/Flights_info";
import Meta from "../../app/utils/Meta";

const fetcher = (...args) => fetch(...args).then((res) => res.json())


export default function Airport_info() {

    const router = useRouter()
    const pid = router.query

    const {data, error} = useSWR('/api/airport/' + pid.id, fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <div>
            {/* meta tags component*/}
            <Meta title={pid.id} description={'airport info page'}></Meta>

            {/*content*/}
            <Box padding={"20px 60px"}>

                <Stack spacing={2} justifyContent={'center'} alignItems={'center'}>
                    <div>{data.type}</div>
                    <Stack direction={'row'} spacing={2} justifyContent={'center'} alignItems={'center'}>
                        <h4>{data.airport_code}</h4>
                        <h1>{data.name}</h1>
                        <Flag code={data.country_code} width={'36px'}/>
                    </Stack>
                    <Stack direction={'row'} spacing={2} justifyContent={'center'} alignItems={'center'}>
                        <span>City: </span><h3>{data.city}</h3>
                        <span>State: </span><h3>{data.state}</h3>
                        <span>Timezone: </span><h3>{data.timezone}</h3>
                    </Stack>
                </Stack>
                <Flights_info id={data.airport_code}/>
            </Box>
        </div>
    )
}

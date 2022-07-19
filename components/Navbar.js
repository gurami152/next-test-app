import React from "react";
import {Stack} from "@mui/material";
import Link from "next/link";
import Image from 'next/image'


function Navbar() {
    return (
        <Stack direction={'row'} justifyContent={"space-between"} padding={'20px'} bgcolor={'#0057b7'} color={'#fff'}>
            <Link href={'/'} alt={'logo'}>
                <Image src="/images/flight.svg"  alt={'logo'} width="36" height="36"/>
            </Link>
            <Stack direction={'row'} spacing={4} alignItems={'center'}>
                {/*<div>Navbar</div>*/}
                {/*<div>Navbar</div>*/}
                <Link href={'/airports'} alt={'logo'}>Details</Link>
            </Stack>
        </Stack>
    )
}

export default Navbar;

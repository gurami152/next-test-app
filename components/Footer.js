import React from "react";
import {Grid} from "@mui/material";

const style = {
    backgroundColor: "#0057b7",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%"
};


function Footer() {
    return (
        <Grid container style={style} padding={'10px'}>
            {/*<Grid item xs={8} padding={'10px'}>*/}
            {/*    <div>xs=6</div>*/}
            {/*</Grid>*/}
            {/*<Grid item xs={4} padding={'10px'}>*/}
            {/*    <div>md=8</div>*/}
            {/*</Grid>*/}
        </Grid>
    )
}

export default Footer;

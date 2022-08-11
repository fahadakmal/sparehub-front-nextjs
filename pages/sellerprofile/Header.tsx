import Image from "next/image";
import React, { useState } from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Grid } from "@mui/material";
const Header =()=>{
    // toggle button
    const [alignment, setAlignment] = React.useState('English');
    const [mystyle, setmystyle]=useState<boolean>(true)
    const [mystyle1, setmystyle1]=useState<boolean>(false)
    // let fill = theme ? '#000000' : "#fefefe"
//   const handleChange = (
//     event: React.MouseEvent<HTMLElement>,
//     newAlignment: string,
//   ) => {
//     setAlignment(newAlignment);
//   };
 return(
    <Grid container>
        <Grid item lg={10}>
            <Image src="/icons/sparehub.svg" alt="sparehubIcon" width={152} height={40} />
        </Grid>
        <Grid lg={2} sx={{marginTop:"0px"}}>
            <Grid sx={{marginLeft:"89px"}}>
        <ToggleButtonGroup style={{height:"39px"}}
    //   color="warning"
    //   value={alignment}
    //   exclusive
    //   onChange={handleChange}
    >
      <ToggleButton className={mystyle ? "mystyle":"defaultstyle"} value="English" onClick={()=>{setmystyle(true)
    setmystyle1(false)}} style={{width:"80px"}}>English</ToggleButton>
      <ToggleButton value="android" className={mystyle1 ? "mystyle":"defaultstyle"} onClick={()=>{setmystyle1(true)
    setmystyle(false)}} style={{width:"80px"}}>عربى</ToggleButton>
    </ToggleButtonGroup>
          </Grid>
        </Grid>
    </Grid>)
}
export default Header
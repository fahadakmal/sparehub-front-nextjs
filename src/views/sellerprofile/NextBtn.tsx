import { Grid } from "@mui/material"
import React from "react"
const NextBtn=(props: any)=>{
    return(<Grid container sx={{marginTop:"1px"}} spacing={4}>
    <Grid item lg={9} sx={{color:"black"}}>
      {props.mand_fields}
    </Grid>
    
    <Grid item lg={1.5}>
      <Grid sx={{width:"150px", padding:"10px", borderRadius:"8px",textAlign:"center",border:"1px solid black",cursor: 'pointer' }} onClick={props.backNavigate}>{props.backBtn}</Grid>
    </Grid>
    <Grid item lg={1.5}>
      <Grid sx={{width:"150px",backgroundColor:"black",color:"white", padding:"10px", borderRadius:"8px",textAlign:"center",cursor: 'pointer'}} onClick={props.Validate}>{props.nextBtn}</Grid>
    </Grid>
    </Grid>)
}
export default NextBtn
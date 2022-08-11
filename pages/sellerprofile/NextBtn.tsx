import { Grid } from "@mui/material"
import React from "react"
const NextBtn=(props: any)=>{
    return(<Grid container sx={{marginTop:"50px",marginLeft:"9px"}}>
    <Grid item lg={8.5} sx={{color:"black"}}>
      Mandatory fields are marks with "*" next to its name
    </Grid>
    
    <Grid item lg={1.4} sx={props.visibility}>
      <Grid sx={{width:"150px", padding:"10px", borderRadius:"8px",textAlign:"center",border:"1px solid black", }} onClick={props.backNavigate}>Back</Grid>
    </Grid>
    <Grid item lg={1.2} sx={props.margins}>
      <Grid sx={{width:"150px",backgroundColor:"black",color:"white", padding:"10px", borderRadius:"8px",textAlign:"center"}} onClick={props.Validate}>Next</Grid>
    </Grid>
    </Grid>)
}
export default NextBtn
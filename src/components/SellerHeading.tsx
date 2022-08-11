import { Grid } from "@mui/material";
import React,{useState} from "react";

const SellerHeading=(props: any)=>{
  
    return(<>
    <Grid container>
    <Grid item lg={10}>
    <div style={{fontWeight:"700",color:"black",fontSize:"24px",marginTop:"20px",marginLeft:"20px",marginRight:"20px"}}>Complete your admin profile Details</div>
    </Grid>
    <Grid item lg={2} style={{fontWeight:"700",color:"black",fontSize:"16px",marginTop:"30px",fontStyle:"bold"}} onClick={props.mydata} >
      Save as Draft
    </Grid>
    </Grid>
    <Grid>
    <hr></hr>
    </Grid></>)
}
export default SellerHeading
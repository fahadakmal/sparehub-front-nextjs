import { Grid } from "@mui/material";
import React,{useState} from "react";

const SellerHeading=({headings,draftBtn,mydata}: any)=>{
  
    return(<>
    <Grid container>
    <Grid item lg={10.4}>
    <Grid className="sellerHeading">{headings}</Grid>
    </Grid>
    <Grid item lg={1.5}  onClick={mydata} >
      <Grid className="draftbtn">
      {draftBtn}
      </Grid>
    </Grid>
    </Grid>
    <Grid>
    <hr></hr>
    </Grid></>)
}
export default SellerHeading




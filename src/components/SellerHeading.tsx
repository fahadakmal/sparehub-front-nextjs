import { Grid } from "@mui/material";
import React,{useState} from "react";

const SellerHeading=(props: any)=>{
  
    return(<>
    <Grid container>
    <Grid item lg={10.4}>
    <Grid sx={{fontWeight:"700",color:"black",fontSize:"24px",marginTop:"20px",marginLeft:"20px",marginRight:"20px"}}>{props.headings}</Grid>
    </Grid>
    <Grid item lg={1.5}  onClick={props.mydata} >
      <Grid style={{fontWeight:"700",color:"black",fontSize:"16px",marginTop:"20px",fontStyle:"bold" , padding:"10px", borderRadius:"8px",textAlign:"center",border:"1px solid black",width:"180px",cursor: 'pointer'}}>
      {props.draftBtn}
      </Grid>
    </Grid>
    </Grid>
    <Grid>
    <hr></hr>
    </Grid></>)
}
export default SellerHeading


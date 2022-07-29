import React, { useState } from "react";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Grid } from "@mui/material";

const steps = [
    'Seller Account',
    'Business information',
    'Bank Account',
    'Warehouse Address',
    'Return Address',
  ];

const Steper=(props: any)=>{
    
    return(<Grid container>
{/* <Grid item xs={11} sx={{width:"100%"}}> */}
<Box sx={{width:"100%"}}>
      <Stepper activeStep={props.count} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
    {/* </Grid> */}
                {/* <div className='col-lg-2'>
                <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1" >
            <div className="radius1"> 
            </div>
            </div>
            <div className="col-lg-7 col-md-1 col-sm-1 col-xs-1" style={{width:"118px",fontSize:"14px"}}>
            Seller Account
            </div>
            <div className='col-lg-4' style={{width:"100px"}}>
            <hr></hr>
            </div>
            </div>
            </div>

            <div className='col-lg-2'>
                <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1" >
            <div className="radius1"> 
            </div>
            </div>
            <div className="col-lg-7 col-md-1 col-sm-1 col-xs-1" style={{width:"160px",fontSize:"14px"}}>
            Business information
            </div>
            <div className='col-lg-4' style={{width:"62px"}}>
            <hr ></hr>
            </div>
            </div>
            </div>

            <div className='col-lg-2'>
                <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1" >
            <div className="radius1"> 
            </div>
            </div>
            <div className="col-lg-7 col-md-1 col-sm-1 col-xs-1" style={{width:"115px",fontSize:"14px"}}>
            Bank Account
            </div>
            <div className='col-lg-4' style={{width:"105px"}}>
            <hr></hr>
            </div>
            </div>
            </div>

            <div className='col-lg-2'>
                <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1" >
            <div className="radius1"> 
            </div>
            </div>
            <div className="col-lg-8 col-md-1 col-sm-1 col-xs-1" style={{width:"160px",fontSize:"14px"}}>
            Warehouse Address
            </div>
            <div className='col-lg-3' style={{width:"62px"}}>
            <hr ></hr>
            </div>
            </div>
            </div>

            <div className='col-lg-2'>
                <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1" >
            <div className="radius1"> 
            </div>
            </div>
            <div className="col-lg-7 col-md-1 col-sm-1 col-xs-1" style={{width:"125px",fontSize:"14px"}}>
            Return Address
            </div>
            <div className='col-lg-4' style={{width:"95px"}}>
            <hr ></hr>
            </div>
            </div>
            </div> */}
            </Grid>)
}
export default Steper
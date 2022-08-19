import { Grid } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
interface StepperProps {
  steps: any;
  currentStep: number;
}

const Steper = ({ currentStep, steps }: StepperProps) => {
  
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

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

    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(currentStep);
      return newSkipped;
    });
  };

  return (
    <Grid container>
      <Box sx={{ width: '85%' }}>
        <Stepper activeStep={currentStep}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};
            if (isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption"></Typography>;
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>
    </Grid>
  );
};
export default Steper;

import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import styling from '../../stylesObjects/stylesObj';
import LANG_STRINGS from '../../enums/langStrings';
import { PrimaryButton } from '../../components/Button/PrimaryButton';
const NextBtn = ({ mand_fields, handleNext, handleBack, translate, currentStep }: any) => {
  const handleNextClick=()=>{
    if(currentStep <3){
      handleNext()
    }

  }
  const { flexBetween, sellerNextBtn, sellerBackBtn } = styling;
  return (
    <Grid container sx={{ marginTop: '1px' }} spacing={4}>
      <Grid item xs={12} md={8} lg={9.6} sx={{ color: 'black' }}>
        {mand_fields} <span style={{color:"red"}}>*</span>
      </Grid>

      <Grid item xs={6} md={2} lg={1}>
        <PrimaryButton variant="outlined" disabled={currentStep == 0} onClick={() => handleBack()} sx={sellerBackBtn}>
          {translate(LANG_STRINGS.BACK_BTN)}
        </PrimaryButton>
      </Grid>
      <Grid item xs={6} md={2} lg={1}>
        <PrimaryButton sx={sellerNextBtn} onClick={() =>handleNextClick()}>
          {currentStep == 3 ? translate(LANG_STRINGS.SUBMIT_BTN) : translate(LANG_STRINGS.NEXT_BTN)}
        </PrimaryButton>
      </Grid>
    </Grid>
  );
};
export default NextBtn;

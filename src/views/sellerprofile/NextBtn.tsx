import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import styling from '../../stylesObjects/stylesObj';
import LANG_STRINGS from '../../enums/langStrings';
import { PrimaryButton } from '../../components/Button/PrimaryButton';
const NextBtn = ({ mand_fields, handleNext, handleBack, translate }: any) => {
  const { flexBetween, sellerNextBtn, sellerBackBtn } = styling;
  return (
    <>
      <Box sx={flexBetween} mt={3}>
        <Typography>{mand_fields}</Typography>
        <Box sx={flexBetween}>
          <PrimaryButton variant="outlined" onClick={() => handleBack()} sx={sellerBackBtn}>
            {translate(LANG_STRINGS.BACK_BTN)}
          </PrimaryButton>

          <PrimaryButton sx={sellerNextBtn} onClick={() => handleNext()}>
            {translate(LANG_STRINGS.NEXT_BTN)}
          </PrimaryButton>
        </Box>
      </Box>
      {/* <Grid container sx={{ marginTop: '1px' }} spacing={4}>
      <Grid item lg={9} sx={{ color: 'black' }}>
        {mand_fields}
      </Grid>

      <Grid item lg={1.5}>
        <Grid
          sx={{
            width: '150px',
            padding: '10px',
            borderRadius: '8px',
            textAlign: 'center',
            border: '1px solid black',
            cursor: 'pointer',
          }}
          onClick={() => handleBack()}
        >
          {translate(LANG_STRINGS.BACK_BTN)}
        </Grid>
      </Grid>
      <Grid item lg={1.5}>
        <Grid
          sx={{
            width: '150px',
            backgroundColor: 'black',
            color: 'white',
            padding: '10px',
            borderRadius: '8px',
            textAlign: 'center',
            cursor: 'pointer',
          }}
          onClick={() => handleNext()}
        >
          {translate(LANG_STRINGS.NEXT_BTN)}
        </Grid>
      </Grid>
    </Grid> */}
    </>
  );
};
export default NextBtn;

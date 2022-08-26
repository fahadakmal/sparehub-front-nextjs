import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { saveDraftRequest } from '../redux/slices/sellerSlice';
import styling from '../stylesObjects/stylesObj';

const SellerHeading = ({ headings, draftBtn, data,disabled }: any) => {
  const dispatch = useDispatch()
  const { sellerBtnStyle, sellerHeading } = styling;

  const handleClick = ()=>{
    dispatch(saveDraftRequest({token:"",data}))
  } 
  return (
    <>
      {/* <Grid container> */}
      <Box mb={3} sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography sx={sellerHeading}>{headings}</Typography>
        <Button variant="outlined" onClick={handleClick} disabled={disabled} sx={sellerBtnStyle}>
          {draftBtn}
        </Button>
      </Box>
      <Divider sx={{ width: '100%' }} />
      {/* <Grid item md={11}>
          <Grid className="sellerHeading">{headings}</Grid>
          <Grid className="sellerHeading">{headings}</Grid>
        </Grid>
        <Grid item md={1} onClick={mydata}>
          <Button className="draftbtn">{draftBtn}</Button>
          <Button variant="outlined" sx={sellerBtnStyle}>
            {draftBtn}
          </Button>
        </Grid> */}
      {/* </Grid> */}
      {/* <Grid>
        <hr></hr>
      </Grid> */}
    </>
  );
};
export default SellerHeading;

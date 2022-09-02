import { Grid, Box, Typography, Button, Card } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PrimaryInput from '../../components/Input/PrimaryInput';
import SummaryTiles from './SummaryTiles';

const Orders = ({ translate }: any) => {
  return (
    <Grid container rowGap={3}>
      <Grid alignItems={'center'} xs={12} sx={{ display: { xs: 'none', sm: 'block' } }} sm={12}>
        <Typography fontWeight={'bold'} variant="h5">
          {translate('Orders')}
        </Typography>
      </Grid>
      <SummaryTiles translate={translate} />
    </Grid>
  );
};

export default Orders;

import { Grid, Box, Typography, Button, Card, IconButton } from '@mui/material';
import React, { useMemo, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PrimaryInput from '../../components/Input/PrimaryInput';
import SummaryTiles from './SummaryTiles';
import StatusBtn from './SearchAndFilters.tsx/StatusBtn';
import SearchAndFilters from './SearchAndFilters.tsx';

const Orders = ({ translate }: any) => {
  const [selectedBtn, setSelectedBtn] = useState('All');

  const handleChangeBtn = (btn: any) => {
    setSelectedBtn(btn);
  };

  return (
    <Grid container rowGap={3}>
      <Grid alignItems={'center'} xs={12} sx={{ display: { xs: 'none', sm: 'block' } }} sm={12}>
        <Typography fontWeight={'bold'} variant="h5">
          {translate('Orders')}
        </Typography>
      </Grid>
      <SummaryTiles translate={translate} />
      <SearchAndFilters translate={translate} selectedBtn={selectedBtn} handleChangeBtn={handleChangeBtn} />
    </Grid>
  );
};

export default Orders;

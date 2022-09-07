import { Grid, Box, Typography, Button, Card, IconButton } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PrimaryInput from '../../../components/Input/PrimaryInput';
import StatusBtn from './StatusBtn';

const styles = {
  filterIconBtn: {
    display: { sm: 'none' },
    backgroundColor: '#fff !important',
    border: '1px solid rgba(0, 0, 0, 0.12);',
    color: '#000',
    borderRadius: 2,
  },

  filterBtn: {
    display: { xs: 'none', sm: 'flex' },
    padding: '8px 0px',
    width: { sm: '137px' },
    borderRadius: '12px',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    backgroundColor: '#fff !important',
    color: '#000',
    border: '1px solid rgba(0, 0, 0, 0.12);',
  },
};

const SearchAndFilters = ({ translate, selectedBtn, handleChangeBtn }: any) => {
  const { filterIconBtn, filterBtn } = styles;

  return (
    <>
      <Grid container alignItems={'center'} justifyContent="space-between">
        <Grid bgcolor={'#fff'} xs={10} sm={7} md={10.4} lg={10.4} item>
          <PrimaryInput
            sx={{ '& .MuiOutlinedInput-input': { padding: '8px 0px' } }}
            fullWidth={true}
            label={translate('SEARCH')}
            placeholder={translate('SEARCH_ORDERS')}
            startAdornment={<SearchIcon />}
          />
        </Grid>
        <Grid sx={{ display: 'flex', justifyContent: 'flex-end' }} xs={2} sm={4.5} md={1.5} lg={1.5} item>
          <Button
            sx={filterBtn}
            color="inherit"
            variant="outlined"
            startIcon={<TuneIcon />}
            endIcon={<ExpandMoreIcon />}
          >
            {translate('FILTERS')}
          </Button>
          <IconButton sx={filterIconBtn}>
            <TuneIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container alignItems="center" justifyContent={'space-between'}>
        <Grid item xs={12}>
          <Grid container columnGap={0} spacing={1}>
            <Grid xs={12} sm={6} md={'auto'} item>
              <StatusBtn selectedBtn={selectedBtn} handleChangeBtn={handleChangeBtn} title={translate('ALL')} />
            </Grid>
            <Grid xs={12} sm={6} md={'auto'} item>
              <StatusBtn selectedBtn={selectedBtn} handleChangeBtn={handleChangeBtn} title={translate('IN_PROGRESS')} />
            </Grid>
            <Grid xs={12} sm={6} md={'auto'} item>
              <StatusBtn
                selectedBtn={selectedBtn}
                handleChangeBtn={handleChangeBtn}
                title={translate('PARTIALLY_SKIPPED')}
              />
            </Grid>
            <Grid xs={12} sm={6} md={'auto'} item>
              <StatusBtn selectedBtn={selectedBtn} handleChangeBtn={handleChangeBtn} title={translate('CANCELLED')} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SearchAndFilters;

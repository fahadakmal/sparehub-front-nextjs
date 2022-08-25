import { Grid, Box, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PrimaryInput from '../../components/Input/PrimaryInput';
import StatusBtn from './StatusBtn';
import ProductsGrid from './ProductsGrid';

const Products = () => {
  const [selectedBtn, setSelectedBtn] = useState('active');
  const handleChangeBtn = (btn: any) => {
    setSelectedBtn(btn);
  };
  return (
    <Grid container rowGap={3}>
      <Grid container alignItems={'center'} justifyContent={'space-between'}>
        <Grid md={10.4} item>
          <Typography variant="h5">Products</Typography>
        </Grid>
        <Grid sx={{ display: 'flex', justifyContent: 'flex-end' }} md={1.5} item>
          <Button
            sx={{ padding: '14px 16px', width: '137px', borderRadius: '12px' }}
            color="inherit"
            variant="outlined"
            startIcon={<AddIcon />}
          >
            Add
          </Button>
        </Grid>
      </Grid>
      <Grid container alignItems={'center'} justifyContent={'space-between'}>
        <Grid bgcolor={'#fff'} md={10.4} item>
          <PrimaryInput
            sx={{ '& .MuiOutlinedInput-input': { padding: '8px 0px' } }}
            fullWidth={true}
            label="Search"
            placeholder="Search Products"
            startAdornment={<SearchIcon />}
          />
        </Grid>
        <Grid sx={{ display: 'flex', justifyContent: 'flex-end' }} md={1.5} item>
          <Button
            sx={{
              padding: '8px 0px',
              width: '137px',
              borderRadius: '12px',
              fontWeight: 'bold',
              textTransform: 'capitalize',
              backgroundColor: '#fff',
              color: '#000',
              border: '1px solid rgba(0, 0, 0, 0.12);',
            }}
            color="inherit"
            variant="outlined"
            startIcon={<TuneIcon />}
            endIcon={<ExpandMoreIcon />}
          >
            Filters
          </Button>
        </Grid>
      </Grid>
      <Grid container columnGap={2}>
        <Grid item>
          <StatusBtn selectedBtn={selectedBtn} handleChangeBtn={handleChangeBtn} title="active" />
        </Grid>
        <Grid item>
          <StatusBtn selectedBtn={selectedBtn} handleChangeBtn={handleChangeBtn} title="inactive" />
        </Grid>
        <Grid item>
          <StatusBtn selectedBtn={selectedBtn} handleChangeBtn={handleChangeBtn} title="draft" />
        </Grid>
      </Grid>
      <ProductsGrid />
    </Grid>
  );
};

export default Products;

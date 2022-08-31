import { Grid, Box, Typography, Button, IconButton } from '@mui/material';
import React, { useMemo, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PrimaryInput from '../../components/Input/PrimaryInput';
import StatusBtn from './StatusBtn';
import ProductsGrid from './ProductsGrid';
import ProductListing from './ProductListing';

const styles = {
  addBtn: { padding: '14px 16px', width: { sm: '137px' }, borderRadius: '12px' },
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
  filterIconBtn: {
    display: { sm: 'none' },
    backgroundColor: '#fff !important',
    border: '1px solid rgba(0, 0, 0, 0.12);',
    color: '#000',
    borderRadius: 2,
  },
  productActionBtn: { textTransform: 'capitalize', fontWeight: 'bold' },
};

const Products = ({ translate }: any) => {
  const { addBtn, filterBtn, filterIconBtn, productActionBtn } = styles;
  const [selectedBtn, setSelectedBtn] = useState('active');
  const [page, setPage] = useState(1);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const handleChangeBtn = (btn: any) => {
    setSelectedBtn(btn);
  };
  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log('🚀 ~ file: Products.tsx ~ line 44 ~ handleChangePage ~ value', value);
    setPage(value);
  };

  const handleSelectItems = (items: any) => {
    setSelectedProducts(items);
  };
  const selectedCount = useMemo(() => selectedProducts.length, [selectedProducts]);
  return (
    <Grid container rowGap={3}>
      <Grid container alignItems={'center'} justifyContent={'space-between'}>
        <Grid sx={{ display: { xs: 'none', sm: 'block' } }} xs={12} sm={10.4} item>
          <Typography variant="h5">{translate('PRODUCTS')}</Typography>
        </Grid>
        <Grid xs={12} sx={{ display: 'flex', justifyContent: { md: 'flex-end' } }} sm={1.5} item>
          <Button sx={addBtn} color="inherit" variant="outlined" fullWidth startIcon={<AddIcon />}>
            {translate('ADD')}
          </Button>
        </Grid>
      </Grid>
      <Grid container alignItems={'center'} columnSpacing={2}>
        <Grid bgcolor={'#fff'} xs={10} sm={9} lg={10.4} item>
          <PrimaryInput
            sx={{ '& .MuiOutlinedInput-input': { padding: '8px 0px' } }}
            fullWidth={true}
            label={translate('SEARCH')}
            placeholder={translate('SEARCH_PRODUCTS')}
            startAdornment={<SearchIcon />}
          />
        </Grid>
        <Grid sx={{ display: 'flex', justifyContent: 'flex-end' }} xs={2} sm={3} lg={1.5} item>
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
        <Grid item xs={12} sm={6}>
          <Grid container columnGap={0} spacing={1}>
            <Grid xs={4} sm={'auto'} item>
              <StatusBtn selectedBtn={selectedBtn} handleChangeBtn={handleChangeBtn} title={translate('ACTIVE')} />
            </Grid>
            <Grid xs={4} sm={'auto'} item>
              <StatusBtn selectedBtn={selectedBtn} handleChangeBtn={handleChangeBtn} title={translate('INACTIVE')} />
            </Grid>
            <Grid xs={4} sm={'auto'} item>
              <StatusBtn selectedBtn={selectedBtn} handleChangeBtn={handleChangeBtn} title={translate('DRAFT')} />
            </Grid>
          </Grid>
        </Grid>

        <Grid xs={12} sm={6} sx={{ display: { xs: 'none', sm: 'block' } }} item>
          {selectedCount > 0 && (
            <Grid columnSpacing={1} container alignItems="center">
              <Grid item>
                <Typography fontWeight={'bold'}>{`${selectedCount} Items Selected`}</Typography>
              </Grid>
              <Grid item>
                <Button sx={productActionBtn} color="inherit" variant="outlined">
                  {translate('INACTIVE')}
                </Button>
              </Grid>
              <Grid item>
                <Button sx={productActionBtn} color="error" variant="contained">
                  {translate('DELETE')}
                </Button>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={12} sx={{ display: { xs: 'none', sm: 'block' } }} item>
          <ProductsGrid
            handleSelectItems={handleSelectItems}
            page={page}
            handleChangePage={handleChangePage}
            translate={translate}
          />
        </Grid>
        <Grid sx={{ display: { sm: 'none' } }} xs={12} item>
          <ProductListing page={page} handleChangePage={handleChangePage} translate={translate} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Products;

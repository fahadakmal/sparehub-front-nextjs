import React from 'react';
import GridPagination from './GridPagination';
import { rows } from './ProductData';
import ProductCard from './ProductCard';
import { Button, Box } from '@mui/material';

const ProductListing = ({ translate, page, handleChangePage }: any) => {
  const handleLoadMore = (e: any) => {
    handleChangePage(e, page + 1);
  };
  return (
    <>
      {rows.map((product) => (
        <ProductCard key={product.id} translate={translate} item={product} />
      ))}
      <Box display={'flex'} justifyContent={'center'}>
        <Button
          onClick={handleLoadMore}
          sx={{ textTransform: 'none', fontWeight: 'bold' }}
          size="large"
          color="inherit"
          variant="outlined"
        >
          {translate('LOAD_MORE')}
        </Button>
      </Box>
      {/* <GridPagination page={page} handleChangePage={handleChangePage} boundaryCount={0} /> */}
    </>
  );
};

export default ProductListing;

import React from 'react';
import WithAuthentication from '../src/hooks/WithAuthentication';
import { Products } from '../src/views/Products';

const ProductsPage = () => {
  return <WithAuthentication component={Products} requiredAuth={true} />;
};

export default ProductsPage;

import React from 'react';
import WithAuthentication from '../src/hooks/WithAuthentication';
import { Orders } from '../src/views/Orders';

const OrdersPage = () => {
  return <WithAuthentication component={Orders} requiredAuth={true} />;
};

export default OrdersPage;

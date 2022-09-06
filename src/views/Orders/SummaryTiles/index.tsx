import { Grid, Box, Typography, Button, Card } from '@mui/material';
import React, { useState } from 'react';
import SummaryTile from './SummaryTile';

const SummaryTiles = ({ translate }: any) => {
  const [selectedRange, setSelectedRange] = useState({
    IN_PROGRESS_ORDERS: 0,
    CANCELLED_ORDERS: 1,
    DELIVERED_ORDERS: 0,
    COMPLETED_ORDERS: 1,
  });

  const ordersCount: any = {
    IN_PROGRESS_ORDERS: { 0: 118, 1: 500 },
    CANCELLED_ORDERS: { 0: 74, 1: 600 },
    DELIVERED_ORDERS: { 0: 223, 1: 1000 },
    COMPLETED_ORDERS: { 0: 15, 1: 50 },
  };

  const handleChange = (e: any) => {
    setSelectedRange({ ...selectedRange, [e.target.name]: e.target.value });
  };
  const menuItems = [
    { value: 0, label: 'LAST_7_DAYS' },
    { value: 1, label: 'LAST_MONTH' },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={3}>
        <SummaryTile
          translate={translate}
          countColor={'#F6A051'}
          countValue={ordersCount.IN_PROGRESS_ORDERS[selectedRange.IN_PROGRESS_ORDERS]}
          handleChange={handleChange}
          menuItems={menuItems}
          name="IN_PROGRESS_ORDERS"
          selectedRange={selectedRange.IN_PROGRESS_ORDERS}
        />
      </Grid>

      <Grid item xs={12} md={6} lg={3}>
        <SummaryTile
          translate={translate}
          countColor="#46BB59"
          countValue={ordersCount.DELIVERED_ORDERS[selectedRange.DELIVERED_ORDERS]}
          handleChange={handleChange}
          menuItems={menuItems}
          name="DELIVERED_ORDERS"
          selectedRange={selectedRange.DELIVERED_ORDERS}
        />
      </Grid>

      <Grid item xs={12} md={6} lg={3}>
        <SummaryTile
          translate={translate}
          countColor="#3065CC"
          countValue={ordersCount.COMPLETED_ORDERS[selectedRange.COMPLETED_ORDERS]}
          handleChange={handleChange}
          menuItems={menuItems}
          name="COMPLETED_ORDERS"
          selectedRange={selectedRange.COMPLETED_ORDERS}
        />
      </Grid>

      <Grid item xs={12} md={6} lg={3}>
        <SummaryTile
          translate={translate}
          countColor="#E2282C"
          countValue={ordersCount.CANCELLED_ORDERS[selectedRange.CANCELLED_ORDERS]}
          handleChange={handleChange}
          menuItems={menuItems}
          name="CANCELLED_ORDERS"
          selectedRange={selectedRange.CANCELLED_ORDERS}
        />
      </Grid>
    </Grid>
  );
};

export default SummaryTiles;

import { Grid, Box, Typography, Button, Card } from '@mui/material';
import React, { useState } from 'react';
import SummaryTile from './SummaryTile';

const SummaryTiles = ({ translate }: any) => {
  const [selectedRange, setSelectedRange] = useState({
    In_Progress_Orders: 0,
    Cancelled_Orders: 1,
    Delivered_Orders: 0,
    Completed_Orders: 1,
  });

  const ordersCount: any = {
    In_Progress_Orders: { 0: 118, 1: 500 },
    Cancelled_Orders: { 0: 74, 1: 600 },
    Delivered_Orders: { 0: 223, 1: 1000 },
    Completed_Orders: { 0: 15, 1: 50 },
  };

  const handleChange = (e: any) => {
    setSelectedRange({ ...selectedRange, [e.target.name]: e.target.value });
  };
  const menuItems = [
    { value: 0, label: 'last_7_days' },
    { value: 1, label: 'last_month' },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={3}>
        <SummaryTile
          translate={translate}
          countColor={'#F6A051'}
          countValue={ordersCount.In_Progress_Orders[selectedRange.In_Progress_Orders]}
          handleChange={handleChange}
          menuItems={menuItems}
          name="In_Progress_Orders"
          selectedRange={selectedRange.In_Progress_Orders}
        />
      </Grid>

      <Grid item xs={12} md={6} lg={3}>
        <SummaryTile
          translate={translate}
          countColor="#46BB59"
          countValue={ordersCount.Delivered_Orders[selectedRange.Delivered_Orders]}
          handleChange={handleChange}
          menuItems={menuItems}
          name="Delivered_Orders"
          selectedRange={selectedRange.Delivered_Orders}
        />
      </Grid>

      <Grid item xs={12} md={6} lg={3}>
        <SummaryTile
          translate={translate}
          countColor="#3065CC"
          countValue={ordersCount.Completed_Orders[selectedRange.Completed_Orders]}
          handleChange={handleChange}
          menuItems={menuItems}
          name="Completed_Orders"
          selectedRange={selectedRange.Completed_Orders}
        />
      </Grid>

      <Grid item xs={12} md={6} lg={3}>
        <SummaryTile
          translate={translate}
          countColor="#E2282C"
          countValue={ordersCount.Cancelled_Orders[selectedRange.Cancelled_Orders]}
          handleChange={handleChange}
          menuItems={menuItems}
          name="Cancelled_Orders"
          selectedRange={selectedRange.Cancelled_Orders}
        />
      </Grid>
    </Grid>
  );
};

export default SummaryTiles;

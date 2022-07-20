import React from 'react';
import { Typography } from '@mui/material';
import Header from '../../layout/Header';
import { translate } from '../../utils';

const Dashboard = () => {
  return (
    <>
      <Header />
      <Typography variant="h3">{translate('WELCOME_USER')}</Typography>
    </>
  );
};

export default Dashboard;

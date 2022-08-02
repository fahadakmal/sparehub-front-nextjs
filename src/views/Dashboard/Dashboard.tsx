import React from 'react';
import { Typography } from '@mui/material';
import Header from '../../layout/Header';
import Statistics from './Statistics';
import Graph from './Graph';

const Dashboard = ({ translate }: any) => {
  return (
    <>
      <Statistics />
      <Graph />
    </>
  );
};

export default Dashboard;

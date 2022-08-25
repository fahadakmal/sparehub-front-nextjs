import React from 'react';
import { Box } from '@mui/material';

const Footer = ({ translate }: any) => {
  return (
    <Box textAlign="center" fontWeight={'500'} fontSize={16}>
      {translate('COPY_RIGHTS')}
    </Box>
  );
};
export default Footer;

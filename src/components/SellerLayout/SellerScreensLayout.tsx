import { Grid, Paper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Header from '../../layout/Header';
import { useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styling from '../../stylesObjects/stylesObj';

const SellerScreenLayout = ({ children }: any) => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const { bgColor, mainSellerLayout } = styling;
  return (
    <Grid sx={bgColor}>
      {/* <Grid className="webgColor"> */}
      <Header />
      <Box component={'div'} dir={i18n.dir()}>
        <Box sx={mainSellerLayout}>
          <Paper elevation={20} sx={{ padding: '50px', borderRadius: '12px' }}>
            {children}
          </Paper>
        </Box>
      </Box>
    </Grid>
  );
};
export default SellerScreenLayout;

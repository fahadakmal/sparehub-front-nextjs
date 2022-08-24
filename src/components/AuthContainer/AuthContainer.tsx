import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next';
import { Hidden } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import { Welcome } from '../../../public/images';
import Image from 'next/image';
import MobileHeader from '../../layout/MobileHeader';

export default function AuthContainer({ children }: any) {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container sx={{ height: '100vh' }}>
      <Hidden mdUp>
        <Box position="absolute" sx={{ zIndex: 1, width: '100%', padding: '20px' }}>
          <MobileHeader />
        </Box>
      </Hidden>
      <Grid item xs={12} md={6} sx={{ height: { xs: '30%', md: '100%' }, position: 'relative' }}>
        <Image src={Welcome} layout="fill" objectFit="cover" />
      </Grid>
      <Grid item xs={12} md={6} sx={{ paddingTop: { xs: '20px', md: '0px' } }}>
        <Hidden mdDown>
          <Header />
        </Hidden>
        <Box dir={i18n.dir()} sx={{ minHeight: '80vh' }}>
          <Grid container px={isMobileScreen ? 5 : 15} rowGap={2}>
            {children}
          </Grid>
        </Box>
        <Footer translate={t} />
      </Grid>
    </Grid>
  );
}

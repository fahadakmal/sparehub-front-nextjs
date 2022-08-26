import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery, useTheme, Grid, Box } from '@mui/material';
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
      <Box position="absolute" sx={{ zIndex: 1, width: '100%', padding: '20px', display: { md: 'none' } }}>
        <MobileHeader />
      </Box>

      <Grid item xs={12} md={6} sx={{ height: { xs: '30%', md: '100%' }, position: 'relative' }}>
        <Image src={Welcome} layout="fill" objectFit="cover" />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          height: { md: '100%' },
          overflow: 'auto',
          paddingTop: { xs: '20px', md: '0px' },
        }}
      >
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Header />
        </Box>
        <Box dir={i18n.dir()} sx={{ minHeight: { xs: '60vh', md: '80vh' } }}>
          <Grid container px={isMobileScreen ? 5 : 15} rowGap={2}>
            {children}
          </Grid>
        </Box>
        <Grid pt={3}>
          <Footer translate={t} />
        </Grid>
      </Grid>
    </Grid>
  );
}

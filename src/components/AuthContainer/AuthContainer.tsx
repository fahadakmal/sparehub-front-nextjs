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
const useStyles = {
  leftContainer: {
    display: 'flex',
  },

  footer: {
    height: '10vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
};

export default function AuthContainer({ children }: any) {
  const { leftContainer, footer } = useStyles;
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container sx={{ minHeight: '100vh' }}>
      <Hidden mdDown>
        <Grid item sx={leftContainer} xs={12} sm={6}>
          <Image src={Welcome} />
        </Grid>
      </Hidden>
      <Grid item xs={12} sm={12} md={6}>
        <Box>
          <Header />
        </Box>
        <Box component={'div'} dir={i18n.dir()} sx={{ minHeight: '80vh' }}>
          <Grid px={isMobileScreen ? 5 : 15} container rowGap={2}>
            {children}
          </Grid>
        </Box>
        <Box sx={footer}>
          <Footer translate={t} />
        </Box>
      </Grid>
    </Grid>
  );
}

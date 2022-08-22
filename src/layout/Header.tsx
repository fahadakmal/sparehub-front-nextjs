import React, { useState } from 'react';
import { Grid, Hidden, useMediaQuery, useTheme } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import i18next from 'i18next';
import { Logo } from '../../public/icons';
import LANGUAGES from '../enums';
import Image from 'next/image';

const useStyles = {
  toggleBtn: {
    borderRadius: 2,
    color: '#000',
    borderColor: '#D9D9D9',
    width: '90px',
    fontWeight: '500',
    '&:hover': {
      borderColor: '#D9D9D9',
    },
  },
  englishBtn: {
    borderRight: 'none',
    '&:hover': {
      borderRight: 'none',
    },
  },
  arabicBtn: {
    borderLeft: 'none',
    '&:hover': {
      borderLeft: 'none',
    },
  },
};

const Header = () => {
  const { englishBtn, arabicBtn, toggleBtn } = useStyles;
  const storedLang = localStorage.getItem('i18nextLng');
  const [language, setLanguage] = useState(storedLang || 'en');
  const handleChangeLanguage = (e: any, newVal: string) => {
    setLanguage(newVal);
    i18next.changeLanguage(newVal);
  };
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid container alignItems={'center'} justifyContent={isMobileScreen ? 'center' : 'space-between'} padding={3}>
      <Hidden smDown>
        <Grid item>
          <Image src={Logo} />
        </Grid>
      </Hidden>
      <Grid item>
        <Box width={'100%'}>
          <Tabs
            sx={{
              '& .MuiButtonBase-root.MuiTab-root': {
                color: '#000',
              },
              '& .MuiTabs-indicator': { display: 'none' },
              border: 1,
              borderColor: '#D9D9D9',
              borderRadius: '7px',
            }}
            value={language}
            onChange={handleChangeLanguage}
          >
            <Tab
              sx={{ color: '#000000', backgroundColor: language === 'en' ? '#F0F3FD' : 'default', borderRadius: '8px' }}
              value="en"
              label={LANGUAGES.eng}
            />
            <Tab
              sx={[
                { color: '#000000', backgroundColor: language === 'ar' ? '#F0F3FD' : 'default', borderRadius: '8px' },
              ]}
              value="ar"
              label={LANGUAGES.ar}
            />
          </Tabs>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;

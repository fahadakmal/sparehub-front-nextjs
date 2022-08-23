import { Grid, Hidden, useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import i18next from 'i18next';
import Image from 'next/image';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Logo } from '../../public/icons';
import LANGUAGES from '../enums';
import { handleChangeLanguage } from '../redux/slices/languageSlice';

const Header = (props: any) => {
  const dispatch = useDispatch();
  const storedLang = localStorage.getItem('i18nextLng');
  const [language, setLanguage] = useState(storedLang || 'en');
  const handleLanguage = (e: any, newVal: string) => {
    setLanguage(newVal);
    i18next.changeLanguage(newVal);
    dispatch(handleChangeLanguage(newVal));
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
            onChange={handleLanguage}
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

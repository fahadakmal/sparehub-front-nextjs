import { useState } from 'react';
import { useDispatch } from 'react-redux';
import i18next from 'i18next';
import Image from 'next/image';
import { Grid, Tab, Tabs } from '@mui/material';
import { Logo } from '../../public/icons';
import LANGUAGES from '../enums';
import { handleChangeLanguage } from '../redux/slices/languageSlice';

const styles = {
  tab: {
    color: '#000',
    '&.Mui-selected': {
      color: '#fff',
      backgroundColor: '#E2282C',
      borderRadius: '8px',
    },
  },
};

const MobileHeader = (props: any) => {
  const { tab } = styles;
  const dispatch = useDispatch();
  const storedLang = localStorage.getItem('i18nextLng');
  const [language, setLanguage] = useState(storedLang || 'en');
  const handleLanguage = (e: any, newVal: string) => {
    setLanguage(newVal);
    i18next.changeLanguage(newVal);
    dispatch(handleChangeLanguage(newVal));
  };

  return (
    <Grid container alignItems={'center'} justifyContent={'space-between'}>
      <Grid item>
        <Image src={Logo} />
      </Grid>
      <Grid item>
        <Tabs
          sx={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            '&.MuiTabs-root': {
              height: '32px',
            },
            '& .MuiTabs-indicator': { display: 'none' },
          }}
          value={language}
          onChange={handleLanguage}
        >
          <Tab sx={tab} value="en" label={LANGUAGES.eng} />
          <Tab sx={tab} value="ar" label={LANGUAGES.ar} />
        </Tabs>
      </Grid>
    </Grid>
  );
};

export default MobileHeader;

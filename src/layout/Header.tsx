import { useState } from 'react';
import { useDispatch } from 'react-redux';
import i18next from 'i18next';
import Image from 'next/image';
import { Grid, Tab, Tabs } from '@mui/material';
import { Logo } from '../../public/icons';
import LANGUAGES from '../enums';
import { handleChangeLanguage } from '../redux/slices/languageSlice';
import Link from 'next/link';

const styles = {
  tab: {
    color: '#000',
    '&.Mui-selected': {
      color: '#fff',
      backgroundColor: '#F0F3FD',
      borderRadius: '8px',
    },
  },
};

const Header = (props: any) => {
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
    <Grid container alignItems={'center'} justifyContent={'space-between'} padding={3}>
      <Grid item>
        <Link href="/" passHref>
          <Image src={Logo} />
        </Link>
      </Grid>
      <Grid item>
        <Tabs
          sx={{
            '& .MuiButtonBase-root.MuiTab-root': {
              color: '#000',
            },
            '& .MuiTabs-indicator': { display: 'none' },
            border: 1,
            borderColor: '#D9D9D9',
            borderRadius: '8px',
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

export default Header;

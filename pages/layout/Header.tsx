import React, { useEffect, useState } from 'react';
import { Grid, Hidden, useMediaQuery, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import i18next from 'i18next';
// import { Logo } from '../../public/assets/icons';
import LANGUAGES from '../enums';

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
  const [data,setmydata]=useState<any>('');
  const { englishBtn, arabicBtn, toggleBtn } = useStyles;
  const ISSERVER = typeof window === "undefined";
  console.log(ISSERVER,'aown')
  useEffect(()=>{
    if (!ISSERVER) {
      const storedLang = localStorage.getItem('i18nextLng');
      setmydata(storedLang)
    }
    else{
      
    }
  },[])
  
  // const storedLang = localStorage.getItem('i18nextLng');
  
  const [language, setLanguage] = useState(data || 'en');
  const handleChangeLanguage = (lng: string) => {
    setLanguage(lng);
    i18next.changeLanguage(lng);
  };
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid container alignItems={'center'} justifyContent={isMobileScreen ? 'center' : 'space-between'} padding={3}>
      <Hidden smDown>
        <Grid item>
          {/* <Logo /> */}
        </Grid>
      </Hidden>
      <Grid item>
        <ButtonGroup variant="outlined">
          <Button
            onClick={() => {
              handleChangeLanguage('en');
            }}
            sx={[englishBtn, toggleBtn, { backgroundColor: language === 'en' ? '#F0F3FD' : 'default' }]}
          >
            {LANGUAGES.eng}
          </Button>
          <Button
            onClick={() => {
              handleChangeLanguage('ar');
            }}
            sx={[arabicBtn, toggleBtn, { backgroundColor: language === 'ar' ? '#F0F3FD' : 'default' }]}
          >
            {LANGUAGES.ar}
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

export default Header;

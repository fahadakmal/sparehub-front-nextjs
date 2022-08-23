import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Avatar, Box, Grid, IconButton, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import i18next from 'i18next';
import LANGUAGES from '../../enums';
import SeachInput from '../SearchInput/SearchInput';
import { useDispatch } from 'react-redux';
import { handleChangeLanguage } from '../../redux/slices/languageSlice';
import { useAuth } from '../../auth/Auth';

const styles = {
  navbarContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabs: {
    '&.MuiTabs-root': {
      minHeight: '40px',
      height: '40px',
    },
    '& .MuiTabs-indicator': { display: 'none' },
    border: 1,
    borderColor: '#D9D9D9',
    borderRadius: '8px',
  },
  tab: {
    color: '#000',
    borderRadius: '8px',
    fontFamily: 'Mulish',
    fontWeight: 'bold',
    fontSize: '12px',
    '&.Mui-selected': {
      color: '#fff',
      backgroundColor: '#10113A',
    },
    '&.MuiTab-root': {
      minHeight: '40px',
      height: '40px',
    },
  },
  userProfileBox: {
    display: 'flex',
    border: '1px solid',
    borderRadius: '70px',
    borderColor: '#e5e5e5',
    height: '48px',
    width: '138px',
    padding: '3px',
    alignItems: 'center',
  },
};

export default function NavBar(props: any) {
  const auth: any = useAuth();
  const router = useRouter();
  const dispatch = useDispatch();
  const { handleDrawerToggle, translate } = props;
  const { navbarContainer, tabs, tab, userProfileBox } = styles;
  const storedLang = localStorage.getItem('i18nextLng');
  const [language, setLanguage] = useState(storedLang || 'en');
  const handleLanguage = (e: any, newVal: string) => {
    setLanguage(newVal);
    i18next.changeLanguage(newVal);
    dispatch(handleChangeLanguage(newVal));
  };

  onchange = () => {
    console.log('onchange');
  };

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <Toolbar>
      <Grid sx={navbarContainer}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ display: { sm: 'none' }, color: 'red' }}
        >
          <MenuIcon />
        </IconButton>
        <Grid container sx={{ justifyContent: { xs: 'end', md: 'space-between' } }} alignItems="center">
          <Grid item sm={4} sx={{ display: { xs: 'none', md: 'block' } }}>
            <SeachInput
              label={translate('SEARCH')}
              buttonText={translate('SEARCH')}
              onchange={onchange}
              placeholder={translate('SEARCH_PLACEHOLDER')}
              language={language}
            />
          </Grid>
          <Grid item>
            <Grid container alignItems="center" gap={1}>
              <NotificationsOutlinedIcon sx={{ color: 'black' }} />
              <Tabs sx={tabs} value={language} onChange={handleLanguage}>
                <Tab sx={tab} value="en" label={LANGUAGES.eng} />
                <Tab sx={tab} value="ar" label={LANGUAGES.ar} />
              </Tabs>
              <Box onClick={handleLogout} sx={userProfileBox}>
                <Avatar alt="Ted talk" src="https://picsum.photos/200/300" />
                <Grid container alignItems="center" direction="column">
                  <Typography sx={{ fontFamily: 'Mulish', fontWeight: 'bold', fontSize: '14px', color: 'black' }}>
                    Admin
                  </Typography>
                  {/* <Typography sx={{ fontFamily: 'Mulish', fontSize: '12px', color: 'black' }}>Admin</Typography> */}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Toolbar>
  );
}

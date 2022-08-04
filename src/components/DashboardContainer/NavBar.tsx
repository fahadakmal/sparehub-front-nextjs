import React, { useState } from 'react';
import { Avatar, Box, Grid, IconButton, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import i18next from 'i18next';
import LANGUAGES from '../../enums';
import SeachInput from '../SearchInput/SearchInput';

export default function NavBar(props: any) {
  const storedLang = localStorage.getItem('i18nextLng');
  const [language, setLanguage] = useState(storedLang || 'en');
  const handleChangeLanguage = (e: any, newVal: string) => {
    setLanguage(newVal);
    i18next.changeLanguage(newVal);
  };
  const { window, children, translate } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Toolbar>
      <Grid
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Grid
          sx={{
            display: 'flex',
            width: '65%',

            // justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <SeachInput />
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '35%',
            paddingLeft: '10px',
          }}
        >
          <NotificationsOutlinedIcon sx={{ color: 'black' }} />
          <Tabs
            sx={{
              '&.MuiTabs-root': {
                minHeight: '40px',
                height: '40px',
              },
              '& .MuiTabs-indicator': { display: 'none' },
              border: 1,
              borderColor: '#D9D9D9',
              borderRadius: '8px',
            }}
            value={language}
            onChange={handleChangeLanguage}
          >
            <Tab
              sx={{
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
              }}
              value="en"
              label={LANGUAGES.eng}
            />
            <Tab
              sx={[
                {
                  color: '#000',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  fontSize: '12px',
                  fontFamily: 'Mulish',
                  '&.Mui-selected': {
                    color: '#fff',
                    backgroundColor: '#10113A',
                  },
                  '&.MuiTab-root': {
                    minHeight: '40px',
                    height: '40px',
                  },
                },
              ]}
              value="ar"
              label={LANGUAGES.ar}
            />
          </Tabs>
          <Box
            sx={{
              display: 'flex',
              border: '1px solid',
              borderRadius: '70px',
              borderColor: '#e5e5e5',
              height: '48px',
              width: '138px',
              padding: '3px',
              alignItems: 'center',
            }}
          >
            <Avatar
              alt="Ted talk"
              src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
            />
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'black',
                paddingLeft: '5px',
              }}
            >
              <Typography
                sx={{ fontFamily: 'Mulish', fontWeight: 'bold', fontSize: '14px' }}
                align="left"
                variant="body1"
              >
                John Alex
              </Typography>
              <Typography sx={{ fontFamily: 'Mulish', fontWeight: '400', fontSize: '12px' }}>Admin</Typography>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Toolbar>
  );
}

import React, { useState } from 'react';
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Grid,
  Tabs,
  Tab,
  Button,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import MenuIcon from '@mui/icons-material/Menu';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
// import { NotificationsNoneOutlined, SettingsOutlined } from '@mui/icons-material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { WhiteLogo } from '../../../public/icons';
import SeachInput from '../SearchInput/SearchInput';
import { Search } from '@mui/icons-material';
import Image from 'next/image';
// import { Search } from '@mui/icons-material';

import i18next from 'i18next';
import LANGUAGES from '../../enums';
import PrimaryInput from '../Input/PrimaryInput';

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
  searchButtonRoot: {
    border: '1px solid',
    borderRadius: '8px',
    height: '40px',
    textAlign: 'center',
    background: '#10113A',
    color: '#fff',
    letterSpacing: 0.28,
    fontFamily: 'Mulish',
    fontWeight: 'bold',
    '&:hover': {
      background: '#10113A',
    },
  },
};

const drawerWidth = 250;

const listitems = [
  {
    item: 0,
    key: 'dashboard',
    label: 'DASHBOARD',
    icon: <DashboardIcon />,
  },
  {
    item: 1,
    key: 'orderProcessing',
    label: 'ORDER_PROCESSING',
    icon: <AddShoppingCartIcon />,
  },
  {
    item: 2,
    key: 'analyticsReports',
    label: 'ANALYTICS_AND_REPORTS',
    icon: <AnalyticsIcon />,
  },
  {
    item: 3,
    key: 'products',
    label: 'PRODUCTS',
    icon: <InventoryIcon />,
  },
  {
    item: 4,
    key: 'reviewsRating',
    label: 'REVIEW_RATING',
    icon: <ReviewsOutlinedIcon />,
  },
  {
    item: 5,
    key: 'messaging',
    label: 'MESSAGING',
    icon: <ChatOutlinedIcon />,
  },
  {
    item: 6,
    key: 'paymentManagement',
    label: 'PAYMENT_MANAGEMENT',
    icon: <PaymentOutlinedIcon />,
  },
  {
    item: 7,
    key: 'setting',
    label: 'SETTINGS',
    icon: <SettingsOutlinedIcon />,
  },
];

export default function DashboardContainer(props: any) {
  const { searchButtonRoot } = useStyles;
  const storedLang = localStorage.getItem('i18nextLng');
  const [language, setLanguage] = useState(storedLang || 'en');
  const handleChangeLanguage = (e: any, newVal: string) => {
    setLanguage(newVal);
    i18next.changeLanguage(newVal);
  };
  const { window, children, translate } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event: any, index: any) => {
    setSelectedIndex(index);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div style={{ margin: '12px 0px 0px 15px', paddingTop: '10px' }}>
        <Image src={WhiteLogo} />
      </div>
      <List>
        {listitems.map((item, index) => (
          <ListItem
            button
            onClick={(event) => handleListItemClick(event, index)}
            sx={{ paddingTop: item.key === 'setting' ? '200px' : '20px' }}
            key={item.key}
            disablePadding
          >
            <ListItemButton selected={selectedIndex === item.item}>
              <ListItemIcon style={{ minWidth: '40px', color: selectedIndex === item.item ? '#fff' : '#85869B' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ color: selectedIndex === item.item ? '#fff' : '#85869B' }}
                primary={translate(item.label)}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: '#fff !important',
        }}
        elevation={0}
      >
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
                // backgroundColor: 'green',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* <SeachInput /> */}
              <PrimaryInput
                type={'text'}
                name="search"
                // placeholder={translate('ENTER_PASSWORD')}
                placeholder="e.g products, reports, staff ..."
                startAdornment={<Search />}
                endAdornment={<Button sx={searchButtonRoot}>Search</Button>}
              />
            </Grid>
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '50%',
              }}
            >
              <Tabs
                sx={{
                  '& .MuiTabs-indicator': { display: 'none' },
                  border: 1,
                  borderColor: '#D9D9D9',
                  borderRadius: '8px',
                  height: '0px !important',
                }}
                value={language}
                onChange={handleChangeLanguage}
              >
                <Tab
                  sx={{
                    color: '#000',
                    backgroundColor: language === 'en' ? '#10113A' : 'default',
                    borderRadius: '8px',
                    fontFamily: 'Mulish',
                    fontWeight: 'bold',
                    fontSize: '12px',
                    '&.Mui-selected': {
                      color: '#fff',
                    },
                  }}
                  value="en"
                  label={LANGUAGES.eng}
                />
                <Tab
                  sx={[
                    {
                      backgroundColor: language === 'ar' ? '#10113A' : 'default',
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      fontSize: '12px',
                      fontFamily: 'Mulish',
                      '&.Mui-selected': {
                        color: '#fff',
                      },
                    },
                  ]}
                  value="ar"
                  label={LANGUAGES.ar}
                />
              </Tabs>
              <Tabs
                sx={{
                  '& .MuiButtonBase-root.MuiTab-root': {
                    color: '#000',
                  },
                  '& .MuiTabs-indicator': { display: 'none' },
                  border: 1,
                  borderColor: '#D9D9D9',
                  borderRadius: '70px',
                }}
                value={language}
                onChange={handleChangeLanguage}
              >
                <Tab
                  sx={{
                    color: '#000000',
                    backgroundColor: language === 'en' ? '#F0F3FD' : 'default',
                    borderRadius: '8px',
                  }}
                  value="en"
                  label={LANGUAGES.eng}
                />
                <Tab
                  sx={[
                    {
                      color: '#000000',
                      backgroundColor: language === 'ar' ? '#F0F3FD' : 'default',
                      borderRadius: '8px',
                    },
                  ]}
                  value="ar"
                  label={LANGUAGES.ar}
                />
              </Tabs>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#10113A' },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#10113A' },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          height: `calc(100vh - 64px)`,
          p: 0,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: '#F8FAFF',
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

import React, { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SellerDetailPage from '../../../pages/seller/create';
import SellerDetailPage from '../../../pages/seller/create';
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import i18next from 'i18next';
import Image from 'next/image';
import { WhiteLogo } from '../../../public/icons';
import Navbar from './NavBar';
import { useRouter } from 'next/router';
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
  const { window, children, translate, i18n } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const router = useRouter();
  const handleListItemClick = (event: any, index: any) => {
    setSelectedIndex(index);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const router = useRouter();
  const drawer = (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
      component="div"
      dir={i18n.dir()}
    >
      <div style={{ margin: '12px 0px 0px 15px', paddingTop: '10px' }}>
        <Image src={WhiteLogo} />
      </div>
      <List>
        {listitems.map((item, index) => (
          <ListItem
            button
            onClick={(event) => {
              setSelectedIndex(index);
              if (item.key === 'setting') {
                router.push('/seller/create');
              } else {
              }
              // handleListItemClick(event, index)
            }}
            sx={{ paddingTop: item.key === 'setting' ? '200px' : '20px' }}
            key={item.key}
            disablePadding
          >
            <ListItemButton selected={selectedIndex === item.item}>
              <ListItemIcon style={{ minWidth: '40px', color: selectedIndex === item.item ? '#fff' : '#85869B' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                sx={{ display: 'flex', alignItems: 'flex-start' }}
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
    <Box component={'div'} dir={i18n.dir()} sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        dir={i18n.dir()}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: '#fff !important',
        }}
        elevation={0}
      >
        <Navbar translate={translate} handleDrawerToggle={handleDrawerToggle} />
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

import * as React from 'react';
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
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import MenuIcon from '@mui/icons-material/Menu';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { WhiteLogo } from '../../../public/icons';
import Image from 'next/image';

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
            onClick={(event) => handleListItemClick(event, index)}
            sx={{ paddingTop: '20px' }}
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
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
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
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

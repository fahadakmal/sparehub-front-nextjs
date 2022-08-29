import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  alpha,
  Avatar,
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  MenuProps,
  styled,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import i18next from 'i18next';
import LANGUAGES from '../../enums';
import SeachInput from '../SearchInput/SearchInput';
import { useDispatch } from 'react-redux';
import { handleChangeLanguage } from '../../redux/slices/languageSlice';
import { useAuth } from '../../auth/Auth';

import LANG_STRINGS from '../../enums/langStrings';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

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

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}));

export default function NavBar(props: any) {
  const auth: any = useAuth();
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

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
              <Button
                sx={userProfileBox}
                id="navDropdown"
                aria-controls={open ? 'nav-control-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                disableElevation
                onClick={handleClick}
              >
                <Avatar alt="Ted talk" src="https://picsum.photos/200/300" />
                <Grid container alignItems="center" direction="column">
                  <Typography sx={{ fontFamily: 'Mulish', fontWeight: 'bold', fontSize: '14px', color: 'black' }}>
                    Admin
                  </Typography>
                  {/* <Typography sx={{ fontFamily: 'Mulish', fontSize: '12px', color: 'black' }}>Admin</Typography> */}
                </Grid>
              </Button>

              <StyledMenu
                id="nav-control-menu"
                MenuListProps={{
                  'aria-labelledby': 'navDropdown',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} disableRipple>
                  <ManageAccountsOutlinedIcon />
                  {translate(LANG_STRINGS.MY_PROFILE)}
                </MenuItem>
                <MenuItem onClick={handleLogout} disableRipple>
                  <LogoutOutlinedIcon />
                  {translate(LANG_STRINGS.LOGOUT)}
                </MenuItem>
              </StyledMenu>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Toolbar>
  );
}

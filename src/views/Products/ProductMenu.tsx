import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MoreVert } from '@mui/icons-material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Typography } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
export default function ProductMenu(props: any) {
  const { params } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVert sx={{ color: 'black' }} />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem sx={{ gap: 1 }} onClick={handleClose}>
          <VisibilityOutlinedIcon />
          <Typography>View Detail</Typography>
        </MenuItem>
        <MenuItem sx={{ gap: 1 }} onClick={handleClose}>
          <EditOutlinedIcon />
          <Typography>Edit Product</Typography>
        </MenuItem>
        <MenuItem sx={{ gap: 1 }} onClick={handleClose}>
          <PowerSettingsNewIcon />
          <Typography>Change Status to inactive</Typography>
        </MenuItem>
        <MenuItem sx={{ gap: 1 }} onClick={handleClose}>
          <DeleteOutlinedIcon sx={{ color: 'red' }} />
          <Typography color={'red'}>Delete</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}

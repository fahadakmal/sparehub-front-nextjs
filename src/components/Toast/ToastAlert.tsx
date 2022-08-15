import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ToastAlert({ appearence, type, message, handleClose }: any) {
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={appearence}
        onClose={handleClose}
        autoHideDuration={5000}
      >
        <Alert onClose={handleClose} severity={type || 'error'} sx={{ width: '100%' }}>
          {message || 'Failed'}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

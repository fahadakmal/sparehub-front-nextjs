import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Alert, AlertTitle, Collapse, Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';

export default function AlertMessage({ type, title, message, open, handleClose }) {
  return (
    <>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Collapse in={open}>
          <Alert
            action={
              <IconButton aria-label="close" color="inherit" size="medium" onClick={handleClose}>
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            severity={type || 'error'}
          >
            <AlertTitle>{title || 'Title'}</AlertTitle>
            {message || 'Test'}
          </Alert>
        </Collapse>
      </Stack>
    </>
  );
}

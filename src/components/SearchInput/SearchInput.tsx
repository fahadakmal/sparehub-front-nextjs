import React from 'react';
import { Search } from '@mui/icons-material';
import { Button, Grid, InputAdornment, TextField } from '@mui/material';

const styles = {
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

export default function SeachInput({ label, buttonText, onChange, placeholder }: any) {
  const { searchButtonRoot } = styles;

  return (
    <TextField
      label={label}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '8px',
          width: '100%',
          paddingRight: 0,
          fontFamily: 'Mulish',
        },
        '& input::placeholder': {
          fontSize: '12px',
          fontFamily: 'Mulish',
        },
      }}
      placeholder={placeholder}
      size="small"
      variant="outlined"
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <Grid>
              <Button sx={searchButtonRoot}>{buttonText}</Button>
            </Grid>
          </InputAdornment>
        ),
      }}
    />
  );
}

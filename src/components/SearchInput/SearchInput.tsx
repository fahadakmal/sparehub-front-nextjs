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
  textField: {
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
  },
  languageEn: {
    '& .MuiOutlinedInput-root': {},
  },
  languageAr: {
    '& .MuiOutlinedInput-root': {
      paddingLeft: 0,
    },
  },
  inputAdornmentRoot: {
    '&.MuiInputAdornment-root': {
      marginLeft: 0,
    },
  },
};

export default function SeachInput({ label, buttonText, onChange, placeholder, language }: any) {
  const { searchButtonRoot, textField, inputAdornmentRoot, languageEn, languageAr } = styles;

  return (
    <TextField
      fullWidth
      label={label}
      sx={[textField, language === 'en' ? languageEn : languageAr]}
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
          <InputAdornment sx={inputAdornmentRoot} position="end">
            <Grid>
              <Button sx={searchButtonRoot}>{buttonText}</Button>
            </Grid>
          </InputAdornment>
        ),
      }}
    />
  );
}

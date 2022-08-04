import React, { FunctionComponent, useState } from 'react';
import { Grid, FormControl, InputAdornment, TextField, Button, OutlinedInput } from '@mui/material';
import { Search } from '@mui/icons-material';

const styles = {
  search: {
    margin: '0',
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

const SeachInput: FunctionComponent = () => {
  const { search, searchButtonRoot } = styles;

  return (
    <TextField
      label="Search"
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
      placeholder="e.g products, reports, staff ..."
      size="small"
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <Grid>
              <Button sx={searchButtonRoot}>Search</Button>
            </Grid>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SeachInput;

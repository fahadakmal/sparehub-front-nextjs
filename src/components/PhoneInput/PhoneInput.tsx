import { Divider, InputAdornment, TextField } from '@mui/material';
import React from 'react';

export default function PhoneInput({
  label,
  placeholder,
  fullWidth,
  startAdornment,
  name,
  onChange,
  required = false,
}: any) {
  return (
    <TextField
      label={label}
      required={required}
      sx={{
        borderRadius: 2,
        '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
          display: 'none',
        },
        '& input[type=number]': {
          MozAppearance: 'textfield',
        },
      }}
      onChange={onChange}
      name={name}
      type="number"
      fullWidth={fullWidth}
      placeholder={placeholder}
      InputLabelProps={{ shrink: true }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" sx={{ height: '100%' }}>
            {startAdornment}
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem={true}
              sx={{ minHeight: 'inherit', margin: '0px 5px' }}
            />
          </InputAdornment>
        ),
      }}
    />
  );
}

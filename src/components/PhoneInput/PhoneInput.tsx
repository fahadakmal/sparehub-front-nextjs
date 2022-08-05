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
  value,
}: any) {
  return (
    <TextField
      label={label}
      required={required}
      value={value}
      sx={{
        borderRadius: 1,
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

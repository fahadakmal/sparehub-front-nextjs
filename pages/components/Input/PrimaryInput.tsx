import * as React from 'react';
import { Box, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';

export default function PrimaryInput({
  label,
  placeholder,
  type,
  fullWidth,
  startAdornment,
  endAdornment,
  name,
  onClick,
  onChange,
  required = false,
}: any) {
  return (
    <TextField
      label={label}
      required={required}
      sx={{ borderRadius: 2 }}
      onChange={onChange}
      name={name}
      type={type}
      fullWidth={fullWidth}
      placeholder={placeholder}
      InputLabelProps={{ shrink: true }}
      InputProps={{
        startAdornment: <InputAdornment position="start">{startAdornment}</InputAdornment>,
        endAdornment: (
          <InputAdornment position="end">
            <Box onClick={onClick} sx={{ cursor: 'pointer' }}>
              {endAdornment}
            </Box>
          </InputAdornment>
        ),
      }}
    />
  );
}

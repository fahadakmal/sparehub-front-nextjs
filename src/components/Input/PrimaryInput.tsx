import * as React from 'react';
import { Box, InputAdornment, TextField } from '@mui/material';

const root = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
  },
};

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
  value,
  required = false,
  helperText,
  error,
  sx,
}: any) {
  return (
    <TextField
      error={error}
      label={label}
      required={required}
      sx={[sx, root]}
      onChange={onChange}
      name={name}
      type={type}
      value={value}
      fullWidth={fullWidth}
      placeholder={placeholder}
      InputLabelProps={{ shrink: true }}
      helperText={helperText}
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

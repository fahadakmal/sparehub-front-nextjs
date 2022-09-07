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
  focused,
  onBlur,
  required = false,
  error = false,
  otherProps,
  sx,
  autoFocus,
  maxLength,
  helperText
}: any) {
  return (
    <TextField
      autoFocus={autoFocus}
      focused={focused}
      error={error}
      label={label}
      required={required}
      sx={[sx, root]}
      onChange={onChange}
      name={name}
      type={type}
      value={value}
      fullWidth={fullWidth}
      onBlur={onBlur}
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
    >
  </TextField>
  );
}

import * as React from 'react';
import { Box, InputAdornment, TextField } from '@mui/material';
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
  helperText,
  focused,
  onBlur,
  required = false,
  error = false,
  otherProps,
  sx,
}: any) {
  return (
    <TextField
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

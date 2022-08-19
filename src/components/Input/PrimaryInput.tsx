import * as React from 'react';
import { Box, InputAdornment, TextField } from '@mui/material';

// interface PrimaryInputProp{
//   label:string
//   placeholder:string
//   type:string
//   fullWidth:boolean
//   startAdornment:any
//   endAdornment:any
//   name:string
//   onClick:(e:any)=>void
//   onChange:()=>void
//   value:string
//   required: boolean
//   error: boolean
//   otherProps:any
// }

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
}: any) {
  return (
    <TextField
      focused={focused}
      error={error}
      label={label}
      required={required}
      sx={{ borderRadius: 2 }}
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
    ></TextField>
  );
}

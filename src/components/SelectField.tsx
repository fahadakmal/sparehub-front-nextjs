import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useState } from 'react';

const SelectField = ({ label, checkValidation, placeholder, mydata, helperText, setSelectedValue }: any) => {
  const [value, setValue] = useState<any>(4);
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value);
  };
  return (
    <FormControl sx={{ minWidth: '100%' }}>
      <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={value}
        label={label}
        onChange={handleChange}
      >
        <MenuItem value="4">
          <em>{placeholder}</em>
        </MenuItem>
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};
export default SelectField;

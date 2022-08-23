import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useState } from 'react';

const SelectField = ({ label, value, placeholder, mydata, helperText }:any) => {
  const [age, setAge] = useState<any>(4);
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <FormControl sx={{ minWidth: '100%' }}>
      <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
      <Select
        error={value == 'true' ? value : false}
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={age}
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

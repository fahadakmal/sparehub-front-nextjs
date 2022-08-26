import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useState } from 'react';

const SelectField = ({ label, value, placeholder, data=[], helperText, setSelectedValue }: any) => {
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
       <MenuItem value="0">
          <em>{placeholder}</em>
        </MenuItem> 
        {
          data.map((item)=><MenuItem value={item.id}>
          <em>{item.name}</em>
        </MenuItem>)
        }
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};
export default SelectField;

import React from "react";
import { useState} from 'react';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Image from 'next/image';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

const DropdownSelect=(props: any)=>{
    const [age, setAge] = useState('');
    console.log(age)
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
        props.setValue(event.target.value)
      };
    return(<FormControl sx={{ width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">{props.label}</InputLabel>
          <OutlinedInput placeholder={props.required}
        //   error
            id="outlined-adornment-password"
            startAdornment={
              <InputAdornment position="start">
                <FormControl className='fieldset' sx={{  minWidth: 100 }}>
        <Select variant="standard"
        disableUnderline
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}>
          <MenuItem value="">
          <Image style={{marginTop:"3px"}} src="/icons/flag.svg" width="20px" height="15px" alt='flags' />
          <span> +996</span>
          </MenuItem>
          <MenuItem value="0301">
          <Image style={{marginTop:"4px"}} src="/icons/dropdownIcon.svg" width="20px" height="18px" alt='flags' />
          <span > +303</span>
          </MenuItem>
          <MenuItem value="i"><Image style={{marginTop:"4px"}} src="/icons/sparehub.svg" width="20px" height="18px" alt='flags' />
          <span > +902</span></MenuItem>
        </Select>
      </FormControl>
              </InputAdornment>
            }
            label={props.label}
          />
          </FormControl>
    )
}
export default DropdownSelect
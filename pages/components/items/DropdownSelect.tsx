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
    return(<FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">mobile</InputLabel>
          <OutlinedInput placeholder="Enter mobile"
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
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
          <Image src="/icons/flag.svg" width="25px" height="20px" alt='flags' />
          <span > +996</span>
          </MenuItem>
          <MenuItem value="u">
          <Image src="/icons/dropdownIcon.svg" width="25px" height="20px" alt='flags' />
          <span > +303</span>
          </MenuItem>
          <MenuItem value="i"><Image src="/icons/sparehub.svg" width="25px" height="20px" alt='flags' />
          <span > +902</span></MenuItem>
        </Select>
      </FormControl>
              </InputAdornment>
            }
            label="Password"
          />
          </FormControl>
    )
}
export default DropdownSelect
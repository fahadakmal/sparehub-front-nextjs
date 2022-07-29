import { Grid } from "@mui/material"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React,{useState} from "react";

const SelectField=(props: any)=>{
  const [age, setAge] = useState('');
  console.log(age)
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
    props.setAge(event.target.value)
  };
    return(<FormControl sx={{ m: 1, minWidth: "100%" }}>
      <InputLabel id="demo-simple-select-helper-label">{props.mylabel}</InputLabel>
      {props.value==="error" ?
      <>
      <Select
      error
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={age}
        label={props.mylabel}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <FormHelperText sx={{color:"red"}}>incorrect entry</FormHelperText>
      </>
      :
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={age}
        label={props.mylabel}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
}
    </FormControl>)
}
export default SelectField
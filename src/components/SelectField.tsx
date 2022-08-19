import { Grid } from "@mui/material"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React,{useState} from "react";
import Input from "@mui/material";
const SelectField=(props: any)=>{
  const [age, setAge] = useState<any>(4)
  console.log(age)
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
    props.setAge(event.target.value)
  };
    return(
    <FormControl sx={{ minWidth: "100%" }}>
      <InputLabel id="demo-simple-select-helper-label">{props.label}</InputLabel>
      <Select
      error={props.value == "true"? props.value: false}
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={age}
        label={props.label}
        onChange={handleChange}
        
      >
        <MenuItem value="4">
          <em>{props.placeholder}</em>
        </MenuItem>
        {props.mydata==[]?
        props.mydata?.map((item: any)=>(
          <MenuItem value={item.id}>{item.countryName}</MenuItem>
        ))
        :""
}
      </Select>
      <FormHelperText>{props.helperText}</FormHelperText>
    </FormControl>)
}
export default SelectField

{/* <FormControl >
          <InputLabel shrink htmlFor="age-label-placeholder">
            Age
          </InputLabel>
          <Select
            value={data}
            // onChange={this.handleChange}
            // input={<Input name="age" id="age-label-placeholder" />}
            // placeholder="country"
            // displayEmpty
            name="age"
            // className={classes.selectEmpty}
            onChange={handleChange}
          >
            <MenuItem value={4}>
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>

          </Select>

          <FormHelperText>Label + placeholder</FormHelperText>
        </FormControl> */}
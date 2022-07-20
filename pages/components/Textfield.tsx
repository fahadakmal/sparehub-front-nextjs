import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, {useState } from "react"
const Textfield=(props: any)=>{
  console.log(props.value,"uuu")
    const [myfirstName, setmyFirstName]= useState()
    const [require,setRequire]=useState<boolean>(props.require)
    return(
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >{
        props.value == "error" ?
        <TextField
          error
          id="outlined-required"
          label={props.required}
          placeholder={props.placeholder}
          value={myfirstName}
          onChange={(e: any)=>props.setValue(e.target.value)}
          helperText="incorrect entity"
        />
        :
        <TextField
          required
          id="outlined-required"
          label={props.required}
          placeholder={props.placeholder}
          value={myfirstName}
          onChange={(e: any)=>props.setValue(e.target.value)}
        />
    }
        </Box>
    )
}
export default Textfield
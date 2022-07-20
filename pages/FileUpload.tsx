import { Grid } from "@mui/material";
import React from "react";

const FileUpload=()=>{
    return(<Grid> 
  <form action="/action_page.php">
  <input type="file" id="myFile" name="filename">
  <input type="submit">
</form>
      </Grid>)
}
export default FileUpload
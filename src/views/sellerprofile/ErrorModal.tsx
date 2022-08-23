import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Image from "next/image";
import { Grid, Typography } from "@mui/material";

const ErrorModal=(props: any)=>{
    const [open, setOpen] = React.useState(props.model);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

  const handleClose = () => {
    setOpen(false);
    props.setmodel(false)
  };

  {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open responsive dialog
      </Button> */}
    return(
      <Dialog className="text-center"
      sx={{borderRadius:"50px"}}
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      ><Grid className="text-center" sx={{padding:"30px",width:"400px"}}>
        {/* <DialogTitle id="responsive-dialog-title"> */}
        <Grid style={{textAlign:'center',marginTop:"0px"}}>
        <Image  src={props.image} alt="delete" width={46.67} height={48} /></Grid>
        {/* </DialogTitle> */}
        <DialogContent>
            <Typography variant="subtitle2" style={{fontWeight:"bold"}}>{props.wrong}</Typography>
          <DialogContentText sx={{marginTop:"10px"}}>{props.delete}
          </DialogContentText>
        </DialogContent>
        {props.dialog=="success" ?
        <Grid container >
          <Grid item xs={3}></Grid>
          <Grid item xs={6} spacing={12} onClick={handleClose}>
          <Button style={{borderColor:"black",color:"black",textTransform:"none",width:"180.5px"}} variant="outlined">{props.action}</Button>
          </Grid>
        </Grid>:
        <Grid container spacing={2} >
            
          <Grid item xs={6} onClick={handleClose}>
            <Button style={{borderColor:"black",color:"black",textTransform:"none",width:"137.5px"}} variant="outlined">{props.close}</Button>
          </Grid>
          <Grid item xs={6} onClick={handleClose}>
          <Button style={{backgroundColor:"#F9B507",color:"black",textTransform:"none",width:"137.5px"}} variant="contained">{props.action}</Button>
          </Grid>
        </Grid>}
        </Grid>
      </Dialog>
      )
}
export default ErrorModal
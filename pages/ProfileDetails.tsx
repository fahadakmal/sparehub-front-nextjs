import { Grid } from "@mui/material"
import SellerHeading from "./components/SellerHeading"
import Steper from "./components/Stepper"
import Header from "./Header"
// import  ReactImagePickerEditor,{ ImagePickerConf } from 'react-image-picker-editor';
import 'react-image-picker-editor/dist/index.css'
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic'
import Textfield from "./components/Textfield"
import SelectField from "./components/SelectField"
import NextBtn from "./NextBtn"
import { useRouter } from 'next/router'
import Image from "next/image"
// import ReactFileReader from 'react-file-reader';

const ProfileDetails=()=>{
    const [businessName, setbusinessName]= useState<string>("")
    const [businessAddress, setbusinessAddress]= useState<string>("")
    const [registrationNumber, setRegistrationNumber] =useState<string>("")
    const [imageSrc, setImageSrc] = useState<string | null | undefined>('');
    const [country, setCountry] = useState<string>("");
    const [state, setState] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [file, setFile]=useState<string>("")
    console.log(country,"aa")
    const [count, setCount]= useState(1)
    const config2: any = {
        borderRadius: '50%',
        language: 'en',
        width: '100px',
        height: '100px',
        objectFit: 'contain',
        compressInitial: null,
      };
    //   const initialImage: string = '/assets/images/8ptAya.webp';
      const initialImage = '';

      const ReactImagePickerEditor = dynamic(() => import("react-image-picker-editor"), {
        ssr: false,
      })
      const ReactFileReader = dynamic(() => import("react-file-reader"), {
        ssr: false,
      })
      const router = useRouter()
      const Validate=(e: any)=>{
        if(registrationNumber === "" && businessAddress === "" && businessName === "" && country === "" && state === "" && city === ""){
          setbusinessName("error")
          setRegistrationNumber("error")
          setbusinessAddress("error")
          setCountry("error")
          setState("error")
          setCity("error")
        }
        else if (businessName !== "error" && registrationNumber !== "error" && businessAddress !== "error" && country !== "error" && state !== "error" && city !== "error" && country !=="" && registrationNumber !== "" && businessAddress !== "" && businessName !== "" && state !=="" && city !==""
        ){
          e.preventDefault()
          router.push("/SellerProfile")
        }
        // if (businessName && registrationNumber && businessAddress && currency && imageSrc !==""){
        // e.preventDefault()
        // router.push("/SellerProfile")}
        // else{
        //   console.log("no")
        // }
      }

      const backNavigate=()=>{
        router.push("/SellerProfile")
      }

     const handleFiles = (files : any) => {
        console.log(files)
        // setFile(files)
      }
      
    return(<Grid sx={{padding:"20px"}}>
        <Header/>
        <Grid className='shadow'>
            <SellerHeading/>
            <Grid style={{marginTop:"20px",marginBottom:"7px",marginLeft:"20px",marginRight:"20px"}}>
                <Grid sx={{marginTop:"30px"}}>
            <Steper count={count}/>
            </Grid>
            <Grid container sx={{marginTop:"30px"}}>
            <Grid item xs={1} style={{borderRadius:"50%"}} >
            <ReactImagePickerEditor 
            config={config2}
            imageSrcProp={initialImage}
            imageChanged={(newDataUri: any) => { setImageSrc(newDataUri) }} />
            </Grid>
            <Grid item xs={2} sx={{marginTop:"30px"}}>
                <Grid className="underline">
                Upload Logo
                </Grid>
                <Grid sx={{fontSize:"12px", color:"grey"}}>
                File Format:<strong style={{ color:"black"}}> PNG,JPEG</strong>
                </Grid>
            </Grid>
            </Grid>
            <Grid container sx={{ marginTop:"11px"}}>
            <Grid item xs={9}>
            <Grid container>
            <Grid item xs={6} sx={{paddingRight:"15px"}}>
            <Textfield setValue ={setbusinessName} required="business legal Name" placeholder="Enter your business name" value={businessName}/>
            </Grid>
            <Grid item xs={6} sx={{paddingLeft:"15px"}}>
            <Textfield setValue ={setbusinessAddress} required="business address" placeholder="Enter your business address" value={businessAddress}/>
            </Grid>
            </Grid>
            <Grid container sx={{ marginTop:"11px"}}>
            <Grid item xs={6} sx={{paddingRight:"15px"}}>
            <Textfield setValue ={setRegistrationNumber} required="business Registration number" placeholder="8 digits number" value={registrationNumber}/>
            </Grid>
            <Grid item xs={6} sx={{paddingLeft:"15px"}}>
            <SelectField setAge={setCountry} value={country} mylabel="Select Country *" />
            </Grid>
            </Grid>
            <Grid container sx={{ marginTop:"11px"}}>
            <Grid item xs={6} sx={{paddingRight:"15px"}}>
            <SelectField mylabel="Select State *" setAge={setState} value={state} />
            </Grid>
            <Grid item xs={6} sx={{paddingLeft:"15px"}}>
            <SelectField mylabel="Select City *" setAge={setCity} value={city}/>
            
            </Grid>
            </Grid>
            <Grid  sx={{ marginTop:"11px"}}>
            <ReactFileReader handleFiles={handleFiles} multipleFiles={true} fileTypes={[".csv",".zip",".pdf",".jpeg"]}>
  <button className='btn'>Upload</button>
</ReactFileReader>
            {/* <SelectField  mylabel="Select City" /> */}
            </Grid>
            </Grid>
            <Grid item xs={2.6} sx={{backgroundColor:"#FBFBFA", borderRadius:"5px", marginLeft:"32px"}}>
              <Grid sx={{padding:"10px"}}>
              <Grid >Uploaded Files</Grid>
              <Grid>
              <hr></hr></Grid>
              <Grid container>
              <Grid item xs={2}>
              <Image src="/icons/jpeg.png" width="25px" height="20px" alt='flags'/>
              </Grid>
              <Grid item xs={9} >jpg</Grid>
              <Grid item xs={1}>
              <Image src="/icons/cut.png" width="20px" height="20px" alt='flags' />
              </Grid>
              </Grid>
              </Grid>
            </Grid>
            
            </Grid>
            <Grid>
            <NextBtn Validate={Validate} backNavigate={backNavigate}/>
            </Grid>
            </Grid>
            </Grid>
            
    </Grid>)
}
export default ProfileDetails
import React ,{ useState} from 'react';
import Header from './Header'
import Grid from '@mui/material/Grid';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Steper from '../../src/components/Stepper';
import SellerHeading from '../../src/components/SellerHeading';
import { useRouter } from 'next/router'
import Textfield from '../../src/components/Textfield';
import NextBtn from './NextBtn';
import DropdownSelect from '../../src/components/items/DropdownSelect';

const BankDetail = (props : any) => {
  const [count, setCount]= useState(0)
  const [age, setAge] = useState('');
  const [firstName, setFirstName]= useState<string>("")
  
  const [lastName, setLastName]= useState<string>("")
  const [email, setEmail]= useState<string>("")
  const [shopName, setShopName]= useState<string>("")
  const [mobilNumber, setMobileNumber]= useState<string>("")
  console.log(mobilNumber,"aaa")
  const router = useRouter()
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  const Validate=(e: any)=>{
    if(firstName === "" && lastName === "" && email === "" && shopName === "" && mobilNumber === ""){
      setFirstName("error")
      setLastName("error")
      setEmail("error")
      setShopName("error")
      setMobileNumber("error")
    }
    else if(firstName !== "" && firstName !== "error" && lastName === "" && email === "" && shopName === "" && mobilNumber === ""){
      setLastName("error")
      setEmail("error")
      setShopName("error")
      setMobileNumber("error")
    }
    else if(firstName === "" && lastName !== "error" && lastName !== "" && email === "" && shopName === "" && mobilNumber === ""){
      setFirstName("error")
      setEmail("error")
      setShopName("error")
      setMobileNumber("error")
    }
    else if(firstName === "" && email !== "error" && lastName === "" && email !== "" && shopName === "" && mobilNumber === ""){
      setLastName("error")
      setFirstName("error")
      setShopName("error")
      setMobileNumber("error")
    }
    else if(firstName === "" && mobilNumber !== "error" && lastName === "" && email === "" && shopName === "" && mobilNumber !== ""){
      setLastName("error")
      setEmail("error")
      setShopName("error")
      setFirstName("error")
    }
    else if(firstName === "" && shopName !== "error" && lastName === "" && email === "" && shopName !== "" && mobilNumber === ""){
      setLastName("error")
      setEmail("error")
      setFirstName("error")
      setMobileNumber("error")
    }
    else if(firstName !== "" && firstName !== "error" && lastName !== "" && lastName !== "error" && email === "" && shopName === "" && mobilNumber === ""){
      setEmail("error")
      setShopName("error")
      setMobileNumber("error")
    }
    else if(firstName !== "" && firstName !== "error" && email !== "" && email !== "error" && lastName === "" && shopName === "" && mobilNumber === ""){
      setLastName("error")
      setShopName("error")
      setMobileNumber("error")
    }
    else if(firstName !== "" && firstName !== "error" && mobilNumber !== "" && mobilNumber !== "error" && email === "" && shopName === "" && lastName === ""){
      setEmail("error")
      setShopName("error")
      setLastName("error")
    }
    else if(firstName !== "" && firstName !== "error" && shopName !== "" && shopName !== "error" && email === "" && lastName === "" && mobilNumber === ""){
      setEmail("error")
      setLastName("error")
      setMobileNumber("error")
    }
    else if(firstName === "" && lastName !== "error" && shopName === "" && email !== "" && email !== "error" && lastName !== "" && mobilNumber === ""){
      setFirstName("error")
      setShopName("error")
      setMobileNumber("error")
    }
    else if(firstName === "" && lastName !== "error" && shopName === "" && email === "" && mobilNumber !== "error" && lastName !== "" && mobilNumber !== ""){
      setFirstName("error")
      setShopName("error")
      setEmail("error")
    }
    else if(firstName === "" && lastName !== "error" && shopName !== "" && shopName !== "error" && email === "" && lastName !== "" && mobilNumber === ""){
      setFirstName("error")
      setShopName("error")
      setMobileNumber("error")
    }
    else if(firstName === "" && lastName === "" && shopName === "" && email !== "" && email !== "error" && mobilNumber !== "" && mobilNumber !== "error"){
      setFirstName("error")
      setShopName("error")
      setLastName("error")
    }
    else if(firstName === "" && lastName === "" && shopName !== "" && email !== "" && email !== "error" &&  mobilNumber === "" && shopName !== "error"){
      setFirstName("error")
      setMobileNumber("error")
      setLastName("error")
    }
    else if(firstName === "" && lastName === "" && shopName !== "" && email === "" && mobilNumber !== "" && mobilNumber !== "error" && shopName !== "error"){
      setFirstName("error")
      setMobileNumber("error")
      setLastName("error")
    }
    else if(firstName !== "" && firstName !== "error" && lastName !== "error" && shopName === "" && email !== "" && email !== "error" && lastName !== "" && mobilNumber === ""){
      setShopName("error")
      setMobileNumber("error")
    }
    else if(firstName !== "" && firstName !== "error" && lastName !== "error" && shopName === "" && mobilNumber !== "" && mobilNumber !== "error" && lastName !== "" && email === "" ){
      setShopName("error")
      setEmail("error")
    }
    else if(firstName !== "" && firstName !== "error" && lastName !== "error" && shopName !== "" && mobilNumber === "" && shopName !== "error" && lastName !== "" && email === "" ){
      setMobileNumber("error")
      setEmail("error")
    }
    else if(firstName !== "" && firstName !== "error" && lastName !== "error" && shopName === "" && mobilNumber !== "" && mobilNumber !== "error" && email !== "error" && lastName !== "" && email === "" ){
      setShopName("error")
      setEmail("error")
    }
    else if(firstName !== "" && firstName !== "error" && lastName !== "error" && mobilNumber === "" && shopName !== "" && shopName !== "error" && email !== "error" && lastName !== "" && email === "" ){
      setShopName("error")
      setEmail("error")
    }
    else if (firstName !== "error" && lastName !== "error" && email !== "error" && shopName !== "error" && mobilNumber !== "error" && firstName !== "" && lastName !== "" && email !== "" && shopName !== "" && mobilNumber !== ""){
      e.preventDefault()
      router.push("/ProfileDetails")
    }
  }
  const mydisplay={display: "none"}
  const margins={marginLeft:"120px"}
    return (<div style={{padding:"20px"}}>
        <Header/> 
        <div className=''>
        <div className="shadow">
            <SellerHeading/>
            <div style={{marginTop:"20px",marginBottom:"7px",padding:"20px"}}>
            <Steper count={count}/>
            <Grid container lg={10} sx={{ marginTop:"15px"}}>
            <Grid item lg={5}  sx={{paddingRight:"15px", marginTop:"10px"}}>
            <Textfield setValue ={setFirstName} required="First Name" placeholder="Enter first name" value={firstName}/>
            </Grid>
            <Grid item lg={5} sx={{paddingLeft:"15px", marginTop:"11px"}}>
            <Textfield setValue ={setLastName} required="Last Name" placeholder="Enter last name" value={lastName}/>
            </Grid>
            </Grid>

            <Grid container lg={10} sx={{ marginTop:"15px"}}>
            <Grid item lg={5}  sx={{paddingRight:"15px"}} >
            <Textfield setValue ={setEmail} required="Email Address" placeholder="Enter email address" value={email}/>
            </Grid>
            <Grid item lg={5} sx={{paddingLeft:"15px"}}>
              <DropdownSelect setValue ={setMobileNumber} value={mobilNumber}/>
            </Grid>
            </Grid>
            {/* </Grid> */}

            <Grid container lg={10} sx={{ marginTop:"15px"}}>
            <Grid item lg={5}  sx={{paddingRight:"15px"}}>
            <Textfield setValue ={setShopName} value={shopName} required="Shop Name" placeholder="Enter shop name"/>
            </Grid>
            </Grid>
            <Grid>
            <NextBtn Validate={Validate} visibility={mydisplay} margins={margins}/>
            </Grid>
            </div>
        </div>
      </div>
      </div>
    )
  }
  
  export default BankDetail
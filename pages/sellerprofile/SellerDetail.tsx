import { Grid } from "@mui/material"
import SellerHeading from "../../src/components/SellerHeading"
import Steper from "../../src/components/Stepper"
// import Header from "./Header"
// import  ReactImagePickerEditor,{ ImagePickerConf } from 'react-image-picker-editor';
import 'react-image-picker-editor/dist/index.css'
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic'
import Textfield from "../../src/components/Textfield"
import SelectField from "../../src/components/SelectField"
import NextBtn from "./NextBtn"
import { useRouter } from 'next/router'
import Image from "next/image"
import DropdownSelect from "../../src/components/items/DropdownSelect"
// import ReactFileReader from 'react-file-reader';
// import SellerDraftsAction from "../redux/action/SellerDraftsAction"
import { useSelector, useDispatch } from "react-redux"
import uploadfiles from "../uploadfiles"
import { getcountryFetch } from "../../src/redux/slices/sellerCountrySlice"
import Header from "../../src/layout/Header";
const SellerDetail=()=>{
    const [businessName, setbusinessName]= useState<string>("")
    const [businessAddress, setbusinessAddress]= useState<string>("")
    const [registrationNumber, setRegistrationNumber] =useState<string>("")
    const [businessUrl, setbusinessUrl]= useState<string>("")
    const [shopName, setShopName]= useState<string>("")
    const [imageSrc, setImageSrc] = useState<string | null | undefined>('');
    const [country, setCountry] = useState<string>("");
    const [state, setState] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [file, setFile]=useState<string>("")
    const [email, setEmail]= useState<string>("")
    const [mobilNumber, setMobileNumber]= useState<string>("")
    const [myboolean, setmyBoolean]=useState<Boolean>(false)

    const dispatch=useDispatch()
    // const {state}=useSelector((state)=>state)
    console.log(country,"aa")
    const [count, setCount]= useState(0)
    const config2: any = {
        borderRadius: '50%',
        language: 'en',
        width: '100px',
        height: '100px',
        objectFit: 'contain',
        compressInitial: null,
      };
      const data1={}
    //   const initialImage: string = '/assets/images/8ptAya.webp';
      const initialImage = '';

      const ReactImagePickerEditor = dynamic(() => import("react-image-picker-editor"), {
        ssr: false,
      })
      const ReactFileReader: any = dynamic(() => import("react-file-reader"),{
        ssr: false,
      })

      // api work
      // const sellerCountry=useSelector((state: any)=>state.sellerCountry.sellercountry)
      // console.log(sellerCountry, 'sellercountry')      
      // useEffect(()=>{
      //   dispatch(getcountryFetch("h"))
      // },[])

      const router = useRouter()
      const Validate=(e: any)=>{
        if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress === ""){
          setbusinessName("true")
          setRegistrationNumber("true")
          setbusinessUrl("true")
          setShopName("true")
          setEmail("true")
          setMobileNumber("true")
          setCountry("true")
          setState("true")
          setCity("true")
          setbusinessAddress("true")
        }
       else if(businessName !== "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress === ""){
        // setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber !== "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        // setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
     else if(businessName === "" && registrationNumber === "" && businessUrl !== "" && shopName === "" && email === "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        // setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName !== "" && email === "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        // setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
     else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email !== "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        // setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
     else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber !== "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        // setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber === "" && country !== "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        // setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber === "" && country === "" && state !== "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        // setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
     else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber === "" && country === "" && state === "" && city !== "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        // setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress !== ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        // setbusinessAddress("true")
      }
     else if(businessName !== "" && registrationNumber !== "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress === ""){
        // setbusinessName("true")
        // setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber === "" && businessUrl !== "" && shopName === "" && email === "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setRegistrationNumber("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber === "" && businessUrl === "" && shopName !== "" && email === "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email !== "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber !== "" && country === "" && state === "" && city === "" && businessAddress === ""){
        // setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber === "" && country !== "" && state === "" && city === "" && businessAddress === ""){
        // setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        // setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
     else if(businessName !== "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber === "" && country === "" && state !== "" && city === "" && businessAddress === ""){
        // setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        // setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber === "" && country === "" && state === "" && city !== "" && businessAddress === ""){
        // setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        // setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress !== ""){
        // setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        // setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber !== "" && businessUrl !== "" && shopName === "" && email === "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        // setRegistrationNumber("true")
        // setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber !== "" && businessUrl === "" && shopName !== "" && email === "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        // setRegistrationNumber("true")
        setbusinessUrl("true")
        // setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber !== "" && businessUrl === "" && shopName === "" && email !== "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        // setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        // setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber !== "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber !== "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        // setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        // setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber !== "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber === "" && country !== "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        // setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        // setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
     else if(businessName === "" && registrationNumber !== "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber === "" && country === "" && state !== "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        // setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        // setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber !== "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber === "" && country === "" && state === "" && city !== "" && businessAddress === ""){
        setbusinessName("true")
        // setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        // setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber !== "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress !== ""){
        setbusinessName("true")
        // setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        // setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl !== "" && shopName !== "" && email === "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        // setbusinessUrl("true")
        // setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl !== "" && shopName === "" && email !== "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        // setbusinessUrl("true")
        setShopName("true")
        // setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl !== "" && shopName === "" && email === "" && mobilNumber !== "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        // setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        // setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl !== "" && shopName === "" && email === "" && mobilNumber === "" && country !== "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        // setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        // setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl !== "" && shopName === "" && email === "" && mobilNumber === "" && country === "" && state !== "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        // setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        // setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
     else if(businessName === "" && registrationNumber === "" && businessUrl !== "" && shopName === "" && email === "" && mobilNumber === "" && country === "" && state === "" && city !== "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        // setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        // setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl !== "" && shopName === "" && email === "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress !== ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        // setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        // setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName !== "" && email !== "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        // setShopName("true")
        // setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName !== "" && email === "" && mobilNumber !== "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        // setShopName("true")
        setEmail("true")
        // setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName !== "" && email === "" && mobilNumber === "" && country !== "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        // setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        // setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName !== "" && email === "" && mobilNumber === "" && country === "" && state !== "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        // setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        // setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName !== "" && email === "" && mobilNumber === "" && country === "" && state === "" && city !== "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        // setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        // setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName !== "" && email === "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress !== ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        // setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        // setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email !== "" && mobilNumber !== "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        // setEmail("true")
        // setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email !== "" && mobilNumber === "" && country !== "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        // setEmail("true")
        setMobileNumber("true")
        // setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email !== "" && mobilNumber === "" && country === "" && state !== "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        // setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        // setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email !== "" && mobilNumber === "" && country === "" && state === "" && city !== "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        // setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        // setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email !== "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress !== ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        // setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        // setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber !== "" && country !== "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        // setMobileNumber("true")
        // setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber !== "" && country === "" && state !== "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        // setMobileNumber("true")
        setCountry("true")
        // setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber !== "" && country === "" && state === "" && city !== "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        // setMobileNumber("true")
        setCountry("true")
        setState("true")
        // setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber !== "" && country === "" && state === "" && city === "" && businessAddress !== ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        // setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        // setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber === "" && country !== "" && state !== "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        // setCountry("true")
        // setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber === "" && country !== "" && state === "" && city !== "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        // setCountry("true")
        setState("true")
        // setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber === "" && country !== "" && state === "" && city === "" && businessAddress !== ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        // setCountry("true")
        setState("true")
        setCity("true")
        // setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber === "" && country === "" && state !== "" && city !== "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        // setState("true")
        // setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber === "" && country === "" && state !== "" && city === "" && businessAddress !== ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        // setState("true")
        setCity("true")
        // setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber === "" && country === "" && state === "" && city !== "" && businessAddress !== ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        // setCity("true")
        // setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber !== "" && businessUrl !== "" && shopName === "" && email === "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber != "" && businessUrl === "" && shopName !== "" && email === "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setbusinessUrl("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber !== "" && businessUrl === "" && shopName === "" && email !== "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setbusinessUrl("true")
        setShopName("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber !== "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber !== "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        // setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber !== "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber === "" && country !== "" && state === "" && city === "" && businessAddress === ""){
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        // setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber !== "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber === "" && country === "" && state !== "" && city === "" && businessAddress === ""){
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        // setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber !== "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber === "" && country === "" && state === "" && city !== "" && businessAddress === ""){
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        // setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber !== "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress !== ""){
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        // setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email === "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber !== "" && businessUrl !== "" && shopName === "" && email !== "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setShopName("true")
        // setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber !== "" && businessUrl !== "" && shopName === "" && email === "" && mobilNumber !== "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setShopName("true")
        setEmail("true")
        // setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber !== "" && businessUrl !== "" && shopName === "" && email === "" && mobilNumber === "" && country !== "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        // setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber !== "" && businessUrl !== "" && shopName === "" && email === "" && mobilNumber === "" && country === "" && state !== "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        // setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber !== "" && businessUrl !== "" && shopName === "" && email === "" && mobilNumber === "" && country === "" && state === "" && city !== "" && businessAddress === ""){
        setbusinessName("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        // setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber !== "" && businessUrl !== "" && shopName === "" && email === "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress !== ""){
        setbusinessName("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        // setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        // setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl !== "" && shopName !== "" && email === "" && mobilNumber !== "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setEmail("true")
        // setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl !== "" && shopName !== "" && email === "" && mobilNumber === "" && country !== "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setEmail("true")
        setMobileNumber("true")
        // setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl !== "" && shopName !== "" && email === "" && mobilNumber === "" && country === "" && state !== "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        // setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl !== "" && shopName !== "" && email === "" && mobilNumber === "" && country === "" && state === "" && city !== "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        // setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl !== "" && shopName !== "" && email === "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress !== ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        // setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName !== "" && email !== "" && mobilNumber !== "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        // setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName !== "" && email !== "" && mobilNumber === "" && country !== "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setMobileNumber("true")
        // setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName !== "" && email !== "" && mobilNumber === "" && country === "" && state !== "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setMobileNumber("true")
        setCountry("true")
        // setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName !== "" && email !== "" && mobilNumber === "" && country === "" && state === "" && city !== "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        // setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName !== "" && email !== "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress !== ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        // setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email !== "" && mobilNumber !== "" && country !== "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        // setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email !== "" && mobilNumber !== "" && country === "" && state !== "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setCountry("true")
        // setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email !== "" && mobilNumber !== "" && country === "" && state === "" && city !== "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setCountry("true")
        setState("true")
        // setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email !== "" && mobilNumber !== "" && country === "" && state === "" && city === "" && businessAddress !== ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setCountry("true")
        setState("true")
        setCity("true")
        // setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber !== "" && country !== "" && state !== "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        // setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber !== "" && country !== "" && state === "" && city !== "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setState("true")
        // setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber !== "" && country !== "" && state === "" && city === "" && businessAddress !== ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setState("true")
        setCity("true")
        // setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber === "" && country !== "" && state !== "" && city !== "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        // setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber === "" && country !== "" && state !== "" && city === "" && businessAddress !== ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCity("true")
        // setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber === "" && country === "" && state !== "" && city !== "" && businessAddress !== ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
      }
      else if(businessName !== "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email === "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber !== "" && businessUrl !== "" && shopName === "" && email !== "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setShopName("true")
        // setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber !== "" && businessUrl !== "" && shopName === "" && email === "" && mobilNumber !== "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setShopName("true")
        setEmail("true")
        // setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber !== "" && businessUrl !== "" && shopName === "" && email === "" && mobilNumber === "" && country !== "" && state === "" && city === "" && businessAddress === ""){
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        // setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber !== "" && businessUrl !== "" && shopName === "" && email === "" && mobilNumber === "" && country === "" && state !== "" && city === "" && businessAddress === ""){
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        // setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber !== "" && businessUrl !== "" && shopName === "" && email === "" && mobilNumber === "" && country === "" && state === "" && city !== "" && businessAddress === ""){
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        // setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber !== "" && businessUrl !== "" && shopName === "" && email === "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress !== ""){
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        // setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        // setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email === "" && mobilNumber !== "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setEmail("true")
        // setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email === "" && mobilNumber === "" && country !== "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setEmail("true")
        setMobileNumber("true")
        // setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email === "" && mobilNumber === "" && country === "" && state !== "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        // setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email === "" && mobilNumber === "" && country === "" && state === "" && city !== "" && businessAddress === ""){
        setbusinessName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        // setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email === "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress !== ""){
        setbusinessName("true")
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        // setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber !== "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        // setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber === "" && country !== "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setMobileNumber("true")
        // setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber === "" && country === "" && state !== "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setMobileNumber("true")
        setCountry("true")
        // setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber === "" && country === "" && state === "" && city !== "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        // setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress !== ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        // setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName !== "" && email !== "" && mobilNumber !== "" && country !== "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        // setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName !== "" && email !== "" && mobilNumber !== "" && country === "" && state !== "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setCountry("true")
        // setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName !== "" && email !== "" && mobilNumber !== "" && country === "" && state === "" && city !== "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setCountry("true")
        setState("true")
        // setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName !== "" && email !== "" && mobilNumber !== "" && country === "" && state === "" && city === "" && businessAddress !== ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setCountry("true")
        setState("true")
        setCity("true")
        // setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email !== "" && mobilNumber !== "" && country !== "" && state !== "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        // setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email !== "" && mobilNumber !== "" && country !== "" && state === "" && city !== "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setState("true")
        // setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email !== "" && mobilNumber !== "" && country !== "" && state === "" && city === "" && businessAddress !== ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setState("true")
        setCity("true")
        // setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber !== "" && country !== "" && state !== "" && city !== "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        // setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber !== "" && country !== "" && state !== "" && city === "" && businessAddress !== ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setCity("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber === "" && country !== "" && state !== "" && city !== "" && businessAddress !== ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
        setMobileNumber("true")
      }
      else if(businessName !== "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email === "" && mobilNumber !== "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setEmail("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email === "" && mobilNumber === "" && country !== "" && state === "" && city === "" && businessAddress === ""){
        setEmail("true")
        setMobileNumber("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email === "" && mobilNumber === "" && country === "" && state !== "" && city === "" && businessAddress === ""){
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        // setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email === "" && mobilNumber === "" && country === "" && state === "" && city !== "" && businessAddress === ""){
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        // setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email === "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress !== ""){
        setEmail("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        // setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber !== "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber === "" && country !== "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setMobileNumber("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber === "" && country === "" && state !== "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setMobileNumber("true")
        setCountry("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber === "" && country === "" && state === "" && city !== "" && businessAddress === ""){
        setbusinessName("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress !== ""){
        setbusinessName("true")
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        // setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber !== "" && country !== "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        // setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber !== "" && country === "" && state !== "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setCountry("true")
        // setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber !== "" && country === "" && state === "" && city !== "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setCountry("true")
        setState("true")
        // setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber !== "" && country === "" && state === "" && city === "" && businessAddress !== ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        // setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName !== "" && email !== "" && mobilNumber !== "" && country !== "" && state !== "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName !== "" && email !== "" && mobilNumber !== "" && country !== "" && state === "" && city !== "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setState("true")
        // setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName !== "" && email !== "" && mobilNumber !== "" && country !== "" && state === "" && city === "" && businessAddress !== ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setState("true")
        setCity("true")
        // setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email !== "" && mobilNumber !== "" && country !== "" && state !== "" && city !== "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email !== "" && mobilNumber !== "" && country !== "" && state !== "" && city === "" && businessAddress !== ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setCity("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email === "" && mobilNumber !== "" && country !== "" && state !== "" && city !== "" && businessAddress !== ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
        setEmail("true")
      }
      else if(businessName !== "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber !== "" && country === "" && state === "" && city === "" && businessAddress === ""){
        setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber === "" && country !== "" && state === "" && city === "" && businessAddress === ""){
        setMobileNumber("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber === "" && country === "" && state !== "" && city === "" && businessAddress === ""){
        setMobileNumber("true")
        setCountry("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber === "" && country === "" && state === "" && city !== "" && businessAddress === ""){
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber === "" && country === "" && state === "" && city === "" && businessAddress !== ""){
        setMobileNumber("true")
        setCountry("true")
        setState("true")
        setCity("true")
        // setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber !== "" && country !== "" && state === "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        // setCountry("true")
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber !== "" && country === "" && state !== "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setCountry("true")
        // setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber !== "" && country === "" && state === "" && city !== "" && businessAddress === ""){
        setbusinessName("true")
        setCountry("true")
        setState("true")
        // setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber !== "" && country === "" && state === "" && city === "" && businessAddress !== ""){
        setbusinessName("true")
        setCountry("true")
        setState("true")
        setCity("true")
        // setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber !== "" && country !== "" && state !== "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        // setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber !== "" && country !== "" && state === "" && city !== "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setState("true")
        // setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber !== "" && country !== "" && state === "" && city === "" && businessAddress !== ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setState("true")
        setCity("true")
        // setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName !== "" && email !== "" && mobilNumber !== "" && country !== "" && state !== "" && city !== "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        // setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName !== "" && email !== "" && mobilNumber !== "" && country !== "" && state !== "" && city === "" && businessAddress !== ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setCity("true")
        // setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName === "" && email !== "" && mobilNumber !== "" && country !== "" && state !== "" && city !== "" && businessAddress !== ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
        setShopName("true")
      }
      else if(businessName !== "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber !== "" && country !== "" && state === "" && city === "" && businessAddress === ""){
        setState("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber !== "" && country === "" && state !== "" && city === "" && businessAddress === ""){
        setCountry("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber !== "" && country === "" && state === "" && city !== "" && businessAddress === ""){
        setCountry("true")
        setState("true")
        setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber !== "" && country === "" && state === "" && city === "" && businessAddress !== ""){
        setCountry("true")
        setState("true")
        setCity("true")
      }
      else if(businessName === "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber !== "" && country !== "" && state !== "" && city === "" && businessAddress === ""){
        setbusinessName("true")
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber !== "" && country !== "" && state === "" && city !== "" && businessAddress === ""){
        setbusinessName("true")
        setState("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber !== "" && country !== "" && state === "" && city === "" && businessAddress !== ""){
        setbusinessName("true")
        setState("true")
        setCity("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber !== "" && country !== "" && state !== "" && city !== "" && businessAddress === ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        // setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber !== "" && country !== "" && state !== "" && city === "" && businessAddress !== ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setCity("true")
        // setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl === "" && shopName !== "" && email !== "" && mobilNumber !== "" && country !== "" && state !== "" && city !== "" && businessAddress !== ""){
        setbusinessName("true")
        setRegistrationNumber("true")
        setbusinessUrl("true")
      }
      else if(businessName !== "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber !== "" && country !== "" && state !== "" && city === "" && businessAddress === ""){
        setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber !== "" && country !== "" && state === "" && city !== "" && businessAddress === ""){
        setState("true")
        // setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber !== "" && country !== "" && state === "" && city === "" && businessAddress !== ""){
        setState("true")
        setCity("true")
        // setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber !== "" && country !== "" && state !== "" && city !== "" && businessAddress === ""){
        setbusinessName("true")
        // setCity("true")
        setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber !== "" && country !== "" && state !== "" && city === "" && businessAddress !== ""){
        setbusinessName("true")
        setCity("true")
        // setbusinessAddress("true")
      }
      else if(businessName === "" && registrationNumber === "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber !== "" && country !== "" && state !== "" && city !== "" && businessAddress !== ""){
        setRegistrationNumber("true")
        setbusinessName("true")
      }
      else if(businessName !== "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber !== "" && country !== "" && state !== "" && city !== "" && businessAddress === ""){
        setbusinessAddress("true")
      }
      else if(businessName !== "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber !== "" && country !== "" && state !== "" && city === "" && businessAddress !== ""){
        setCity("true")
      }
      else if(businessName !== "" && registrationNumber !== "" && businessUrl !== "" && shopName !== "" && email !== "" && mobilNumber !== "" && country !== "" && state !== "" && city !== ""
       && businessAddress !== "" && businessName !== "true" && registrationNumber !== "true" && businessUrl !== "true" && shopName !== "true" && email !== "true" && mobilNumber !== "true" && country !== "true" && state !== "true" && city !== "true"
       && businessAddress !== "true"){
        e.preventDefault()
        router.push("../uploadfiles")
      }
      else{
      }
      //     setbusinessName("error")
      //     setRegistrationNumber("error")
      //     setbusinessAddress("error")
      //     setCountry("error")
      //     setState("error")
      //     setCity("error")
      //   }
      //   else if (businessName !== "error" && registrationNumber !== "error" && businessAddress !== "error" && country !== "error" && state !== "error" && city !== "error" && country !=="" && registrationNumber !== "" && businessAddress !== "" && businessName !== "" && state !=="" && city !==""
      //   ){
      //     e.preventDefault()
      //     router.push("/SellerProfile")
      //   }
      //   if (businessName && registrationNumber && businessAddress && currency && imageSrc !==""){
      //   e.preventDefault()
      //   router.push("/SellerProfile")}
      //   else{
      //     console.log("no")
      //   }
      }
    

      // const backNavigate=()=>{
      //   router.push("/SellerProfile")
      // }

     const handleFiles = (files : any) => {
        
        const a=files[0]
        console.log(a.name)
        // setFile(files)
      }

      const params=``
      const handleSubmit=()=>{
        // dispatch(SellerDraftsAction("hi"))
      }
      
    return(<Grid className="webgColor" sx={{padding:"20px"}}>
        <Header/>
        <Grid className='shadow'>
            <SellerHeading mydata={()=>handleSubmit()} />
            <Grid style={{marginTop:"20px",marginBottom:"7px",marginLeft:"20px",marginRight:"30px"}}>
                <Grid sx={{marginTop:"30px"}}>
            <Steper count={count}/>
            </Grid>
            {/* <Grid container sx={{marginTop:"30px"}}>
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
            </Grid> */}
            <Grid container sx={{ marginTop:"11px"}}>
            {/* <Grid item xs={9}> */}
            <Grid container>
            <Grid item xs={6} sx={{paddingRight:"15px"}}>
            <Textfield setValue ={setbusinessName} required="Enter your business name" placeholder="Enter your business name" value={businessName} myboolean={myboolean}/>
            </Grid>
            <Grid item xs={6} sx={{paddingLeft:"15px"}}>
            <Textfield setValue ={setbusinessName} required="business legal name(Arabic)" placeholder="Enter your business name" value={businessName}/>
            </Grid>
            </Grid>
            <Grid container sx={{ marginTop:"11px"}}>
            <Grid item xs={6} sx={{paddingRight:"15px"}}>
            <Textfield setValue ={setRegistrationNumber} required="business Registration number" placeholder="8 digits number" value={registrationNumber} maxLength="8" />
            </Grid>
            <Grid item xs={6} sx={{paddingLeft:"15px"}}>
            {/* <SelectField setAge={setCountry} value={country} mylabel="Select Country *" /> */}
            <Textfield setValue ={setbusinessUrl} required="Business Website Url" placeholder="https://" value={businessUrl}/>
            </Grid>
            </Grid>
            <Grid container sx={{ marginTop:"11px"}}>
            <Grid item xs={6} sx={{paddingRight:"15px"}}>
            <Textfield setValue ={setShopName} required="Enter shop name" placeholder="Shop name" value={shopName}/>
            </Grid>
            <Grid item xs={6} sx={{paddingLeft:"15px"}}>
            <Textfield setValue ={setShopName} required="Enter shop name(Arabic)" placeholder="Shop name" value={shopName}/>
            </Grid>
            </Grid>
            <Grid container sx={{ marginTop:"11px"}}>
            <Grid item xs={6} sx={{paddingRight:"15px"}}>
            <Textfield setValue ={setEmail} required="Enter your email address" placeholder="Enter email" value={email}/>
            </Grid>
            <Grid item xs={6} sx={{paddingLeft:"15px"}}>
            <DropdownSelect setValue ={setMobileNumber} value={mobilNumber} required="Enter mobile number" />
            </Grid>
            </Grid>
            <Grid container sx={{ marginTop:"11px"}}>
            <Grid item xs={4} sx={{paddingRight:"15px"}}>
            <SelectField setAge={setCountry} value={country} mylabel="Select Country *" />
            </Grid>
            {/* <Grid item xs={4} sx={{paddingLeft:"15px"}}> */}
              {/* <Grid container> */}
              <Grid item xs={4} sx={{paddingRight:"15px",paddingLeft:"15px"}}>
              <SelectField mylabel="Select State *" setAge={setState} value={state} />
              </Grid>
              <Grid item xs={4} sx={{paddingLeft:"15px"}}>
              <SelectField mylabel="Select City *" setAge={setCity} value={city}/>
              </Grid>
              {/* </Grid> */}
            {/* </Grid> */}
            </Grid>
            <Grid item xs={12} sx={{ marginTop:"11px"}}>
            <Textfield setValue ={setbusinessAddress} required="Enter your address" placeholder="Enter address" value={businessAddress}/>
            </Grid>
            <Grid  sx={{ marginTop:"11px"}}>
            <ReactFileReader handleFiles={handleFiles} multipleFiles={true} fileTypes={[".csv",".zip",".pdf",".jpeg"]}>
  <button className='btn'>Upload</button>
  <Image src="/icons/sparehub.svg" alt="sparehubIcon" width={152} height={40} />
</ReactFileReader>
            </Grid>
            {/* </Grid> */}
            {/* <Grid item xs={2.6} sx={{backgroundColor:"#FBFBFA", borderRadius:"5px", marginLeft:"32px"}}>
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
            </Grid> */}
            
            </Grid>
            <Grid>
            <NextBtn Validate={Validate}/>
            </Grid>
            </Grid>
            </Grid>
            
    </Grid>)
}
export default SellerDetail
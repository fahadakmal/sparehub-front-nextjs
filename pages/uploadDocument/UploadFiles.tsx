import React,{useEffect, useState} from "react";
import { Grid } from "@mui/material";
// import Header from "../../pages/sellerprofile/Header";
import Steper from "../../src/components/Stepper";
import SellerHeading from "../../src/components/SellerHeading";
// import SellerDraftsAction from "../redux/action/SellerDraftsAction";
import { useDispatch,useSelector } from "react-redux";
import Header from "../../src/layout/Header";
import {  useCallback, useRef } from "react";
import styled from "styled-components";
import Cropper from "react-easy-crop";
import {
  withRequestPreSendUpdate,
  useItemFinalizeListener,
  useItemProgressListener
} from "@rpldy/uploady";
import dynamic from 'next/dynamic';
const Uploady= dynamic(()=>import("@rpldy/uploady"),{ssr: false})
import { getMockSenderEnhancer } from "@rpldy/mock-sender";
import UploadButton from "@rpldy/upload-button";
import UploadPreview, { PREVIEW_TYPES } from "@rpldy/upload-preview";
import getCroppedImg from "../../pages/sellerprofile/cropImage";
import SelectField from "../../src/components/SelectField";
import mycountry from "../../src/redux/slices/mycountry";
import countrySlice from "../../src/redux/slices/countrySlice";
import {getcountryFetch } from "../../src/redux/slices/sellerCountrySlice";
import NextBtn from "../sellerprofile/NextBtn";
import BankDetail from "../sellerprofile/BankDetail";
// import "./styles.css";
import { useRouter } from "next/router";

const mockSenderEnhancer = getMockSenderEnhancer({ delay: 1500 });

const PreviewImage = styled.img`
  margin: 5px;
  max-width: 200px;
  height: auto;
  max-height: 200px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  position: absolute;
  top: 0;
  right: 0;
`;

const PreviewButtons = ({finished,crop,updateRequest,onUploadCancel,onUploadCrop}: any) => {
  return (
    <ButtonsWrapper>
      <button
        style={{
          display: !finished && updateRequest && crop ? "block" : "none"
        }}
        onClick={onUploadCrop}
      >
        Upload Cropped
      </button>
      <button
        style={{ display: !finished && updateRequest ? "block" : "none" }}
        onClick={updateRequest}
      >
        Upload without Crop
      </button>
      <button
        style={{
          display: !finished && updateRequest && crop ? "block" : "none"
        }}
        onClick={onUploadCancel}
      >
        Cancel
      </button>
    </ButtonsWrapper>
  );
};

const UPLOAD_STATES = {
  NONE: 0,
  UPLOADING: 1,
  FINISHED: 2
};

const ItemPreviewWithCrop = withRequestPreSendUpdate((props) => {
  const {
    id,
    url,
    isFallback,
    type,
    updateRequest,
    requestData,
    previewMethods
  }: any = props;
  const [uploadState, setUploadState] = useState(UPLOAD_STATES.NONE);
  const [croppedImg, setCroppedImg] = useState(null);

  //data for react-easy-crop
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((croppedArea: any , croppedAreaPixels: any) => {
    // console.log(croppedArea, croppedAreaPixels);
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const isFinished = uploadState === UPLOAD_STATES.FINISHED;

  useItemProgressListener(() => setUploadState(UPLOAD_STATES.UPLOADING), id);
  useItemFinalizeListener(() => setUploadState(UPLOAD_STATES.FINISHED), id);

  const onUploadCrop = useCallback(async () => {
    if (updateRequest && croppedAreaPixels) {
      const [croppedBlob, croppedUri]: any = await getCroppedImg(
        url,
        croppedAreaPixels
      );

      requestData.items[0].file = croppedBlob;

      updateRequest({ items: requestData.items });
      setCroppedImg(croppedUri);
    }
  }, [url, requestData, updateRequest, croppedAreaPixels]);

  const onUploadCancel = useCallback(() => {
    updateRequest(false);
    if (previewMethods.current?.clear) {
      previewMethods.current.clear();
    }
  }, [updateRequest, previewMethods]);

  return isFallback || type !== PREVIEW_TYPES.IMAGE ? (
    <PreviewImage src={url} alt="fallback img" />
  ) : (
    <>
      {requestData && uploadState === UPLOAD_STATES.NONE ? (
        <div className="crop-view">
          <div className="crop-container">
            <Cropper
              image={url}
              crop={crop}
              zoom={zoom}
              aspect={4 / 3}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>
          <div className="controls">
            <input
              type="range"
              value={zoom}
              min={1}
              max={3}
              step={0.1}
              aria-labelledby="Zoom"
              onChange={(e: any) => {
                setZoom(e.target.value);
              }}
              className="zoom-range"
            />
          </div>
        </div>
      ) : (
        <PreviewImage src={croppedImg || url} alt="img to upload" />
      )}
      <PreviewButtons
        finished={isFinished}
        crop={crop}
        updateRequest={updateRequest}
        onUploadCancel={onUploadCancel}
        onUploadCrop={onUploadCrop}
      />
      {/* <p>{isFinished ? "FINISHED" : ""}</p> */}
    </>
  );
});


const UploadFiles=()=>{
    const previewMethodsRef = useRef<any>();
    const [count, setCount]= useState(1)
    const [country, setCountry] = useState<string>("");
    const dispatch=useDispatch()
    const sellerCountry=useSelector((state: any)=>state.sellerCountry)
    console.log(sellerCountry, 'state')
    const handleSubmit=()=>{
        // dispatch(SellerDraftsAction("hi"))
      }
      useEffect(()=>{
        dispatch(getcountryFetch("h"))
      },[])
      const router=useRouter();
      const Validate=(e: any)=>{
        e.preventDefault()
        router.push("../sellerprofile/BankDetail")
      }
      // const backNavigate=(e: any)=>{
      //   e.preventDefault()
      //   router.push("./sellerprofile")
      // }
return(<Grid className="webgColor" sx={{padding:"20px"}}>
  <Grid>
    <Header/>
    </Grid>
    <Grid className='shadow'>
            <SellerHeading mydata={()=>handleSubmit()} />
            <Grid style={{marginTop:"20px",marginBottom:"7px",marginLeft:"20px",marginRight:"30px"}}>
                <Grid sx={{marginTop:"30px"}}>
            <Steper count={count}/>
            </Grid>
<Grid container sx={{marginTop:"30px"}}>
    <Grid item xs={9}>
    <Uploady
      multiple={false}
      destination={{ url: "[upload-url]" }}
      enhancer={mockSenderEnhancer}
    >
      <Grid>
      <Grid container>
      <Grid item xs={3} sx={{borderRadius:"50%"}}>
        <UploadPreview
          PreviewComponent ={ItemPreviewWithCrop}
          previewComponentProps={{ previewMethods: previewMethodsRef }}
          previewMethodsRef ={previewMethodsRef}
          fallbackUrl="https://icon-library.net/images/image-placeholder-icon/image-placeholder-icon-6.jpg"
        />
        </Grid>
        <Grid item xs={2} sx={{marginTop:"70px"}}>
        <UploadButton>Upload Logo</UploadButton>
        </Grid>
      </Grid>
      <Grid container>
      <Grid item xs={6}>
      <SelectField setAge={setCountry} value={country} mylabel="Select Type *" />
        </Grid>
        <Grid item xs={6} >
          <Grid sx={{border:"1px solid grey", marginLeft:"30px", marginTop:"10px",paddingBottom:"18px"}}>
            <Grid sx={{marginTop:"10px"}}>Upload Business Document</Grid>
          </Grid>
        </Grid>
      </Grid>
      </Grid>
    </Uploady>
    </Grid>
    <Grid item xs={3}>
hii
    </Grid>
    
</Grid>
<Grid>
            <NextBtn Validate={Validate} />
            </Grid>
</Grid>
</Grid>
</Grid>)
}
export default UploadFiles
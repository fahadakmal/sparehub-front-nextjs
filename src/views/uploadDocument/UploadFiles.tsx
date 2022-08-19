import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import Steper from '../../components/Stepper';
import SellerHeading from '../../components/SellerHeading';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useRef } from 'react';
import dynamic from 'next/dynamic';
import SelectField from '../../components/SelectField';
import { getcountryFetch } from '../../redux/slices/sellerCountrySlice';
import NextBtn from '../sellerprofile/NextBtn';
import LANG_STRINGS from '../../enums/langStrings';
import { useRouter } from 'next/router';
import SellerScreenLayout from '../../components/SellerLayout/SellerScreensLayout';
import Image from 'next/image';

import 'cropperjs/dist/cropper.css';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import ErrorModal from '../sellerprofile/ErrorModal';
import { SellerDetail } from '../sellerprofile';

const UploadFiles = ({ translate }: any) => {
  const [on, setOn] = useState<boolean>(false);
  const [uploadedfile, setUploadedfile] = useState();
  const [count, setCount] = useState(1);
  const [country, setCountry] = useState<string>('');
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const sellerCountry = useSelector((state: any) => state.sellerCountry);
  console.log(sellerCountry, 'state');
  const handleSubmit = () => {
    // dispatch(SellerDraftsAction("hi"))
  };
  useEffect(() => {
    dispatch(getcountryFetch('h'));
  }, []);
  const router = useRouter();
  const Validate = (e: any) => {
    e.preventDefault();
    router.push('../SellerBankDetail');
  };
  const backNavigate = (e: any) => {
    e.preventDefault();
    router.push('../SellerDetailPage');
  };

  const ReactFileReader: any = dynamic(() => import('react-file-reader'), {
    ssr: false,
  });
  const handleFiles = (files: any) => {
    const file = files[0];
    console.log(file.name);
    setUploadedfile(file.name);
  };

  // upload image

  // const defaultSrc = 'https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg';
  const [image, setImage] = useState();

  const [cropData, setCropData] = useState();
  console.log(cropData, 'picture');
  const [cropper, setCropper] = useState<any>();
  const onChange = (e: any) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as any);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropper !== 'undefined') {
      setCropData(cropper.getCroppedCanvas().toDataURL());
      setShow(false);
    }
  };
  console.log(on, 'sss');
  return (
    <SellerScreenLayout>
      <Grid className="marginlftRight">
        <Grid className="shadow">
          <SellerHeading
            mydata={() => handleSubmit()}
            headings={translate(LANG_STRINGS.SELLER_HEADINGS)}
            draftBtn={translate(LANG_STRINGS.SAVE_AS_DRAFT)}
          />
          {on ? (
            <ErrorModal
              model={on}
              wrong={translate(LANG_STRINGS.SOMETHING_WENT_WRONG)}
              delete={translate(LANG_STRINGS.DELETE_IT)}
              action={translate(LANG_STRINGS.ACTION)}
              close={translate(LANG_STRINGS.CLOSE)}
              setmodel={setOn}
            />
          ) : (
            ''
          )}
          <Grid style={{ marginTop: '20px', marginBottom: '7px', marginLeft: '20px', marginRight: '30px' }}>
            <Grid sx={{ marginTop: '30px' }}>
              <Steper
                count={count}
                sellerAccount={translate(LANG_STRINGS.SELLER_ACCOUNT)}
                businessDocument={translate(LANG_STRINGS.BUSINESS_INFORMATION)}
                bankAccount={translate(LANG_STRINGS.BANK_ACCOUNT)}
                warehouseAddress={translate(LANG_STRINGS.WAREHOUSE_ADDRESS)}
                returnAddress={translate(LANG_STRINGS.RETURN_ADDRESS)}
              />
            </Grid>
            <Grid container sx={{ marginTop: '20px' }} spacing={4}>
              <Grid item xs={9}>
                <Grid container>
                  <Grid item xs={1.2}>
                    <Image
                      width="94px"
                      height="94px"
                      style={{ borderRadius: '50%' }}
                      src={cropData ? cropData : '/icons/default.png'}
                      alt="cropped"
                      unoptimized
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Grid style={{ paddingBottom: '14px' }}>
                      <input
                        className="input"
                        id="file"
                        style={{ visibility: 'hidden' }}
                        type="file"
                        onChange={onChange}
                      />
                      <label
                        htmlFor="file"
                        style={{ color: 'red', textDecoration: 'underline' }}
                        className=" btn"
                        onClick={() => setShow(true)}
                      >
                        {translate(LANG_STRINGS.UPLOAD_LOGO)}
                      </label>
                      <Grid sx={{ marginLeft: '12px', fontSize: '12px' }}>{translate(LANG_STRINGS.IMAGE_TEXT)}</Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    {show == true ? (
                      <Grid>
                        <Cropper
                          style={{ height: 200, width: '100%' }}
                          zoomTo={0.5}
                          initialAspectRatio={1}
                          preview=".img-preview"
                          src={image}
                          viewMode={1}
                          minCropBoxHeight={10}
                          minCropBoxWidth={10}
                          background={false}
                          responsive={true}
                          autoCropArea={1}
                          checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                          onInitialized={(instance) => {
                            setCropper(instance);
                          }}
                          guides={false}
                        />
                        <button onClick={getCropData}>Crop Image</button>
                      </Grid>
                    ) : (
                      ''
                    )}
                  </Grid>
                  <br style={{ clear: 'both' }} />
                </Grid>
                <Grid>
                  <Grid container spacing={4} sx={{ marginTop: '30px' }}>
                    <Grid item xs={6}>
                      <SelectField
                        setAge={setCountry}
                        value={country}
                        label={translate(LANG_STRINGS.DOCUMENT_TYPE)}
                        placeholder={translate(LANG_STRINGS.SELECT_DOCUMENT_TYPE)}
                        helperText={translate(LANG_STRINGS.DOCUMENT_TYPE_TEXT)}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <ReactFileReader
                        handleFiles={handleFiles}
                        multipleFiles={true}
                        fileTypes={['.csv', '.zip', '.pdf', '.jpeg']}
                      >
                        <Grid
                          container
                          className="uploadfile"
                          sx={{ border: '1px solid ', borderColor: '#bbbbbb', cursor: 'pointer' }}
                        >
                          <Grid xs={10.8} sx={{ marginTop: '12px', marginLeft: '8px' }}>
                            {translate(LANG_STRINGS.UPLOAD_BUSINESS_DOCUMENT)}
                          </Grid>
                          <Grid item xs={1}>
                            <Grid sx={{ marginTop: '10px' }}>
                              <Image src="/icons/fileupload.png" alt="uploadfile" width={25} height={25} />
                            </Grid>
                          </Grid>
                        </Grid>
                      </ReactFileReader>
                      <Grid sx={{ fontSize: '12px', marginTop: '4px', marginRight: '0px' }}>
                        {translate(LANG_STRINGS.UPLOAD_DOCUMENT_TEXT)}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid sx={{ backgroundColor: '#FBFBFA', padding: '10px', height: '320px' }}>
                  <Grid sx={{ fontWeight: 'bolder' }}>{translate(LANG_STRINGS.UPLOADED_DOCUMENTS)}</Grid>
                  <hr></hr>
                  {uploadedfile ? (
                    <Grid container>
                      <Grid item xs={2}>
                        <Image src="/icons/pdf.png" alt="uploadfile" width={29} height={31} />
                      </Grid>
                      <Grid item xs={7}>
                        <Typography variant="body1">{uploadedfile}</Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Image src="/icons/showFile.png" alt="uploadfile" width={20.25} height={14.64} />
                      </Grid>
                      <Grid item xs={1}>
                        <Image
                          src="/icons/deleteDocument.png"
                          alt="uploadfile"
                          width={12.56}
                          height={13.32}
                          onClick={() => setOn(true)}
                        />
                      </Grid>
                    </Grid>
                  ) : (
                    <Grid sx={{ marginTop: '70px', textAlign: 'center' }}>
                      <Image src="/icons/noDocument.png" alt="uploadfile" width={100} height={100} />
                      <Grid>{translate(LANG_STRINGS.NOT_UPLOADED_DOCUMENTS)}</Grid>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid>
              <NextBtn
                Validate={Validate}
                backNavigate={backNavigate}
                nextBtn={translate(LANG_STRINGS.NEXT_BTN)}
                backBtn={translate(LANG_STRINGS.BACK_BTN)}
                mand_fields={translate(LANG_STRINGS.MANDATORY_FIELDS)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </SellerScreenLayout>
  );
};
export default UploadFiles;

import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import SelectField from '../../components/SelectField';
import LANG_STRINGS from '../../enums/langStrings';
import Image from 'next/image';

import 'cropperjs/dist/cropper.css';
import Cropper from 'react-cropper';
import ErrorModal from '../sellerprofile/ErrorModal';
import { useDispatch, useSelector } from 'react-redux';
import { uploadFileRequest } from '../../redux/slices/sellerSlice';
import { API_TOKEN } from '../../constant';
import { dataUrlToFile } from '../../utils';

const UploadFiles = ({ translate, formik }: any) => {
  const dispatch = useDispatch();
  const { values: seller, handleChange, errors, touched, handleBlur,setFieldValue } = formik;
  const { documentTypes } = useSelector((state: any) => state.seller);
  const [on, setOn] = useState<boolean>(false);
  const [uploadedfile, setUploadedfile] = useState();
  const [documentType, setDocumentType] = useState<string>(0);
  const [show, setShow] = useState(false);

  const ReactFileReader: any = dynamic(() => import('react-file-reader'), {
    ssr: false,
  });
  const handleFiles = (files: any) => {
    const file = files[0];
    dispatch(uploadFileRequest({token:API_TOKEN,data:file,type:"document"}))
    setUploadedfile(file.name);
  };

  // upload image
  const [image, setImage] = useState();

  const [cropData, setCropData] = useState();
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
      const croppedData = cropper.getCroppedCanvas().toDataURL()
      setCropData(croppedData);
      dispatch(
        uploadFileRequest({
          token: API_TOKEN,
          data: dataUrlToFile(croppedData, "profile.png")
        }),
      );
      setShow(false);
    }
  };

  return (
    <>
      {on && (
        <ErrorModal
          model={on}
          wrong={translate(LANG_STRINGS.SOMETHING_WENT_WRONG)}
          deleteIt={translate(LANG_STRINGS.DELETE_IT)}
          deleteAction={translate(LANG_STRINGS.DELETE)}
          action={translate(LANG_STRINGS.ACTION)}
          close={translate(LANG_STRINGS.CLOSE)}
          setmodel={setOn}
          image="/icons/deleteItem.png"
        />
      )}
      <Grid container sx={{ marginTop: '20px' }} spacing={4}>
        <Grid item md={9} xs={12}>
          <Grid container>
            <Grid item xs={1.2}>
              <Image
                width="94px"
                height="94px"
                style={{ borderRadius: '50%' }}
                src={cropData ?? '/icons/default.png'}
                alt="cropped"
                unoptimized
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <Grid style={{ paddingBottom: '14px' }}>
                <input className="input" id="file" style={{ visibility: 'hidden' }} type="file" onChange={onChange} />
                <label
                  htmlFor="file"
                  style={{ color: 'red', textDecoration: 'underline' }}
                  className=" btn"
                  onClick={() => setShow(true)}
                >
                  {translate(LANG_STRINGS.UPLOAD_LOGO)}
                </label>
                <Grid sx={{ marginLeft: '12px', fontSize: '12px' }}>{translate(LANG_STRINGS.FILE_FORMAT)}</Grid>
              </Grid>
            </Grid>
            <Grid item md={6} xs={12}>
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
              <Grid item md={6} xs={12}>
                <SelectField
                  name="documentType"
                  data={documentTypes}
                  setSelectedValue={(id)=>setDocumentType(id)}
                  value={documentType}
                  label={translate(LANG_STRINGS.DOCUMENT_TYPE)}
                  placeholder={translate(LANG_STRINGS.SELECT_TYPE)}
                  helperText={translate(LANG_STRINGS.DOCUMENT_TYPE_MESSAGE)}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <ReactFileReader
                  handleFiles={handleFiles}
                  multipleFiles={true}
                  fileTypes={['.csv', '.zip', '.pdf', '.jpeg']}
                >
                  <Grid
                    container
                    // className="uploadfile"
                    sx={{
                      border: '1px solid rgba(121, 116, 126, 0.2)',
                      background: 'rgba(0, 0, 0, 0.04)',
                      cursor: 'pointer',
                      height: '56px',
                      borderRadius: '4px',
                    }}
                  >
                    <Grid xs={10.8} sx={{ marginTop: '12px', marginLeft: '8px' }}>
                      {translate(LANG_STRINGS.UPLOAD_BUSINESS_DOCUMENT)}
                    </Grid>
                    <Grid item xs={12} md={1}>
                      <Grid sx={{ marginTop: '10px' }}>
                        <Image src="/icons/fileupload.png" alt="uploadfile" width={25} height={25} />
                      </Grid>
                    </Grid>
                  </Grid>
                </ReactFileReader>
                <Grid sx={{ fontSize: '12px', marginTop: '4px', marginRight: '0px' }}>
                  {translate(LANG_STRINGS.UPLOAD_DOCUMENT_MESSAGE)}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <Grid sx={{ backgroundColor: '#FBFBFA', padding: '10px', height: '320px' }}>
            <Grid sx={{ fontWeight: 'bolder' }}>{translate(LANG_STRINGS.UPLOADED_DOCUMENTS)}</Grid>
            <hr></hr>

            {seller.documents.length == 0 ? (
              <Grid sx={{ marginTop: '70px', textAlign: 'center' }}>
                <Image src="/icons/noDocument.png" alt="uploadfile" width={100} height={100} />
                <Grid>{translate(LANG_STRINGS.NOT_UPLOADED_DOCUMENTS)}</Grid>
              </Grid>
            ) : (
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
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default UploadFiles;

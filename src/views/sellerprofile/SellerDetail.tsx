//IMPORTS
import { Box, Grid, Paper } from '@mui/material';
import SellerHeading from '../../components/SellerHeading';
import Steper from '../../components/Stepper';
import { useEffect, useState } from 'react';
import NextBtn from './NextBtn';
// rtl code
import SellerScreenLayout from '../../components/SellerLayout/SellerScreensLayout';
import LANG_STRINGS from '../../enums/langStrings';
import { SellerDetails } from './forms/sellerDetails';
import { BankDetail } from '../bankDetail';
import { WarehouseAddress } from '../warehousePage';
import UploadFiles from '../uploadDocument/UploadFiles';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';


import { API_TOKEN } from '../../constant';
import { getSellerCompanyInfoRequest } from '../../redux/slices/sellerSlice';
import { sellerOnboardingSchema } from './forms/validationSchema';
//STYLE

//COMPONENT



const SellerDetail = ({ translate }: any) => {
  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(getSellerCompanyInfoRequest(API_TOKEN))
  },[])
  const [currentStep, setCurrentStep] = useState(0);
  const {seller,loading,error} = useSelector((state: any) => state.seller)
  const formik = useFormik({
    initialValues: seller,
    validationSchema: sellerOnboardingSchema,
    validateOnBlur: false,
    enableReinitialize:true,
    onSubmit: (values) => {},
  });
  const isDraftable = !(Object.values(formik.values).filter(Boolean).length >=6)
  let list;
  if (typeof window !== 'undefined') {
    list = localStorage.getItem(
      'CognitoIdentityServiceProvider.1u61rreo1n3kdrp10euthkkvcr.3031d387-1ba5-4e8d-aa6d-067a1c0034ae.accessToken',
    );
  }

  const handleSubmit = () => {
    // dispatch(SellerDraftsAction("hi"))
  };

  return (
    <SellerScreenLayout>
      <SellerHeading
        mydata={() => handleSubmit()}
        headings={translate(LANG_STRINGS.SELLER_HEADINGS)}
        draftBtn={translate(LANG_STRINGS.SAVE_AS_DRAFT)}
        disabled={isDraftable}
        data = {formik.values}
      />
      <Grid style={{ marginTop: '20px', marginBottom: '7px', marginLeft: '20px', marginRight: '20px' }}>
        <Grid sx={{ marginTop: '30px' }}>
          <Steper
          steps={[
            translate(LANG_STRINGS.SELLER_ACCOUNT),
            translate(LANG_STRINGS.BUSINESS_INFO),
            translate(LANG_STRINGS.BANK_ACC),
            translate(LANG_STRINGS.WAREHOUSE_ADDRESS),
          ]}
            currentStep={currentStep}
          />
        </Grid>
        {currentStep == 0 && <SellerDetails translate={translate} formik={formik} />}
        {currentStep == 1 && <UploadFiles translate={translate} formik={formik}/>}
        {currentStep == 2 && <BankDetail translate={translate} formik={formik}/>}
        {currentStep == 3 && <WarehouseAddress translate={translate} formik={formik} />}
        <Grid>
          <NextBtn
            currentStep={currentStep}
            translate={translate}
            handleNext={() => setCurrentStep(currentStep + 1)}
            handleBack={() => setCurrentStep(currentStep - 1)}
            mand_fields={translate(LANG_STRINGS.MANDATORY_FIELDS)}
          />
        </Grid>
      </Grid>
    </SellerScreenLayout>
  );
};
export default SellerDetail;

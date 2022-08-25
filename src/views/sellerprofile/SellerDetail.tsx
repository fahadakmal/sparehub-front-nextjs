//IMPORTS
import { Box, Grid, Paper } from '@mui/material';
import SellerHeading from '../../components/SellerHeading';
import Steper from '../../components/Stepper';
import { useState } from 'react';
import NextBtn from './NextBtn';
// rtl code
import SellerScreenLayout from '../../components/SellerLayout/SellerScreensLayout';
import LANG_STRINGS from '../../enums/langStrings';
import { SellerDetails } from './forms/sellerDetails';
import { BankDetail } from '../bankDetail';
import { WarehouseAddress } from '../warehousePage';
import UploadFiles from '../uploadDocument/UploadFiles';
//STYLE

//COMPONENT
const SellerDetail = ({ translate }: any) => {
  const [currentStep, setCurrentStep] = useState(0);

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
      {/* <Grid className="marginlftRight">
        <Grid className="shadow">
          <SellerHeading
            mydata={() => handleSubmit()}
            headings={translate(LANG_STRINGS.SELLER_HEADINGS)}
            draftBtn={translate(LANG_STRINGS.SAVE_AS_DRAFT)}
          />
          <Grid style={{ marginTop: '20px', marginBottom: '7px', marginLeft: '20px', marginRight: '20px' }}>
            <Grid sx={{ marginTop: '30px' }}>
              <Steper
                steps={[
                  translate(LANG_STRINGS.SELLER_ACCOUNT),
                  translate(LANG_STRINGS.BUSINESS_INFORMATION),
                  translate(LANG_STRINGS.BANK_ACCOUNT),
                  translate(LANG_STRINGS.WAREHOUSE_ADDRESS),
                ]}
                currentStep={currentStep}
              />
            </Grid>
            {currentStep == 0 && <SellerDetails translate={translate} />}
            {currentStep == 1 && <UploadFiles translate={translate} />}
            {currentStep == 2 && <BankDetail translate={translate} />}
            {currentStep == 3 && <WarehouseAddress translate={translate} />}
            <Grid>
              <NextBtn
                translate={translate}
                handleNext={() => setCurrentStep(currentStep + 1)}
                handleBack={() => setCurrentStep(currentStep - 1)}
                mand_fields={translate(LANG_STRINGS.MANDATORY_FIELDS)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid> */}

      <SellerHeading
        mydata={() => handleSubmit()}
        headings={translate(LANG_STRINGS.SELLER_HEADINGS)}
        draftBtn={translate(LANG_STRINGS.SAVE_AS_DRAFT)}
      />
      <Grid style={{ marginTop: '20px', marginBottom: '7px', marginLeft: '20px', marginRight: '20px' }}>
        <Grid sx={{ marginTop: '30px' }}>
          <Steper
            steps={[
              translate(LANG_STRINGS.SELLER_ACCOUNT),
              translate(LANG_STRINGS.BUSINESS_INFORMATION),
              translate(LANG_STRINGS.BANK_ACCOUNT),
              translate(LANG_STRINGS.WAREHOUSE_ADDRESS),
            ]}
            currentStep={currentStep}
          />
        </Grid>
        {currentStep == 0 && <SellerDetails translate={translate} />}
        {currentStep == 1 && <UploadFiles translate={translate} />}
        {currentStep == 2 && <BankDetail translate={translate} />}
        {currentStep == 3 && <WarehouseAddress translate={translate} />}
        <Grid>
          <NextBtn
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

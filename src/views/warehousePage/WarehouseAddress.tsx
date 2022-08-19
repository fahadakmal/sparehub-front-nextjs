import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import SellerScreenLayout from '../../components/SellerLayout/SellerScreensLayout';
import LANG_STRINGS from '../../enums/langStrings';
import SellerHeading from '../../components/SellerHeading';
import NextBtn from '../sellerprofile/NextBtn';
import Steper from '../../components/Stepper';
import { useRouter } from 'next/router';
import { Typography } from '@mui/material';
import PrimaryInput from '../../components/Input/PrimaryInput';
import DropdownSelect from '../../components/items/DropdownSelect';
import SelectField from '../../components/SelectField';
import Checkbox from '@mui/material/Checkbox';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const WarehouseAddress = ({ translate }: any) => {
  const [count, setCount] = useState(3);
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [city, setCity] = useState<string>('');
  console.log(mobileNumber, 'mobile');
  const handleSubmit = () => {};

  const router = useRouter();
  const Validate = (e: any) => {
    e.preventDefault();
    // router.push('../uploadfiles');
  };

  const backNavigate = () => {
    router.push('../SellerBankDetail');
  };

  const [sellerLocation, setSellerLocation] = useState({
    firstName: '',
    lastName: '',
    locNamEng: '',
    locNamArb: '',
    regNumber: '',
    email: '',
    url: '',
    country: 'SA',
    dialCode: '+966',
  });
  const handleChange = (e: any) => {
    setSellerLocation({ ...sellerLocation, [e.target.name]: e.target.value });
  };
  // check box
  const [checked, setChecked] = React.useState(true);
  console.log(checked, 'checked');
  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };


      
  

  return (
    <SellerScreenLayout>
      <Grid className="marginlftRight">
        <Grid className="shadow">
          <SellerHeading
            mydata={() => handleSubmit()}
            headings={translate(LANG_STRINGS.SELLER_HEADINGS)}
            draftBtn={translate(LANG_STRINGS.SAVE_AS_DRAFT)}
          />
          <Grid style={{ marginTop: '20px', marginBottom: '7px', marginLeft: '20px', marginRight: '20px' }}>
            <Grid style={{ marginTop: '30px' }}>
              <Steper
                count={count}
                sellerAccount={translate(LANG_STRINGS.SELLER_ACCOUNT)}
                businessDocument={translate(LANG_STRINGS.BUSINESS_INFORMATION)}
                bankAccount={translate(LANG_STRINGS.BANK_ACCOUNT)}
                warehouseAddress={translate(LANG_STRINGS.WAREHOUSE_ADDRESS)}
                returnAddress={translate(LANG_STRINGS.RETURN_ADDRESS)}
              />
            </Grid>
            <Grid>
              <Typography sx={{ fontWeight: 'bold' }} marginTop={3} variant="subtitle1">
                {translate(LANG_STRINGS.LOCATION_INCH_DETAIL)}
              </Typography>
            </Grid>
            <Grid container style={{ marginTop: '1px' }} spacing={4}>
              <Grid item xs={9}>
                <Grid container spacing={4}>
                  <Grid item xs={6}>
                    <PrimaryInput
                      label={translate(LANG_STRINGS.FIRST_NAME)}
                      type={'text'}
                      name="firstName"
                      fullWidth
                      placeholder={translate(LANG_STRINGS.FIRST_NAME_PLACEHOLDER)}
                      // startAdornment={<Email color="disabled" />}
                      onChange={handleChange}
                      required={true}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <PrimaryInput
                      label={translate(LANG_STRINGS.LAST_NAME)}
                      type={'text'}
                      name="lastName"
                      fullWidth
                      placeholder={translate(LANG_STRINGS.LAST_NAME_PLACEHOLDER)}
                      // startAdornment={<Email color="disabled" />}
                      onChange={handleChange}
                      required={true}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={4} style={{ marginTop: '11px' }}>
                  <Grid item xs={6}>
                    <PrimaryInput
                      label={translate(LANG_STRINGS.EMAIL)}
                      type={'text'}
                      name="email"
                      fullWidth
                      placeholder={translate(LANG_STRINGS.BUSINESS_EMAIL_PLACEHOLDER)}
                      // startAdornment={<Email color="disabled" />}
                      onChange={handleChange}
                      required={true}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <DropdownSelect
                      setValue={setMobileNumber}
                      value={mobileNumber}
                      label={translate(LANG_STRINGS.PHONE_NUMBER_LBL)}
                      required={translate(LANG_STRINGS.ENTER_SELLER_NUMBER)}
                    />
                  </Grid>
                </Grid>

                <Grid>
                  <Typography sx={{ fontWeight: 'bold' }} marginTop={2} variant="subtitle1">
                    {translate(LANG_STRINGS.LOCATION_DETAIL)}
                  </Typography>
                </Grid>
                <Grid container spacing={4} style={{ marginTop: '1px' }}>
                  <Grid item xs={6}>
                    <PrimaryInput
                      label={translate(LANG_STRINGS.LOCATION_NAME)}
                      type={'text'}
                      name="locNamEng"
                      fullWidth
                      placeholder={translate(LANG_STRINGS.LOCATION_NAME_PLACEHOLDER)}
                      // startAdornment={<Email color="disabled" />}
                      onChange={handleChange}
                      required={true}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <PrimaryInput
                      label={translate(LANG_STRINGS.LOCATION_NAME_AR)}
                      type={'text'}
                      name="locNamArb"
                      fullWidth
                      placeholder={translate(LANG_STRINGS.LOCATION_NAME_AR_PLACEHOLDER)}
                      // startAdornment={<Email color="disabled" />}
                      onChange={handleChange}
                      required={true}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={4} style={{ marginTop: '11px' }}>
                  <Grid item xs={6}>
                    <SelectField
                      setAge={setCountry}
                      value={country}
                      // mydata={sellerCountry}
                      placeholder={translate(LANG_STRINGS.SELLER_COUNTRY)}
                      label={translate(LANG_STRINGS.COUNTRY)}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <SelectField
                      placeholder={translate(LANG_STRINGS.SELLER_STATE)}
                      label={translate(LANG_STRINGS.STATE)}
                      setAge={setState}
                      value={state}
                      // mydata={sellerstate}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <SelectField
                      placeholder={translate(LANG_STRINGS.SELLER_CITY)}
                      label={translate(LANG_STRINGS.CITY)}
                      setAge={setCity}
                      value={city}
                    />
                  </Grid>
                </Grid>
                <Grid container style={{ marginTop: '25px' }}>
                  <Grid item xs={12}>
                    <PrimaryInput
                      label={translate(LANG_STRINGS.ADDRESS)}
                      type={'text'}
                      name="url"
                      fullWidth
                      placeholder={translate(LANG_STRINGS.ENTER_BUSINESS_ADDRESS)}
                      // startAdornment={<Email color="disabled" />}
                      onChange={handleChange}
                      required={true}
                    />
                  </Grid>
                </Grid>
                <Grid style={{ marginTop: '5px' }}>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox checked={checked} onChange={handleCheckbox} />}
                      label={translate(LANG_STRINGS.RETURN_LOCATION)}
                    />
                  </FormGroup>
                </Grid>
            


              </Grid>
              <Grid item xs={3}>
                hiii
              </Grid>
            </Grid>
            <Grid style={{ marginTop: '30px' }}>
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
export default WarehouseAddress;

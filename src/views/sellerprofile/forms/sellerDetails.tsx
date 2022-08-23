//IMPORTS
import { Grid } from '@mui/material';
import { useState } from 'react';
import { Email } from '@mui/icons-material';
import PrimaryInput from '../../../components/Input/PrimaryInput';
import LANG_STRINGS from '../../../enums/langStrings';
import DropdownSelect from '../../../components/items/DropdownSelect';
import SelectField from '../../../components/SelectField';

export const SellerDetails = ({ translate }) => {
  const [country, setCountry] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [mobilNumber, setMobileNumber] = useState<string>('');

  const [seller, setSeller] = useState({
    businessName: '',
    businessNameArabic: '',
    shopName: '',
    shopNameArabic: '',
    regNumber: '',
    email: '',
    url: '',
    country: 'SA',
    dialCode: '+966',
  });

  const handleChange = (e: any) => {
    setSeller({ ...seller, [e.target.name]: e.target.value });
  };

  return (
    <Grid container sx={{ marginTop: '31px' }}>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <PrimaryInput
            label={translate(LANG_STRINGS.BUSINESS_NAME)}
            type={'text'}
            name="businessName"
            fullWidth
            placeholder={translate(LANG_STRINGS.BUSINESS_NAME_PLACEHOLDER)}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <PrimaryInput
            label={translate(LANG_STRINGS.BUSINESS_NAME_AR)}
            type={'text'}
            name="businessNameArabic"
            fullWidth
            placeholder={translate(LANG_STRINGS.BUSINESS_NAME_AR_PLACEHOLDER)}
            onChange={handleChange}
          />
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ marginTop: '1px' }}>
        <Grid item xs={6}>
          <PrimaryInput
            label={translate(LANG_STRINGS.SHOP_NAME)}
            type={'text'}
            name="shopName"
            fullWidth
            placeholder={translate(LANG_STRINGS.SHOP_NAME_PLACEHOLDER)}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <PrimaryInput
            label={translate(LANG_STRINGS.SHOP_NAME_AR)}
            type={'text'}
            name="shopNameArabic"
            fullWidth
            placeholder={translate(LANG_STRINGS.SHOP_NAME_AR_PLACEHOLDER)}
            onChange={handleChange}
          />
        </Grid>
      </Grid>

      <Grid container sx={{ marginTop: '1px' }} spacing={4}>
        <Grid item xs={6}>
          <PrimaryInput
            label={translate(LANG_STRINGS.REG_NUMBER)}
            type={'text'}
            name="regNumber"
            fullWidth
            placeholder={translate(LANG_STRINGS.ENTER_REG_NUMBER)}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <DropdownSelect
            setValue={setMobileNumber}
            value={mobilNumber}
            label={translate(LANG_STRINGS.PHONE_NUMBER_LBL)}
            required={translate(LANG_STRINGS.ENTER_SELLER_NUMBER)}
          />
        </Grid>
      </Grid>
      <Grid container sx={{ marginTop: '1px' }} spacing={4}>
        <Grid item xs={6}>
          <PrimaryInput
            label={translate(LANG_STRINGS.BUSINESS_EMAIL)}
            type={'text'}
            name="email"
            fullWidth
            placeholder={translate(LANG_STRINGS.BUSINESS_EMAIL_PLACEHOLDER)}
            startAdornment={<Email color="disabled" />}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <PrimaryInput
            label={translate(LANG_STRINGS.BUSINESS_URL)}
            type={'text'}
            name="url"
            fullWidth
            placeholder={translate(LANG_STRINGS.SELLER_BUSINESS_URL)}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Grid container sx={{ marginTop: '1px' }} spacing={3}>
        <Grid item xs={4}>
          <SelectField
            setSelectedValue={setCountry}
            checkValidation={country}
            placeholder={translate(LANG_STRINGS.SELLER_COUNTRY)}
            label={translate(LANG_STRINGS.COUNTRY)}
          />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            placeholder={translate(LANG_STRINGS.SELLER_STATE)}
            label={translate(LANG_STRINGS.STATE)}
            setSelectedValue={setState}
            checkValidation={state}
          />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            placeholder={translate(LANG_STRINGS.SELLER_CITY)}
            label={translate(LANG_STRINGS.CITY)}
            setSelectedValue={setCity}
            checkValidation={city}
          />
        </Grid>
      </Grid>
      <Grid container sx={{ marginTop: '25px' }}>
        <Grid item xs={12}>
          <PrimaryInput
            label={translate(LANG_STRINGS.SELLER_ADDRESS)}
            type={'text'}
            name="url"
            fullWidth
            placeholder={translate(LANG_STRINGS.ENTER_BUSINESS_ADDRESS)}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

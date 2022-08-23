//IMPORTS
import { Grid } from '@mui/material';
// import 'react-image-picker-editor/dist/index.css';
import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

// rtl code
import { useMediaQuery, useTheme } from '@mui/material';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { Email } from '@mui/icons-material';
import PrimaryInput from '../../../components/Input/PrimaryInput';
import LANG_STRINGS from '../../../enums/langStrings';
import DropdownSelect from '../../../components/items/DropdownSelect';
import SelectField from '../../../components/SelectField';

export const SellerDetails = ({ translate }) => {
  const [country, setCountry] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [file, setFile] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [mobilNumber, setMobileNumber] = useState<string>('');
  const [myboolean, setmyBoolean] = useState<Boolean>(false);
  const [message, setMessage] = useState(''); // This will be used to show a message if the submission is successful
  const [submitted, setSubmitted] = useState(false);

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
  console.log('hii', seller);

  const handleChange = (e: any) => {
    setSeller({ ...seller, [e.target.name]: e.target.value });
  };

  return (
    <Grid container sx={{ marginTop: '31px' }}>
      {/* <Grid item xs={9}> */}
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <PrimaryInput
            label={translate(LANG_STRINGS.BUSINESS_NAME)}
            type={'text'}
            name="businessName"
            fullWidth
            placeholder={translate(LANG_STRINGS.BUSINESS_NAME_PLACEHOLDER)}
            // startAdornment={<Email color="disabled" />}
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
            // startAdornment={<Email color="disabled" />}
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
            // startAdornment={<Email color="disabled" />}
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
            // startAdornment={<Email color="disabled" />}
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
            // startAdornment={<Email color="disabled" />}
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
            // startAdornment={<Email color="disabled" />}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Grid container sx={{ marginTop: '1px' }} spacing={3}>
        <Grid item xs={4}>
          <SelectField
            setAge={setCountry}
            value={country}
            placeholder={translate(LANG_STRINGS.SELLER_COUNTRY)}
            label={translate(LANG_STRINGS.COUNTRY)}
          />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            placeholder={translate(LANG_STRINGS.SELLER_STATE)}
            label={translate(LANG_STRINGS.STATE)}
            setAge={setState}
            value={state}
          />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            placeholder={translate(LANG_STRINGS.SELLER_CITY)}
            label={translate(LANG_STRINGS.CITY)}
            setAge={setCity}
            value={city}
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
            // startAdornment={<Email color="disabled" />}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

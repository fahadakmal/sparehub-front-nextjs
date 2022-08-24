import * as React from 'react';
import { Email } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import { PrimaryButton } from '../../components/Button/PrimaryButton';
import PrimaryInput from '../../components/Input/PrimaryInput';
import PhoneInput from '../../components/PhoneInput/PhoneInput';
import CountryDropdown from '../../components/Select/CountryDropdown';

const Step1 = ({ translate, handleCountrySelect, user, signupType, handleChange, handleNextStep, formik }: any) => {
  const {errors,touched,handleBlur} = formik
  const btnDisable = (Boolean(errors.email) || Boolean(errors.phoneNumber))
  return (
    <>
      <Grid item xs={12} pt={3}>
        <CountryDropdown
          translate={translate}
          handleChange={handleCountrySelect}
          selected={user.country}
          name="country"
        />
      </Grid>
      <Grid item xs={12} pt={3}>
        {signupType === 'phone' ? (
          <PhoneInput
            label={translate('PHONE_NUMBER')}
            name="phoneNumber"
            fullWidth
            onBlur={handleBlur}
            value={user.phoneNumber}
            placeholder={translate('PHONE_NUMBER')}
            startAdornment={<Typography>{user.dialCode}</Typography>}
            onChange={formik.handleChange}
            error={errors.phoneNumber && Boolean(touched.phoneNumber)}
            helperText={touched.phoneNumber && errors.phoneNumber}
            required={true}
          />
        ) : (
          <PrimaryInput
            label={translate('EMAIL')}
            type={'text'}
            name="email"
            fullWidth
            value={user.email}
            onBlur={handleBlur}
            placeholder={translate('EMAIL_ADDRESS')}
            startAdornment={<Email color="disabled" />}
            onChange={formik.handleChange}
            required={true}
            error={errors.email && Boolean(touched.email)}
            helperText={touched.email && errors.email}
          />
        )}
      </Grid>
      <Grid item xs={12} pt={3}>
        <PrimaryButton disabled={btnDisable} onClick={handleNextStep} variant="contained" fullWidth>
          {translate('NEXT')}
        </PrimaryButton>
      </Grid>
    </>
  );
};

export default Step1;

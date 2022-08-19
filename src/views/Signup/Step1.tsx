import * as React from 'react';
import { Email } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import { PrimaryButton } from '../../components/Button/PrimaryButton';
import PrimaryInput from '../../components/Input/PrimaryInput';
import PhoneInput from '../../components/PhoneInput/PhoneInput';
import CountryDropdown from '../../components/Select/CountryDropdown';

const Step1 = ({ translate, handleCountrySelect, user, signupType, handleChange, handleNextStep, emailValid }: any) => {
  const btnDisable =
    signupType === 'email' && !emailValid ? true : signupType === 'phone' && user.phoneNumber.length < 7 ? true : false;
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
            value={user.phoneNumber}
            placeholder={translate('PHONE_NUMBER')}
            startAdornment={<Typography>{user.dialCode}</Typography>}
            onChange={handleChange}
            required={true}
          />
        ) : (
          <PrimaryInput
            label={translate('EMAIL')}
            type={'text'}
            name="email"
            fullWidth
            value={user.email}
            placeholder={translate('EMAIL_ADDRESS')}
            startAdornment={<Email color="disabled" />}
            onChange={handleChange}
            required={true}
            error={!emailValid}
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

import * as React from 'react';
import { Email } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import { PrimaryButton } from '../../components/Button/PrimaryButton';
import PrimaryInput from '../../components/Input/PrimaryInput';
import PhoneInput from '../../components/PhoneInput/PhoneInput';
import CountryDropdown from '../../components/Select/CountryDropdown';
import LANG_STRINGS from '../../enums/langStrings';
import { createTheme, MuiThemeProvider } from '@material-ui/core';

const Step1 = ({ translate, handleCountrySelect, user, signupType, handleChange, handleNextStep, formik }: any) => {
  const { values, errors, touched, handleBlur } = formik;
  const btnDisable = Boolean(errors.email) || Boolean(errors.phoneNumber);

  const formLabelsTheme = createTheme({
    overrides: { MuiFormLabel: { asterisk: { color: '#db3131', '&$error': { color: '#db3131' } } } },
  });

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
        <MuiThemeProvider theme={formLabelsTheme}>
          {signupType === 'phone' ? (
            <PhoneInput
              label={translate('PHONE_NUMBER')}
              name="phoneNumber"
              fullWidth
              onBlur={handleBlur}
              value={values.phoneNumber}
              placeholder={translate('PHONE_NUMBER')}
              startAdornment={<Typography>{user.dialCode}</Typography>}
              onChange={formik.handleChange}
              error={errors.phoneNumber && Boolean(touched.phoneNumber)}
              helperText={touched.phoneNumber && errors.phoneNumber}
              required={true}
              maxLength={10}
            />
          ) : (
            <PrimaryInput
              label={translate(LANG_STRINGS.EMAIL_TAB_TAB)}
              type={'text'}
              name="email"
              fullWidth
              value={values.email}
              onBlur={handleBlur}
              placeholder={translate('EMAIL_ADDRESS')}
              startAdornment={<Email color="disabled" />}
              onChange={formik.handleChange}
              required={true}
              error={errors.email && Boolean(touched.email)}
              helperText={touched.email && errors.email}
            />
          )}
        </MuiThemeProvider>
      </Grid>
      <Grid item xs={12} pt={3}>
        <PrimaryButton disabled={!btnDisable} onClick={handleNextStep} variant="contained" fullWidth>
          {translate('NEXT')}
        </PrimaryButton>
      </Grid>
    </>
  );
};

export default Step1;

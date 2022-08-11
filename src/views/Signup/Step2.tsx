import * as React from 'react';
import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';
// import '../../App.css';
import { PrimaryButton } from '../../components/Button/PrimaryButton';
import PrimaryInput from '../../components/Input/PrimaryInput';
import PhoneInput from '../../components/PhoneInput/PhoneInput';
import Recaptcha from '../../components/Recaptcha';
import Image from 'next/image';
import { dotPass, tickpass } from '../../../public/images';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

const styling = {
  successMessage: {
    color: 'green',
    fontSize: '14px',
    fontWeight: '600',
  },
  errorMessage: {
    color: '#E2282C',
    fontSize: '14px',
    fontWeight: '600',
  },
  strengthMsgs: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '28px',
    letterSpacing: '0.24px',
    color: '#000000',
  },
};

const Step2 = ({
  translate,
  signupType,
  handleChange,
  showPassword,
  hideShowPassword,
  showConfirmPassword,
  hideShowConfirmPassword,
  handleVerifyRecaptcha,
  handleSignUp,
  user,
  recaptchaStatusVerified,
  passwordLength,
  isNumber,
  isUppercase,
  isSpecialChar,
  isLowercase,
  changeHandler,
  checkSpecialCharacterHandler,
  showErrorMessage,
  handleCPassword,
}: any) => {
  const { successMessage } = styling;
  const { errorMessage } = styling;
  const { strengthMsgs } = styling;

  let activeCheck = <CheckOutlinedIcon sx={{ color: '#46BB59' }} fontSize="small" />;
  let disabledCheck = <CheckOutlinedIcon color="disabled" fontSize="small" />;
  return (
    <Grid columnSpacing={2} container>
      <Grid item sm={6} xs={12} pt={3}>
        <PrimaryInput
          label={translate('FIRST_NAME')}
          type={'text'}
          name="firstName"
          fullWidth
          placeholder={translate('FIRST_NAME')}
          onChange={handleChange}
          required={true}
        />
      </Grid>
      <Grid item sm={6} xs={12} pt={3}>
        <PrimaryInput
          label={translate('LAST_NAME')}
          type={'text'}
          name="lastName"
          fullWidth
          placeholder={translate('LAST_NAME')}
          onChange={handleChange}
          required={true}
        />
      </Grid>
      <Grid item xs={12} pt={3}>
        {signupType === 'phone' ? (
          <PrimaryInput
            label={translate('EMAIL')}
            type={'text'}
            name="email"
            fullWidth
            placeholder={translate('EMAIL_ADDRESS')}
            startAdornment={<Email color="disabled" />}
            onChange={handleChange}
            required={true}
          />
        ) : (
          <PhoneInput
            label={translate('PHONE_NUMBER')}
            name="phoneNumber"
            fullWidth
            placeholder={translate('PHONE_NUMBER')}
            startAdornment={<Typography>{user.dialCode}</Typography>}
            onChange={handleChange}
            required={true}
          />
        )}
      </Grid>
      <Grid item xs={12} pt={3}>
        <PrimaryInput
          label={translate('PASSWORD')}
          type={showPassword ? 'text' : 'password'}
          name="password"
          fullWidth
          placeholder={translate('ENTER_PASSWORD')}
          startAdornment={<Lock color="disabled" />}
          endAdornment={showPassword ? <Visibility color="disabled" /> : <VisibilityOff color="disabled" />}
          onClick={hideShowPassword}
          value={user?.password}
          // onChange={handleChange}
          onChange={changeHandler}
        />
      </Grid>
      <Grid item xs={12} pt={3}>
        <PrimaryInput
          label={translate('CONFORM_PASSWORD')}
          type={showConfirmPassword ? 'text' : 'password'}
          name="confirmPassword"
          fullWidth
          placeholder={translate('ENTER_PASS_AGAIN')}
          startAdornment={<Lock color="disabled" />}
          endAdornment={showConfirmPassword ? <Visibility color="disabled" /> : <VisibilityOff color="disabled" />}
          onClick={hideShowConfirmPassword}
          // onChange={handleChange}
          onChange={handleCPassword}
          value={user?.confirmPassword}
        />
        {showErrorMessage ? <Typography sx={errorMessage}>Passwords did not match</Typography> : ' '}
      </Grid>
      <Grid item xs={12} pt={3}>
        <Box mb={2} mt={1}>
          <Grid container spacing={0}>
            <Grid item xs={0.8} md={0.6}>
              {passwordLength > 7 ? activeCheck : disabledCheck}
            </Grid>
            <Grid item xs={11.2} md={11.4}>
              <Typography sx={strengthMsgs}>{translate('EIGHT_CHARS')}</Typography>
            </Grid>
            <Grid item xs={0.8} md={0.6}>
              {isNumber ? activeCheck : disabledCheck}
            </Grid>
            <Grid item xs={11.2} md={11.4}>
              <Typography sx={strengthMsgs}>{translate('CONTAIN_NUMBER')}</Typography>
            </Grid>
            <Grid item xs={0.8} md={0.6}>
              {isSpecialChar ? activeCheck : disabledCheck}
            </Grid>
            <Grid item xs={11.2} md={11.4}>
              <Typography sx={strengthMsgs}>{translate('CONTAIN_SPECIAL_CHARACTER')}</Typography>
            </Grid>
            <Grid item xs={0.8} md={0.6}>
              {isLowercase ? activeCheck : disabledCheck}
            </Grid>
            <Grid item xs={11.2} md={11.4}>
              <Typography sx={strengthMsgs}>{translate('CONTAIN_LOWERCASE_LETTER')}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item pt={2} width="100%">
        <Recaptcha translate={translate} handleVerifyRecaptcha={handleVerifyRecaptcha} />
      </Grid>
      <Grid item xs={12} pt={3}>
        <PrimaryButton disabled={recaptchaStatusVerified} onClick={handleSignUp} variant="contained" fullWidth>
          {translate('SIGN_UP')}
        </PrimaryButton>
      </Grid>
    </Grid>
  );
};

export default Step2;

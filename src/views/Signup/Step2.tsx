import * as React from 'react';
import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';
// import '../../App.css';
import { PrimaryButton } from '../../components/Button/PrimaryButton';
import PrimaryInput from '../../components/Input/PrimaryInput';
import PhoneInput from '../../components/PhoneInput/PhoneInput';
import i18next from 'i18next';
import Image from 'next/image';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import styling from '../../components/stylesObjects/stylesObj';
import LANG_STRINGS from '../../enums/langStrings';

const Step2 = ({
  translate,
  signupType,
  handleChange,
  showPassword,
  hideShowPassword,
  showConfirmPassword,
  hideShowConfirmPassword,
  getRecaptchaToken,
  handleSignUp,
  user,
  emailValid,
  formik,
  passwordLength,
  isNumber,
  isUppercase,
  isSpecialChar,
  isLowercase,
  changeHandler,
  checkSpecialCharacterHandler,
  showErrorMessage,
  isValid,
  handleCPassword,
}: any) => {
  const { errorMessage, strengthMsgs } = styling;

  const { values, errors, touched, isValid: formikValid, handleBlur } = formik;
  let captchaRef: any = React.useRef<ReCAPTCHA>();
  const handleChangeRecaptcha = (token: string | null) => {
    getRecaptchaToken(token);
  };
  let activeCheck = <CheckOutlinedIcon sx={{ color: '#46BB59' }} fontSize="small" />;
  let disabledCheck = <CheckOutlinedIcon color="disabled" fontSize="small" />;
  const enabled =
    passwordLength > 7 &&
    isNumber &&
    isSpecialChar &&
    isLowercase &&
    user.confirmPassword.trim() === user.password.trim();

  return (
    <Grid columnSpacing={2} container>
      <Grid item sm={6} xs={12} pt={3}>
        <PrimaryInput
          label={translate(LANG_STRINGS.FIRST_NAME)}
          type={'text'}
          name="firstName"
          fullWidth
          placeholder={translate(LANG_STRINGS.FIRST_NAME)}
          onChange={formik.handleChange}
          onBlur={handleBlur}
          required={true}
          value={values?.firstName}
          error={touched.firstName && Boolean(errors.firstName)}
          helperText={touched.firstName && errors.firstName}
        />
      </Grid>
      <Grid item sm={6} xs={12} pt={3}>
        <PrimaryInput
          label={translate(LANG_STRINGS.LAST_NAME)}
          type={'text'}
          name="lastName"
          fullWidth
          placeholder={translate(LANG_STRINGS.LAST_NAME)}
          onChange={formik.handleChange}
          onBlur={handleBlur}
          required={true}
          value={values?.lastName}
          error={touched.lastName && Boolean(errors.lastName)}
          helperText={touched.lastName && errors.lastName}
        />
      </Grid>
      <Grid item xs={12} pt={3}>
        {signupType === 'phone' ? (
          <PrimaryInput
            label={translate(LANG_STRINGS.EMAIL)}
            type={'text'}
            name="email"
            fullWidth
            placeholder={translate(LANG_STRINGS.EMAIL_ADDRESS)}
            startAdornment={<Email color="disabled" />}
            onChange={formik.handleChange}
            onBlur={handleBlur}
            required={true}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            value={values?.email}
          />
        ) : (
          <PhoneInput
            label={translate(LANG_STRINGS.PHONE_NUMBER)}
            name="phoneNumber"
            fullWidth
            placeholder={translate(LANG_STRINGS.PHONE_NUMBER)}
            startAdornment={<Typography>{user?.dialCode}</Typography>}
            onChange={formik.handleChange}
            onBlur={handleBlur}
            required={true}
            value={values?.phoneNumber}
            error={touched.phoneNumber && Boolean(errors.phoneNumber)}
            helperText={touched.phoneNumber && errors.phoneNumber}
          />
        )}
      </Grid>
      <Grid item xs={12} pt={3}>
        <PrimaryInput
          label={translate(LANG_STRINGS.PASSWORD)}
          type={showPassword ? 'text' : 'password'}
          name="password"
          fullWidth
          placeholder={translate(LANG_STRINGS.ENTER_PASSWORD)}
          startAdornment={<Lock color="disabled" />}
          endAdornment={!!showPassword ? <Visibility color="disabled" /> : <VisibilityOff color="disabled" />}
          onClick={hideShowPassword}
          onChange={changeHandler}
          value={user?.password}
          error={touched.password ?? Boolean(errors.password)}
          helperText={touched.password ?? errors.password}
        />
      </Grid>
      <Grid item xs={12} pt={3}>
        <PrimaryInput
          label={translate(LANG_STRINGS.CONFORM_PASSWORD)}
          type={showConfirmPassword ? 'text' : 'password'}
          name="confirmPassword"
          fullWidth
          placeholder={translate('ENTER_PASS_AGAIN')}
          startAdornment={<Lock color="disabled" />}
          endAdornment={!!showConfirmPassword ? <Visibility color="disabled" /> : <VisibilityOff color="disabled" />}
          onClick={hideShowConfirmPassword}
          onChange={handleCPassword}
          value={user?.confirmPassword}
        />
      </Grid>
      <Grid item xs={12} pt={3}>
        <Box mb={2} mt={1}>
          <Grid container spacing={0}>
            <Grid item xs={0.8} md={0.6}>
              {passwordLength > 7 ? activeCheck : disabledCheck}
            </Grid>
            <Grid item xs={11.2} md={11.4}>
              <Typography sx={strengthMsgs}>{translate(LANG_STRINGS.EIGHT_CHARS)}</Typography>
            </Grid>
            <Grid item xs={0.8} md={0.6}>
              {isNumber ? activeCheck : disabledCheck}
            </Grid>
            <Grid item xs={11.2} md={11.4}>
              <Typography sx={strengthMsgs}>{translate(LANG_STRINGS.CONTAIN_NUMBER)}</Typography>
            </Grid>
            <Grid item xs={0.8} md={0.6}>
              {isSpecialChar ? activeCheck : disabledCheck}
            </Grid>
            <Grid item xs={11.2} md={11.4}>
              <Typography sx={strengthMsgs}>{translate(LANG_STRINGS.CONTAIN_SPECIAL_CHARACTER)}</Typography>
            </Grid>
            <Grid item xs={0.8} md={0.6}>
              {isLowercase ? activeCheck : disabledCheck}
            </Grid>
            <Grid item xs={11.2} md={11.4}>
              <Typography sx={strengthMsgs}>{translate(LANG_STRINGS.CONTAIN_LOWERCASE_LETTER)}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item pt={2} width="100%">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ReCAPTCHA
            size="normal"
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY + ''}
            ref={(e) => (captchaRef = e)}
            onChange={handleChangeRecaptcha}
            hl={i18next.language}
          />
        </div>
      </Grid>
      <Grid item xs={12} pt={3}>
        <PrimaryButton
          disabled={!(isValid && formikValid && Object.keys(touched).length > 0)}
          onClick={handleSignUp}
          variant="contained"
          fullWidth
        >
          {translate('SIGN_UP')}
        </PrimaryButton>
      </Grid>
    </Grid>
  );
};

export default Step2;

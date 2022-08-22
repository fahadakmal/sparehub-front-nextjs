import * as React from 'react';
import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';
// import '../../App.css';
import { PrimaryButton } from '../../components/Button/PrimaryButton';
import PrimaryInput from '../../components/Input/PrimaryInput';
import PhoneInput from '../../components/PhoneInput/PhoneInput';
import i18next from 'i18next';

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
  isValid,
}: any) => {
  let captchaRef: any = React.useRef<ReCAPTCHA>();
  const handleChangeRecaptcha = (token: string | null) => {
    getRecaptchaToken(token);
  };

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
          value={user.firstName}
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
          value={user.lastName}
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
            error={!emailValid}
            value={user.email}
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
            value={user.phoneNumber}
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
          onChange={handleChange}
          value={user.password}
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
          onChange={handleChange}
          value={user.confirmPassword}
        />
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
        <PrimaryButton disabled={!isValid} onClick={handleSignUp} variant="contained" fullWidth>
          {translate('SIGN_UP')}
        </PrimaryButton>
      </Grid>
    </Grid>
  );
};

export default Step2;

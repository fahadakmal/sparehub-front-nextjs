import React, { useState } from 'react';
import Link from 'next/link';
import { Grid, Typography, Tab, Checkbox, FormControlLabel, Box, Link as MuiLink, Tabs } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import ReCAPTCHA from 'react-google-recaptcha';
import { useTranslation } from 'react-i18next';
import { Email, Visibility, VisibilityOff, Lock } from '@mui/icons-material';
import AuthContainer from '../../components/AuthContainer/AuthContainer';
import { PrimaryButton } from '../../components/Button/PrimaryButton';
import PrimaryInput from '../../components/Input/PrimaryInput';
import PhoneInput from '../../components/PhoneInput/PhoneInput';
import CountryDropdown from '../../components/Select/CountryDropdown';
import { useAuth } from '../../auth/Auth';
// import '../../App.css';
import Recaptcha from '../../components/Recaptcha';
import { countries } from '../../components/Select/Countries';
import { useRouter } from 'next/router';

export default function Login({ translate }: any) {
  const router = useRouter();
  const [loginType, setLoginType] = React.useState('email');
  const [recaptchaStatusVerified, setRecaptchaStatusVerified] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    email: '',
    password: '',
    phoneNumber: '',
    country: 'SA',
    dialCode: '+966',
  });
  const auth: any = useAuth();

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const hideShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setLoginType(newValue);
  };

  const handleCountrySelect = (code: string) => {
    const dialCode: any = countries.find((country) => country.code === code)?.dial_code;
    setUser({ ...user, country: code, dialCode });
  };

  const handleValidation = () => {
    let isValid = false;
    const { email, password, phoneNumber } = user;
    if ((email && password) || (phoneNumber && password)) {
      isValid = true;
    }
    return isValid;
  };

  const handleVerifyRecaptcha = (token: any) => {
    const isValid = handleValidation();
    if (token && isValid) {
      setRecaptchaStatusVerified(true);
    }
  };

  const redirectDashboard = () => {
    router.push("/");
  };

  const handleLogin = async () => {
    if (loginType == 'email') {
      const isValid = handleValidation();
      if (!isValid) {
        return;
      }
      const { email, password } = user;
      try {
        await auth.signInWithEmail(email, password);
        redirectDashboard();
      } catch (err: any) {
        if (err._type === 'UserNotConfirmedException') {
          window.alert(err.message);
        } else {
          window.alert(err.message);
        }
      }
    } else {
      const isValid = handleValidation();
      if (!isValid) {
        return;
      }
      const { password } = user;
      const phoneWithDialCode = user.dialCode + user.phoneNumber.trim();
      try {
        await auth.signInWithPhone(phoneWithDialCode, password);
        redirectDashboard();
      } catch (err: any) {
        if (err._type === 'UserNotConfirmedException') {
          window.alert(err.message);
        } else {
          window.alert(err.message);
        }
      }
    }
  };

  return (
    <AuthContainer>
      <Grid xs={12} item textAlign={'center'}>
        <Typography component="h1" variant="h5">
          {translate('LOGIN')}
        </Typography>
        <Typography component={'p'}>{translate('LOGIN_BACK')}</Typography>
      </Grid>
      <Box pt={3} sx={{ width: '100%' }}>
        <TabContext value={loginType}>
          <Box sx={{ border: 1, borderColor: '#D9D9D9', borderRadius: '7px' }}>
            <Tabs sx={{ '& .MuiTabs-indicator': { display: 'none' } }} onChange={handleChangeTab}>
              <Tab
                sx={{
                  width: '50%',
                  color: loginType === 'phone' ? '#fff' : 'black',
                  backgroundColor: loginType === 'phone' ? '#E2282C' : 'default',
                  borderRadius: loginType === 'phone' ? '5px 5px 5px 5px' : 0,
                }}
                label={translate('PHONE_NUMBER')}
                value="phone"
              />
              <Tab
                sx={{
                  width: '50%',
                  color: loginType === 'email' ? '#fff' : 'black',
                  backgroundColor: loginType === 'email' ? '#E2282C' : 'default',
                  borderRadius: loginType === 'email' ? '5px 5px 5px 5px' : 0,
                }}
                label={translate('EMAIL')}
                value="email"
              />
            </Tabs>
          </Box>
          <TabPanel sx={{ padding: 0 }} value="email">
            <>
              <Grid sx={{ width: '100%' }} pt={3} item xs={12}>
                <PrimaryInput
                  label={translate('EMAIL')}
                  type={'text'}
                  name="email"
                  fullWidth
                  placeholder={translate('EMAIL_ADDRESS')}
                  startAdornment={<Email color="disabled" />}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item pt={3} xs={12}>
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
                />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: 1,
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox defaultChecked style={{ color: '#E2282C' }} />}
                    label={
                      <Typography component={'p'} color="#D9D9D9" variant="caption" display="block">
                        {translate('REMEMBER_ME')}
                      </Typography>
                    }
                  />
                  <Typography component={'p'} variant="caption" display="block">
                    <MuiLink
                      href="signup"
                      underline="hover"
                      color="black"
                      onClick={() => {
                        router.push("/signup");
                      }}
                    >
                      {translate('FORGOT_PASSWORD')}
                    </MuiLink>
                  </Typography>
                </Box>
              </Grid>
            </>
          </TabPanel>
          <TabPanel sx={{ padding: 0 }} value="phone">
            <Grid item xs={12} pt={3}>
              <CountryDropdown
                translate={translate}
                handleChange={handleCountrySelect}
                selected={user.country}
                name="country"
              />
            </Grid>
            <Grid item xs={12} pt={3}>
              <PhoneInput
                label={translate('PHONE_NUMBER')}
                type={'number'}
                name="phoneNumber"
                fullWidth
                placeholder={translate('PHONE_NUMBER')}
                startAdornment={<Typography>{user.dialCode}</Typography>}
                onChange={handleChange}
              />
            </Grid>
            <Grid item pt={3} xs={12}>
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
              />
            </Grid>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: 0,
              }}
            >
              <FormControlLabel
                control={<Checkbox defaultChecked style={{ color: '#E2282C' }} />}
                label={
                  <Typography component={'p'} color="#D9D9D9" variant="caption" display="block">
                    {translate('REMEMBER_ME')}
                  </Typography>
                }
              />
              <Typography component={'p'} variant="caption" display="block">
                <MuiLink
                  href="signup"
                  underline="hover"
                  color="black"
                  onClick={() => {
                    router.push("/signup");
                  }}
                >
                  {translate('FORGOT_PASSWORD')}
                </MuiLink>
              </Typography>
            </Box>
          </TabPanel>
        </TabContext>
      </Box>

      <Grid pt={3} item width={'100%'}>
        <Recaptcha translate={translate} handleVerifyRecaptcha={handleVerifyRecaptcha} />
      </Grid>

      <Grid item xs={12} sx={{ paddingTop: 2 }}>
        <PrimaryButton disabled={false} onClick={handleLogin} variant="contained" fullWidth>
          {loginType === 'email' ? translate('CONTINUE') : translate('LOGIN')}
        </PrimaryButton>
      </Grid>
      <Grid textAlign={'center'} item xs={12}>
        <Typography>
          {translate('DONT_HAVE_ACCOUNT')}{' '}
          <b>
            <Link href="signUp"  passHref>
            <MuiLink  underline="hover" color="#E2282C">
              {translate('REGISTER_NOW')}
            </MuiLink>
            </Link>
          
          </b>
        </Typography>
      </Grid>
    </AuthContainer>
  );
}

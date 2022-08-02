import * as React from 'react';
import { Box, Grid, Tab, Tabs, Typography } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import ReCAPTCHA from 'react-google-recaptcha';
import { useTranslation } from 'react-i18next';
import { Email, Visibility, VisibilityOff, Lock } from '@mui/icons-material';
import AuthContainer from './components/AuthContainer/AuthContainer';
import { PrimaryButton } from './components/Button/PrimaryButton';
import PrimaryInput from './components/Input/PrimaryInput';
import { translate } from './utils';
import CountryDropdown from './components/Select/CountryDropdown';
import { useAuth } from './auth/Auth';
import PhoneInput from './components/PhoneInput/PhoneInput';
import { useRouter } from 'next/router';
// import '../../App.css';

const Signup=()=> {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const router=useRouter();
  // const navigate = useNavigate();

  const [user, setUser] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
    country: 'SA',
    phoneNumber: '',
  });
  const [recaptchaStatusVerified, setRecaptchaStatusVerified] = React.useState(false);
  const [signupType, setSignupType] = React.useState('email');

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleCountrySelect = (code: string) => {
    setUser({ ...user, country: code });
  };
  const auth: any = useAuth();

  const hideShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const hideShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handleValidation = () => {
    let isValid = false;
    const { email, password, confirmPassword } = user;
    if (email && password && confirmPassword && password === confirmPassword) {
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
  const redirectLogin = () => {
    router.push('/congratulations');
  };

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setSignupType(newValue);
  };

  const handleSignUp = async () => {
    const { email, password, confirmPassword } = user;
    if (!(email && password && confirmPassword && password === confirmPassword)) {
      return;
    }
    try {
      const res = await auth.signUpWithEmail(user.email, user.email, user.password);
      if (res) {
        redirectLogin();
      }
    } catch (err) {
      if (err instanceof Error) {
        window.alert(err.message);
      }
    }
  };

  const { i18n } = useTranslation();
  return (
    <AuthContainer>
      <Grid xs={12} item textAlign={'center'}>
        <Typography component="h1" variant="h5">
          {translate('SIGN_UP')}
        </Typography>
        <Typography component={'p'}>{translate('JOIN_MSG')}</Typography>
      </Grid>

      <Box pt={3} sx={{ width: '100%' }}>
        <TabContext value={signupType}>
          <Box sx={{ border: 1, borderColor: '#D9D9D9', borderRadius: '7px' }}>
            <Tabs sx={{ '& .MuiTabs-indicator': { display: 'none' } }} onChange={handleChangeTab}>
              <Tab
                sx={[
                  {
                    width: '50%',
                    color: signupType === 'phone' ? '#fff' : 'black',
                    backgroundColor: signupType === 'phone' ? '#E2282C' : 'default',
                    borderRadius: signupType === 'phone' ? '5px 5px 5px 5px' : 0,
                  },
                  { '& 	.MuiTab-root': { textTransform: 'none' } },
                ]}
                label={translate('PHONE_NUMBER')}
                value="phone"
              />
              <Tab
                sx={{
                  width: '50%',
                  color: signupType === 'email' ? '#fff' : 'black',
                  backgroundColor: signupType === 'email' ? '#E2282C' : 'default',
                  borderRadius: signupType === 'email' ? '5px 5px 5px 5px' : 0,
                }}
                label={translate('EMAIL')}
                value="email"
              />
            </Tabs>
          </Box>
          <TabPanel sx={{ padding: 0 }} value="email">
            <>
              <Grid item xs={12} pt={3}>
                <CountryDropdown handleChange={handleCountrySelect} selected={user.country} name="country" />
              </Grid>
              <Grid item xs={12} pt={3}>
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
                  endAdornment={
                    showConfirmPassword ? <Visibility color="disabled" /> : <VisibilityOff color="disabled" />
                  }
                  onClick={hideShowConfirmPassword}
                  onChange={handleChange}
                />
              </Grid>
            </>
          </TabPanel>
          <TabPanel sx={{ padding: 0 }} value="phone">
            <Grid item xs={12} pt={3}>
              <CountryDropdown handleChange={handleCountrySelect} selected={user.country} name="country" />
            </Grid>
            <Grid item pt={3} pb={5} xs={12}>
              <PhoneInput
                label={translate('PHONE_NUMBER')}
                type={'number'}
                name="phoneNumber"
                fullWidth
                placeholder={translate('PHONE_NUMBER')}
                startAdornment={<Typography>{1234}</Typography>}
                onChange={handleChange}
              />
            </Grid>
          </TabPanel>
        </TabContext>
      </Box>

      <Grid item pt={2}>
        <ReCAPTCHA
          hl={i18n.language}
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY + ''}
          onChange={(value: any) => handleVerifyRecaptcha(value)}
        />
      </Grid>
      <Grid item xs={12} pt={3}>
        <PrimaryButton disabled={!recaptchaStatusVerified} onClick={handleSignUp} variant="contained" fullWidth>
          {translate('SIGN_UP')}
        </PrimaryButton>
      </Grid>
      <Grid textAlign={'center'} item xs={12} pt={1}>
        <Typography
          style={{ cursor: 'pointer' }}
          onClick={() => {
            // navigate('/');
          }}
        >
          {translate('ALREADY_ACCOUNT')} <b style={{ color: '#E2282C' }}>{translate('LOGIN')}</b>
        </Typography>
      </Grid>
    </AuthContainer>
  );
}
export default Signup

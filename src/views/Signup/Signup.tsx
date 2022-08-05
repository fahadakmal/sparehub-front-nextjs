import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TabContext, TabPanel } from '@mui/lab';
import { Box, Grid, Tab, Tabs, Typography, CircularProgress, LinearProgress } from '@mui/material';
import { useAuth } from '../../auth/Auth';
import AuthContainer from '../../components/AuthContainer/AuthContainer';
import Step1 from './Step1';
import Step2 from './Step2';
import { countries } from '../../components/Select/Countries';
import { useRouter } from 'next/router';
import { registrationRequest } from '../../redux/slices/authSlice';

const styles = {
  tab: {
    color: '#000',
    '&.Mui-selected': {
      color: '#fff',
      backgroundColor: '#E2282C',
      borderRadius: '5px 5px 5px 5px',
    },
  },
};

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  country: 'SA',
  phoneNumber: '',
  dialCode: '+966',
};
export default function Signup({ translate }: any) {
  const { tab } = styles;
  const dispatch = useDispatch();
  const auth: any = useAuth();
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const { isSuccess, errorMessage, isError, isPending } = useSelector((state: any) => state.authSlice);
  const [user, setUser] = React.useState(initialState);
  const [recaptchaStatusVerified, setRecaptchaStatusVerified] = React.useState(false);
  const [signupType, setSignupType] = React.useState('email');
  const [signUpRequest, setSignUpRequest] = React.useState(false);
  const [step, setStep] = React.useState(1);

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleCountrySelect = (code: string) => {
    const dialCode: any = countries.find((country) => country.code === code)?.dial_code;
    setUser({ ...user, country: code, dialCode });
  };

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

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setSignupType(newValue);
    setStep(1);
    clearUserState();
  };

  const handleSignUp = async () => {
    const { firstName, password, email, dialCode, phoneNumber, confirmPassword } = user;
    const phoneWithDialCode = dialCode + phoneNumber.trim();
    setSignUpRequest(true);
    if (signupType == 'email') {
      if (!(email && password && confirmPassword && password === confirmPassword)) {
        return;
      }
      try {
        const res = await auth.signUpWithEmail(email, email, password);
        if (res) {
          router.push({
            pathname: '/otpVerification',
            query: { phoneNumber: `${email}` },
          });
        }
      } catch (err) {
        if (err instanceof Error) {
          window.alert(err.message);
        }
      }
    } else {
      try {
        const res = await auth.signUpWithPhone(firstName, email, phoneWithDialCode, password);
        const data = { email: email, phoneNumber: phoneWithDialCode, password, awsUserName: res.userSub };
        dispatch(registrationRequest(data));
        if (res) {
          router.push({
            pathname: '/otpVerification',
            query: { phoneNumber: `${phoneWithDialCode}` },
          });
        }
      } catch (err) {
        if (err instanceof Error) {
          window.alert(err.message);
        }
      }
    }
    setSignUpRequest(false);
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const clearUserState = () => {
    setUser({ ...initialState });
  };

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
            <Tabs
              value={signupType}
              sx={{
                '& .MuiTabs-indicator': { display: 'none' },
              }}
              variant="fullWidth"
              onChange={handleChangeTab}
            >
              <Tab sx={tab} label={translate('PHONE_NUMBER')} value="phone" />
              <Tab sx={tab} label={translate('EMAIL')} value="email" />
            </Tabs>
          </Box>
          <TabPanel sx={{ padding: 0 }} value="email">
            <>
              {step === 1 && (
                <Step1
                  handleChange={handleChange}
                  user={user}
                  translate={translate}
                  handleCountrySelect={handleCountrySelect}
                  signupType={signupType}
                  handleNextStep={handleNextStep}
                />
              )}
              {step === 2 && (
                <Step2
                  handleChange={handleChange}
                  translate={translate}
                  signupType={signupType}
                  showPassword={showPassword}
                  hideShowPassword={hideShowPassword}
                  showConfirmPassword={showConfirmPassword}
                  hideShowConfirmPassword={hideShowConfirmPassword}
                  user={user}
                  handleVerifyRecaptcha={handleVerifyRecaptcha}
                  handleSignUp={handleSignUp}
                  recaptchaStatusVerified={recaptchaStatusVerified}
                />
              )}
            </>
          </TabPanel>
          <TabPanel sx={{ padding: 0 }} value="phone">
            {step === 1 && (
              <Step1
                handleChange={handleChange}
                user={user}
                translate={translate}
                handleCountrySelect={handleCountrySelect}
                signupType={signupType}
                handleNextStep={handleNextStep}
              />
            )}
            {step === 2 && (
              <Step2
                handleChange={handleChange}
                translate={translate}
                signupType={signupType}
                showPassword={showPassword}
                hideShowPassword={hideShowPassword}
                showConfirmPassword={showConfirmPassword}
                hideShowConfirmPassword={hideShowConfirmPassword}
                handleSignUp={handleSignUp}
                handleVerifyRecaptcha={handleVerifyRecaptcha}
                recaptchaStatusVerified={recaptchaStatusVerified}
              />
            )}
          </TabPanel>
        </TabContext>
      </Box>
      {(isPending || signUpRequest) && (
        <Grid justifyContent="center" alignItems="center" item xs={12}>
          <LinearProgress />
        </Grid>
      )}
      <br />
      <Grid textAlign={'center'} item xs={12} pt={1}>
        <Typography
          style={{ cursor: 'pointer' }}
          onClick={() => {
            router.push('/');
          }}
        >
          {translate('ALREADY_ACCOUNT')} <b style={{ color: '#E2282C' }}>{translate('LOGIN')}</b>
        </Typography>
      </Grid>
    </AuthContainer>
  );
}

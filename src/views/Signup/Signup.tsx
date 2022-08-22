import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { TabContext, TabPanel } from '@mui/lab';
import { Box, Grid, LinearProgress, Tab, Tabs, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../../auth/Auth';
import AuthContainer from '../../components/AuthContainer/AuthContainer';
import { countries } from '../../components/Select/Countries';
import ToastAlert from '../../components/Toast/ToastAlert';
import { registrationRequest } from '../../redux/slices/authSlice';
import { apiPost } from '../../services';
import { validateEmail } from '../../utils';
import Step1 from './Step1';
import Step2 from './Step2';

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
  const { isSuccess, errorMessage, isError, isPending } = useSelector((state: any) => state.authSlice);
  const dispatch = useDispatch();
  const auth: any = useAuth();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [user, setUser] = useState(initialState);
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const [signupType, setSignupType] = useState('email');
  const [signUpRequest, setSignUpRequest] = useState(false);
  const [step, setStep] = useState(1);
  const [toast, setToast] = useState({
    message: '',
    appearence: false,
    type: '',
  });

  const handleChange = (e: any) => {
    if (e.target.name === 'email') {
      setEmailValid(validateEmail(e.target.value));
    }
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

  const getRecaptchaToken = (token: any) => {
    setRecaptchaToken(token);
  };

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setSignupType(newValue);
    setStep(1);
    clearUserState();
  };

  const handleSignUp = async () => {
    const { firstName, password, email, dialCode, phoneNumber, confirmPassword } = user;
    if (!(email && password && confirmPassword && password === confirmPassword && phoneNumber)) {
      setToast({ ...toast, message: 'Please fill required fields', appearence: true, type: 'warning' });
      return;
    }
    if (recaptchaToken.length < 1) {
      setToast({ ...toast, message: 'Please fill Recaptcha', appearence: true, type: 'warning' });
      return;
    }
    const phoneWithDialCode = dialCode + phoneNumber.trim();

    try {
      const userFoundInLocalDb = await apiPost('/auth/preSignUp', { email, phoneNo: phoneWithDialCode }, '');
      if (userFoundInLocalDb) {
        setToast({
          ...toast,
          message: 'User with given email or phone already exist',
          appearence: true,
          type: 'error',
        });
        return;
      }
    } catch (error: any) {
      if (error.statusCode == 400) {
        setToast({
          ...toast,
          message: 'Please enter correct data',
          appearence: true,
          type: 'error',
        });
        return;
      }
    }

    setSignUpRequest(true);
    if (signupType == 'email') {
      if (!(email && password && confirmPassword && password === confirmPassword)) {
        setToast({ ...toast, message: 'Please fill required fields', appearence: true, type: 'warning' });
        return;
      }
      try {
        const res = await auth.signUpWithEmail(email, email, password);
        if (res) {
          const data = { email: email, phoneNo: phoneWithDialCode, password, awsUserName: res.userSub };
          dispatch(registrationRequest(data));
          router.push({
            pathname: '/otpVerification',
            query: { email: `${user.email}` },
          });
        }
      } catch (err) {
        if (err instanceof Error) {
          setToast({
            ...toast,
            message: err.message,
            appearence: true,
            type: 'error',
          });
        }
      }
    } else {
      try {
        const res = await auth.signUpWithPhone(firstName, email, phoneWithDialCode, password);
        const data = { email: email, phoneNo: phoneWithDialCode, password, awsUserName: res.userSub };
        dispatch(registrationRequest(data));
        if (res) {
          router.push({
            pathname: '/otpVerification',
            query: { phoneNumber: `${phoneWithDialCode}` },
          });
        }
      } catch (err) {
        if (err instanceof Error) {
          setToast({
            ...toast,
            message: err.message,
            appearence: true,
            type: 'error',
          });
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
    setEmailValid(false);
  };

  const handleBack = () => {
    // setUser({ ...initialState });
    setStep(step - 1);
  };

  const handleCloseToast = () => {
    setToast({ ...toast, appearence: false });
  };

  const isValid = handleValidation();

  return (
    <AuthContainer>
      <Grid position={'relative'} xs={12} item textAlign={'center'}>
        {step === 2 && (
          <Box
            padding={2}
            borderRadius={2}
            border="1px solid rgba(0, 0, 0, 0.1)"
            position={'absolute'}
            onClick={handleBack}
            left={0}
            top={0}
          >
            <ArrowBackIcon />
          </Box>
        )}
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
                  emailValid={emailValid}
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
                  getRecaptchaToken={getRecaptchaToken}
                  handleSignUp={handleSignUp}
                  emailValid={emailValid}
                  isValid={isValid}
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
                emailValid={emailValid}
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
                getRecaptchaToken={getRecaptchaToken}
                emailValid={emailValid}
                isValid={isValid}
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
        <ToastAlert
          appearence={toast.appearence}
          type={toast.type}
          message={toast.message}
          handleClose={handleCloseToast}
        />
      </Grid>
    </AuthContainer>
  );
}

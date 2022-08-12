import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TabContext, TabPanel } from '@mui/lab';
import { Box, Grid, Tab, Tabs, Typography, CircularProgress, LinearProgress } from '@mui/material';
import Image from 'next/image';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAuth } from '../../auth/Auth';
import AuthContainer from '../../components/AuthContainer/AuthContainer';
import Step1 from './Step1';
import Step2 from './Step2';
import { countries } from '../../components/Select/Countries';
import { useRouter } from 'next/router';
import { BackArrow } from '../../../public/icons';
import { validateEmail } from '../../utils';
import { registrationRequest } from '../../redux/slices/authSlice';
import { apiPost } from '../../services';

const styles = {
  tab: {
    color: '#000',
    '&.Mui-selected': {
      color: '#fff',
      backgroundColor: '#E2282C',
      borderRadius: '5px 5px 5px 5px',
    },
  },
  successMessage: {
    color: 'green',
    fontFamily: 'Mulish-Light',
    fontSize: '14px',
    fontWeight: '600',
  },
  errorInputMessage: {
    color: '#E2282C',
    fontFamily: 'Mulish-Light',
    fontSize: '14px',
    fontWeight: '600',
  },
  strengthMsgs: {
    fontFamily: 'Mulish-Medium',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '28px',
    letterSpacing: '0.24px',
    color: '#000000',
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
  const [emailValid, setEmailValid] = React.useState(false);

  const { isSuccess, errorMessage, isError, isPending } = useSelector((state: any) => state.authSlice);
  const [user, setUser] = React.useState(initialState);
  const [recaptchaStatusVerified, setRecaptchaStatusVerified] = React.useState(false);
  const [signupType, setSignupType] = React.useState('email');
  const [signUpRequest, setSignUpRequest] = React.useState(false);
  const [step, setStep] = React.useState(1);
  const [isValid, setIsValid] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const { successMessage } = styles;
  const { errorInputMessage } = styles;
  const { strengthMsgs } = styles;

  const handleChange = (e: any) => {
    if (e.target.name === 'email') {
      setEmailValid(validateEmail(e.target.value));
    }
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const emailChangeHandler = (event: any) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const value = event.target.value.trim();
    setUser(value);

    if (emailRegex.test(user.email)) {
      setIsValid(true);
      setMessage('Your email looks good!');
    } else {
      setIsValid(false);
      setMessage('Must include `@` and `.com`');
    }
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
    //TODO:Need to handle recaptcha token
    if (isValid) {
      setRecaptchaStatusVerified(true);
    } else {
      setRecaptchaStatusVerified(false);
    }
  };

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setSignupType(newValue);
    setStep(1);
    clearUserState();
  };

  const handleSignUp = async () => {
    const { firstName, password, email, dialCode, phoneNumber, confirmPassword } = user;
    if (!(email && password && confirmPassword && password === confirmPassword && phoneNumber)) {
      window.alert('Please enter complete information');
      return;
    }
    const phoneWithDialCode = dialCode + phoneNumber.trim();

    try {
      const userFoundInLocalDb = await apiPost('/auth/preSignUp', { email, phoneNo: phoneWithDialCode }, '');
      if (userFoundInLocalDb) {
        window.alert('User with given email or phone no already exist');
        return;
      }
    } catch (error) {
      if (error.statusCode == 400) {
        window.alert('Please enter correct data');
        return;
      }
    }

    setSignUpRequest(true);
    if (signupType == 'email') {
      if (!(email && password && confirmPassword && password === confirmPassword)) {
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
          window.alert(err.message);
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
  // validation
  const passwordLength = user.password.length;
  const [isNumber, setIsNumber] = React.useState(false);
  const [isUppercase, setIsUppercase] = React.useState(false);
  const [isSpecialChar, setIsSpecialChar] = React.useState(false);
  const [isLowercase, setIsLowercase] = React.useState(false);

  const changeHandler = (e: any) => {
    e.preventDefault();
    //  setUser({ ...user, [prop]: event.target.value });
    setUser({ ...user, [e.target.name]: e.target.value });
    checkSpecialCharacterHandler(e);
  };
  const checkSpecialCharacterHandler = (event: any) => {
    const mypass = event.target.value;
    const numbers = /[0-9]/g;
    const uppercaseLetters = /[A-Z]/g;
    const specialCharacter = /[!@#$%^&*?~`>/<']/g;
    const lowercase = /[a-z]/g;

    if (numbers.test(mypass)) {
      setIsNumber(true);
      console.log('abc');
    } else {
      setIsNumber(false);
    }
    if (uppercaseLetters.test(mypass)) {
      setIsUppercase(true);
    } else {
      setIsUppercase(false);
    }
    if (specialCharacter.test(mypass)) {
      setIsSpecialChar(true);
    } else {
      setIsSpecialChar(false);
    }
    if (lowercase.test(mypass)) {
      setIsLowercase(true);
    } else {
      setIsLowercase(false);
    }
  };
  // confirm password

  const [showErrorMessage, setShowErrorMessage] = React.useState(false);
  const [isCPasswordDirty, setIsCPasswordDirty] = React.useState(false);

  const handleCPassword = (event: any) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    setIsCPasswordDirty(true);
  };
  React.useEffect(() => {
    if (isCPasswordDirty) {
      if (user.password === user.confirmPassword) {
        setShowErrorMessage(false);
      } else {
        setShowErrorMessage(true);
      }
    }
  }, [user.confirmPassword]);

  const handleBack = () => {
    setStep(step - 1);
    // clearUserState();
  };

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
                  handleVerifyRecaptcha={handleVerifyRecaptcha}
                  handleSignUp={handleSignUp}
                  recaptchaStatusVerified={recaptchaStatusVerified}
                  passwordLength={passwordLength}
                  isNumber={isNumber}
                  isUppercase={isUppercase}
                  isSpecialChar={isSpecialChar}
                  isLowercase={isLowercase}
                  changeHandler={changeHandler}
                  checkSpecialCharacterHandler={checkSpecialCharacterHandler}
                  showErrorMessage={showErrorMessage}
                  handleCPassword={handleCPassword}
                  emailChangeHandler={emailChangeHandler}
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
                handleVerifyRecaptcha={handleVerifyRecaptcha}
                recaptchaStatusVerified={recaptchaStatusVerified}
                passwordLength={passwordLength}
                isNumber={isNumber}
                isUppercase={isUppercase}
                isSpecialChar={isSpecialChar}
                isLowercase={isLowercase}
                changeHandler={changeHandler}
                checkSpecialCharacterHandler={checkSpecialCharacterHandler}
                showErrorMessage={showErrorMessage}
                handleCPassword={handleCPassword}
                user={user}
                emailChangeHandler={emailChangeHandler}
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

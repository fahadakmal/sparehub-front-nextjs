import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { TabContext, TabPanel } from '@mui/lab';
import {
  Box,
  Grid,
  LinearProgress,
  Tab,
  Tabs,
  Typography,
  Link as MuiLink,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import i18next, { t } from 'i18next';
import { useRouter } from 'next/router';
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
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Link from 'next/link';

const signupSchema = Yup.object().shape(
  {
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required(t('REQUIRED_FIELD')),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required(t('REQUIRED_FIELD')),
    email: Yup.string().email(t('INVALID_EMAIL')).required(t('REQUIRED_FIELD')),
    // .ensure()
    // .when('phoneNumber', {
    //   is: '',
    //   then: Yup.string().email(t('INVALID_EMAIL')).required(t('REQUIRED_FIELD')),
    // }),
    phoneNumber: Yup.string()
      .required(t('REQUIRED_FIELD'))
      .min(9, t('MIN_PHONE_INPUT_LENGTH'))
      .max(10, t('MAX_PHONE_INPUT_LENGTH')),
    // .ensure()
    // .when('email', {
    //   is: '',
    //   then: Yup.string()
    //     .required(t('REQUIRED_FIELD'))
    //     .min(9, t('MIN_PHONE_INPUT_LENGTH'))
    //     .max(10, t('MAX_PHONE_INPUT_LENGTH')),
    // }),
  },
  // [['email', 'phoneNumber']],
);

const styles = {
  tab: {
    color: '#000',
    textTransform: 'capitalize',
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
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: signupSchema,
    validateOnBlur: false,
    onSubmit: (values) => {
      handleSignUp();
    },
  });
  const { tab } = styles;
  const { isSuccess, errorMessage, isError, isPending } = useSelector((state: any) => state.authSlice);
  const dispatch = useDispatch();
  const auth: any = useAuth();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // const [emailValid, setEmailValid] = useState(false);
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

  const handleValidation = () => {
    let isValid = false;
    const { password, confirmPassword } = user;
    if (password && confirmPassword && password === confirmPassword) {
      isValid = true;
    }
    return isValid;
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

  const getRecaptchaToken = (token: any) => {
    setRecaptchaToken(token);
  };

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setSignupType(newValue);
    setStep(1);
    clearUserState();
  };

  const handleSignUp = async () => {
    const { firstName, email, phoneNumber } = formik.values;
    const { password, dialCode } = user;
    if (recaptchaToken.length < 1) {
      setToast({ ...toast, message: 'Please fill Recaptcha', appearence: true, type: 'warning' });
      return;
    }
    const phoneWithDialCode = dialCode + phoneNumber.toString().trim();

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
      try {
        const res = await auth.signUpWithEmail(email, email, password);
        if (res) {
          const data = { email: email, phoneNo: phoneWithDialCode, password, awsUserName: res.userSub };
          dispatch(registrationRequest(data));
          router.push({
            pathname: '/otpVerification',
            query: { email: `${email}` },
          });
        }
      } catch (err) {
        if (err instanceof Error) {
          setToast({
            ...toast,
            message: translate(err.name),
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
            message: translate(err.name),
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
    setUser({ ...initialState });
    setRecaptchaToken('');
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
            sx={{ cursor: 'pointer' }}
            padding={2}
            borderRadius={2}
            border="1px solid rgba(0, 0, 0, 0.1)"
            position={'absolute'}
            onClick={handleBack}
            left={!isMobileScreen && i18next.language !== 'ar' ? -90 : ''}
            top={0}
            right={
              !isMobileScreen && i18next.language === 'ar' ? -90 : isMobileScreen && i18next.language === 'ar' ? 0 : ''
            }
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
          {step === 1 && (
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
                <Tab sx={tab} label={translate('EMAIL_TAB')} value="email" />
              </Tabs>
            </Box>
          )}

          <form onSubmit={formik.handleSubmit}>
            <TabPanel sx={{ padding: 0 }} value="email">
              <>
                {step === 1 && (
                  <Step1
                    handleChange={formik.handleChange}
                    user={user}
                    translate={translate}
                    handleCountrySelect={handleCountrySelect}
                    signupType={signupType}
                    handleNextStep={handleNextStep}
                    formik={formik}
                  />
                )}
                {step === 2 && (
                  <Step2
                    handleChange={formik.handleChange}
                    translate={translate}
                    signupType={signupType}
                    showPassword={showPassword}
                    hideShowPassword={hideShowPassword}
                    showConfirmPassword={showConfirmPassword}
                    hideShowConfirmPassword={hideShowConfirmPassword}
                    user={user}
                    changeHandler={changeHandler}
                    getRecaptchaToken={getRecaptchaToken}
                    handleSignUp={handleSignUp}
                    passwordLength={passwordLength}
                    isNumber={isNumber}
                    isUppercase={isUppercase}
                    isSpecialChar={isSpecialChar}
                    isLowercase={isLowercase}
                    isValid={isValid}
                    checkSpecialCharacterHandler={checkSpecialCharacterHandler}
                    showErrorMessage={showErrorMessage}
                    handleCPassword={handleCPassword}
                    formik={formik}
                  />
                )}
              </>
            </TabPanel>
            <TabPanel sx={{ padding: 0 }} value="phone">
              {step === 1 && (
                <Step1
                  handleChange={formik.handleChange}
                  user={user}
                  translate={translate}
                  handleCountrySelect={handleCountrySelect}
                  signupType={signupType}
                  handleNextStep={handleNextStep}
                  formik={formik}
                />
              )}
              {step === 2 && (
                <Step2
                  handleChange={formik.handleChange}
                  translate={translate}
                  signupType={signupType}
                  showPassword={showPassword}
                  hideShowPassword={hideShowPassword}
                  showConfirmPassword={showConfirmPassword}
                  hideShowConfirmPassword={hideShowConfirmPassword}
                  handleSignUp={handleSignUp}
                  getRecaptchaToken={getRecaptchaToken}
                  formik={formik}
                  passwordLength={passwordLength}
                  isNumber={isNumber}
                  isUppercase={isUppercase}
                  isSpecialChar={isSpecialChar}
                  isValid={isValid}
                  isLowercase={isLowercase}
                  changeHandler={changeHandler}
                  checkSpecialCharacterHandler={checkSpecialCharacterHandler}
                  showErrorMessage={showErrorMessage}
                  handleCPassword={handleCPassword}
                  user={user}
                />
              )}
            </TabPanel>
          </form>
        </TabContext>
      </Box>
      {(isPending || signUpRequest) && (
        <Grid justifyContent="center" alignItems="center" item xs={12}>
          <LinearProgress />
        </Grid>
      )}
      <Grid textAlign={'center'} item xs={12} pt={1} sx={{ paddingTop: 2, paddingBottom: 2 }}>
        <Typography>
          {/* <Link style={{ textDecoration: 'none !important' }} href="/" passHref> */}
          <span>{translate('ALREADY_ACCOUNT')} </span>
          {/* </Link> */}
          <b>
            <Link href="/" passHref replace>
              <MuiLink underline="hover" color="#E2282C">
                {translate('LOGIN')}
              </MuiLink>
            </Link>
          </b>
        </Typography>

        {/*
        <Typography
          style={{ cursor: 'pointer' }}
          onClick={() => {
            router.push('/');
          }}
        >
          {translate('ALREADY_ACCOUNT')} <b style={{ color: '#E2282C' }}>{translate('LOGIN')}</b>
        </Typography> */}
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

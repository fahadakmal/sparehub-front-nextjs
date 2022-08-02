import * as React from 'react';
import { TabContext, TabPanel } from '@mui/lab';
import { Box, Grid, Tab, Tabs, Typography } from '@mui/material';
import { useAuth } from '../../auth/Auth';
import AuthContainer from '../../components/AuthContainer/AuthContainer';
import Step1 from './Step1';
import Step2 from './Step2';
import { countries } from '../../components/Select/Countries';
import { useRouter } from 'next/router';

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
  const auth: any = useAuth();
  const router=useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const [user, setUser] = React.useState(initialState);
  const [recaptchaStatusVerified, setRecaptchaStatusVerified] = React.useState(false);
  const [signupType, setSignupType] = React.useState('email');
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
  const redirectLogin = () => {
    router.push('/congratulations');
  };

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setSignupType(newValue);
    setStep(1);
    clearUserState();
  };

  const handleSignUp = async () => {
    const phoneWithDialCode = user.dialCode + user.phoneNumber.trim();
    if (signupType == 'email') {
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
    } else {
      try {
        console.log(user.phoneNumber, user.password);
        const res = await auth.signUpWithPhone(user.firstName, user.email, phoneWithDialCode, user.password);
        if (res) {
          redirectLogin();
        }
      } catch (err) {
        if (err instanceof Error) {
          window.alert(err.message);
        }
      }
      router.push({pathname:'/otpVerification',query: { phoneNumber: `${user.dialCode}${user.phoneNumber.trim()}` } });
    }
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
                recaptchaStatusVerified={true}
              />
            )}
          </TabPanel>
        </TabContext>
      </Box>
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

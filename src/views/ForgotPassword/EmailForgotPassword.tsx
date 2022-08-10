import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Box, Grid, Typography } from '@mui/material';
import AuthContainer from '../../components/AuthContainer/AuthContainer';
import { PrimaryButton } from '../../components/Button/PrimaryButton';
import PhoneInput from '../../components/PhoneInput/PhoneInput';
import { translate } from '../../utils';
import { backArrow } from '../../../public/icons';
import PrimaryInput from '../../components/Input/PrimaryInput';
import { Email } from '@mui/icons-material';
import { useAuth } from '../../auth/Auth';
import EmailStep1 from './EmailStep1';

const styling = {
  successMessage: {
    color: 'green',
    fontFamily: 'Mulish-Light',
    fontSize: '14px',
    fontWeight: '600',
  },
  errorMessage: {
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

const EmailForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [forgetPassType, setForgetPassType] = useState('email');
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');
  const [step, setStep] = useState(1);

  const router = useRouter();
  const auth: any = useAuth();

  const { successMessage } = styling;
  const { errorMessage } = styling;
  const { strengthMsgs } = styling;

  const handleNextStep = () => {
    setStep(step + 1);
  };

  // const forgotPasswordhandler = () => {
  //   router.push('/resetPassword')
  // };
  const emailChangeHandler = (event: any) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const value = event.target.value.trim();
    setEmail(value);

    if (emailRegex.test(email)) {
      setIsValid(true);
      setMessage('Your email looks good!');
    } else {
      setIsValid(false);
      setMessage('Must include `@` and `.com`');
    }
  };

  const handleForgotPassword = async () => {
    const userEmail = email;
    if (forgetPassType == 'email') {
      // const { email, password, confirmPassword } = user;
      if (!email) {
        return;
      }
      try {
        const res = await auth.forgotPassword(email);
        if (res) {
          router.push({
            pathname: '/resetPassword',
            query: { email: `${email}` },
          });
          console.log('abc');
        }
      } catch (error) {
        if (error instanceof Error) {
          window.alert(error.message);
        }
      }
    } else {
      console.log('abc');
    }
    // else {
    //   try {
    //     console.log(user.phoneNumber, user.password);
    //     const res = await auth.signUpWithPhone(user.firstName, user.email, phoneWithDialCode, user.password);
    //     if (res) {
    //       router.push({
    //         pathname: '/otpVerification',
    //         query: { phoneNumber: `${user.dialCode}${user.phoneNumber.trim()}` },
    //       });
    //     }
    //   } catch (err) {
    //     if (err instanceof Error) {
    //       window.alert(err.message);
    //     }
    //   }
    // }
  };

  return (
    <AuthContainer>
      <Link href="/login" passHref>
        <Box
          mt={3}
          sx={{
            width: '56px',
            height: '56px',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <a>
            <Image src={backArrow} height={24} width={24} alt="back" />
          </a>
        </Box>
      </Link>
      <Box mt={8}>
        <Grid xs={12} item textAlign={'center'}>
          <Typography
            mb={2}
            sx={{
              fontWeight: 700,
              fontSize: '24px',
              lineHeight: '31px',
            }}
          >
            {translate('FORGOT_PASSWORD')}
          </Typography>
          <Typography>{translate('FORGOT_PASSWORD_EMAIL_ENTER')}</Typography>
        </Grid>
        <Grid item pt={3} pb={5} xs={12}>
          <Grid item pt={3} pb={5} xs={12}>
            <PrimaryInput
              label={translate('EMAIL')}
              type={'text'}
              name="email"
              fullWidth
              value={email}
              placeholder={translate('EMAIL_ADDRESS')}
              startAdornment={<Email color="disabled" />}
              onChange={(event: any) => emailChangeHandler(event)}
              required={true}
            />
            {isValid == true ? (
              <Typography sx={successMessage}>{message}</Typography>
            ) : (
              <Typography sx={errorMessage}>{message}</Typography>
            )}
          </Grid>
          {/* {step === 1 && (
                <EmailStep1 />
              )} */}
        </Grid>
        <Grid item xs={12} sx={{ marginTop: 2 }}>
          <PrimaryButton onClick={handleForgotPassword} variant="contained" fullWidth sx={{ marginTop: '8rem' }}>
            {translate('CONTINUE')}
          </PrimaryButton>
        </Grid>
      </Box>
    </AuthContainer>
  );
};

export default EmailForgotPassword;

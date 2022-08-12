import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Box, Grid, Typography } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Email } from '@mui/icons-material';
import AuthContainer from '../../components/AuthContainer/AuthContainer';
import { PrimaryButton } from '../../components/Button/PrimaryButton';
import PhoneInput from '../../components/PhoneInput/PhoneInput';
import PrimaryInput from '../../components/Input/PrimaryInput';
import { useAuth } from '../../auth/Auth';
import styling from '../../stylesObjects/stylesObj';
import LANG_STRINGS from '../../enums/langStrings';

const EmailForgotPassword = ({ translate }: any) => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [forgetPassType, setForgetPassType] = useState('email');
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');

  const router = useRouter();
  const auth: any = useAuth();

  const { backButton } = styling;

  const phoneChangeHandler = (event: any) => {
    const value = event.target.value.replace(/\D/g, '');
    setPhoneNumber(value);
  };

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
  };

  const loginTP = router.query;
  const loginTP1 = router.query;
  console.log(loginTP.name, 'loginType');
  console.log(loginTP1, 'loginType1');

  return (
    <AuthContainer>
      <Link href="/login" passHref>
        <Box mt={3} sx={backButton}>
          <a>
            <ArrowBackOutlinedIcon fontSize="medium" />
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
            {translate(LANG_STRINGS.FORGOT_PASSWORD)}
          </Typography>
          <Typography>{translate(LANG_STRINGS.FORGOT_PASSWORD_EMAIL_ENTER)}</Typography>
        </Grid>
        <Grid item pt={3} pb={5} xs={12}>
          <Grid item pt={3} pb={5} xs={12}>
            {loginTP.name == 'email' && (
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
                helperText={isValid == true ? '' : translate('Must include "@" and ".com"')}
              />
            )}
            {loginTP.name == 'phone' && (
              <PhoneInput
                label={translate('PHONE_NUMBER')}
                type={'text'}
                name="phoneNumber"
                value={phoneNumber}
                fullWidth
                placeholder={translate('PHONE_NUMBER')}
                startAdornment={<Typography>{+92}</Typography>}
                onChange={phoneChangeHandler}
              />
            )}
          </Grid>
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

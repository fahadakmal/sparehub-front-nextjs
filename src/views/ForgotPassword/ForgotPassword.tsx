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
import styling from '../../components/stylesObjects/stylesObj';
import LANG_STRINGS from '../../enums/langStrings';
import CountryDropdown from '../../components/Select/CountryDropdown';
import { countries } from '../../components/Select/Countries';
import { validateEmail } from '../../utils';

const ForgotPassword = ({ translate }: any) => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [user, setUser] = useState({ country: 'SA', dialCode: '+966' });
  const [forgetPassType, setForgetPassType] = useState('email');
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');
  const [emailValid, setEmailValid] = useState(false);

  const router = useRouter();
  const auth: any = useAuth();

  const { backButton, typoForgotPass } = styling;

  const phoneChangeHandler = (event: any) => {
    const value = event.target.value.replace(/\D/g, '');
    setPhoneNumber(value);
  };
  const handleChange = (e: any) => {
    if (e.target.name === 'email') {
      setEmailValid(validateEmail(e.target.value));
    }
    setEmail(e.target.value);
  };

  const handleCountrySelect = (code: string) => {
    const dialCode: any = countries.find((country) => country.code === code)?.dial_code;
    setUser({ ...user, country: code, dialCode });
  };

  const loginTP = router.query;
  console.log(loginTP.name, 'login Type');

  const phoneWithDialCode = user.dialCode + phoneNumber.trim();
  const continueForm = async () => {
    if (loginTP.name == 'email') {
      if (!email) {
        return;
      }
      try {
        const res = await auth.forgotPassword(email);
        if (res) {
          router.push(
            {
              pathname: '/resetPassword',
              query: { email: email || phoneNumber, type: loginTP.name },
            },
            '/resetPassword',
          );
          console.log('abc');
        }
      } catch (error) {
        if (error instanceof Error) {
          window.alert(error.message);
        }
      }
    }
    if (loginTP.name == 'phone') {
      if (!phoneNumber) {
        return;
      }
      try {
        const res = await auth.forgotPassword(phoneWithDialCode);
        if (res) {
          console.log(phoneNumber, 'phoneNumber ', phoneWithDialCode, 'phone section');
          router.push(
            {
              pathname: '/resetPassword',
              query: { phone: phoneWithDialCode, type: loginTP.name },
            },
            '/resetPassword',
          );
          console.log('abc');
        }
      } catch (error) {
        if (error instanceof Error) {
          window.alert(error.message);
        }
      }
    }
  };

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
          <Typography mb={2} sx={typoForgotPass}>
            {translate(LANG_STRINGS.FORGOT_PASSWORD)}
          </Typography>
          <Typography>{translate(LANG_STRINGS.FORGOT_PASSWORD_EMAIL_ENTER)}</Typography>
        </Grid>
        <Grid item pt={3} pb={5} xs={12}>
          <Grid item pt={3} pb={5} xs={12}>
            {loginTP.name == 'email' && (
              <PrimaryInput
                label={translate(LANG_STRINGS.EMAIL_TAB)}
                type={'text'}
                name="email"
                fullWidth
                value={email}
                placeholder={translate(LANG_STRINGS.EMAIL_ADDRESS)}
                startAdornment={<Email color="disabled" />}
                onChange={handleChange}
                required={true}
                error={!emailValid}
              />
            )}
            {loginTP.name == 'phone' && (
              <>
                <Grid item xs={12} pt={3}>
                  <Box mb={3}>
                    <CountryDropdown
                      translate={translate}
                      handleChange={handleCountrySelect}
                      selected={user.country}
                      name="country"
                    />
                  </Box>
                  <PhoneInput
                    label={translate(LANG_STRINGS.PHONE_NUMBER)}
                    type={'text'}
                    name="phoneNumber"
                    value={phoneNumber}
                    fullWidth
                    placeholder={translate(LANG_STRINGS.PHONE_NUMBER)}
                    startAdornment={<Typography>{user.dialCode}</Typography>}
                    onChange={(event: any) => phoneChangeHandler(event)}
                    required={true}
                    maxLength={10}
                  />
                </Grid>
              </>
            )}
          </Grid>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <PrimaryButton onClick={continueForm} variant="contained" fullWidth sx={{ marginTop: '8rem' }}>
              {translate(LANG_STRINGS.CONTINUE)}
            </PrimaryButton>
          </Grid>
        </Grid>
      </Box>
    </AuthContainer>
  );
};

export default ForgotPassword;

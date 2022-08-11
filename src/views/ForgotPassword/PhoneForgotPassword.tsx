import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box, Grid, Typography } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import AuthContainer from '../../components/AuthContainer/AuthContainer';
import { PrimaryButton } from '../../components/Button/PrimaryButton';
import PhoneInput from '../../components/PhoneInput/PhoneInput';
import styling from '../../stylesObjects/stylesObj';

const PhoneForgotPassword = ({ translate }: any) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const router = useRouter();
  const forgotPasswordhandler = () => {
    router.push({ pathname: '/resetPassword', query: { phoneNumber: phoneNumber } });
  };
  const phoneChangeHandler = (event: any) => {
    const value = event.target.value.replace(/\D/g, '');
    setPhoneNumber(value);
  };
  const { backButton } = styling;

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
            {translate('FORGOT_PASSWORD')}
          </Typography>
          <Typography>{translate('FORGOT_PASSWORD_PHONE_ENTER')}</Typography>
        </Grid>
        <Grid item pt={3} pb={5} xs={12}>
          <Grid item pt={3} pb={5} xs={12}>
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
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: 2 }}>
          {/* <Link
            href={{
              pathname: "./CreatePassword",
              query: { name: "createpassword" },
            }}
          > */}
          <PrimaryButton onClick={forgotPasswordhandler} variant="contained" fullWidth sx={{ marginTop: '8rem' }}>
            {translate('CONTINUE')}
          </PrimaryButton>
          {/* </Link> */}
        </Grid>
      </Box>
    </AuthContainer>
  );
};

export default PhoneForgotPassword;

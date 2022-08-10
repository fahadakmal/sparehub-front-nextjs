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

const PhoneForgotPassword = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const router = useRouter();
  const forgotPasswordhandler = () => {
    router.push({ pathname: '/resetPassword', query: { phoneNumber: phoneNumber } });
  };
  const phoneChangeHandler = (event: any) => {
    const value = event.target.value.replace(/\D/g, '');
    setPhoneNumber(value);
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

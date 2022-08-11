import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import AuthContainer from '../../components/AuthContainer/AuthContainer';
import { useAuth } from '../../auth/Auth';
import Otp from '../../components/Otp';
import styling from '../../stylesObjects/stylesObj';

const OTPVerification = (props: any) => {
  const router = useRouter();
  const { phoneNumber }: any = router.query;

  const auth: any = useAuth();
  const [otp, setOtp] = React.useState('');

  const handleChange = (val: any) => {
    setOtp(val);
  };

  const handleSubmit = async () => {
    try {
      const res = await auth.otpConfirmation(phoneNumber, otp);
      if (res) {
        router.push('/congratulations');
      }
    } catch (err) {
      if (err instanceof Error) {
        window.alert(err.message);
      }
    }
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
      <Otp handleChange={handleChange} handleSubmit={handleSubmit} phoneNumber={phoneNumber} {...props} />
    </AuthContainer>
  );
};

export default OTPVerification;

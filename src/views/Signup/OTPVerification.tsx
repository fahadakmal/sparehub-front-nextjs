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
  const { phoneNumber, email, newPassword }: any = router.query;
  // const data = router.query;
  console.log(newPassword, 'abcd');

  const verificationType = phoneNumber ? phoneNumber : email;
  const identity = phoneNumber ? 'PHONE_NUMBER' : 'EMAIL';
  console.log(verificationType, 'verificationtype');

  const auth: any = useAuth();
  const [otp, setOtp] = React.useState('');

  const handleChange = (val: any) => {
    setOtp(val);
  };

  const handleSubmit = async () => {
    try {
      const res = await auth.otpConfirmation(verificationType, otp);
      // const res1 = await auth.confirmPassword(email, otp, newPassword);
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

  const resendOtp = async () => {
    try {
      const res = await auth.resendOtp(phoneNumber);
      if (res) {
        return;
      }
    } catch (err) {
      if (err instanceof Error) {
        window.alert(err.message);
      }
    }
  };
  const confirmPassword = async () => {
    try {
      console.log('confirm pass start');
      const res = await auth.confirmPassword(verificationType, otp, newPassword);
      console.log(res, 'confirm pass after');
      if (res) {
        router.push('/congratulations');
      }
    } catch (err) {
      if (err instanceof Error) {
        window.alert(err.message);
      }
    }
  };

  return (
    <AuthContainer>
      <Otp
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        phoneNumber={verificationType}
        // email={verificationType}
        {...props}
        identity={identity}
        resendOtp={resendOtp}
        confirmPassword={confirmPassword}
      />
    </AuthContainer>
  );
};

export default OTPVerification;

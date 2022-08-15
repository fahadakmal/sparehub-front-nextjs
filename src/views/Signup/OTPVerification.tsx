import React from 'react';
import AuthContainer from '../../components/AuthContainer/AuthContainer';
import Otp from '../../components/Otp';
import { useAuth } from '../../auth/Auth';
import { useRouter } from 'next/router';

const OTPVerification = (props: any) => {
  const router = useRouter();
  const { phoneNumber, email }: any = router.query;

  const verificationType = phoneNumber ? phoneNumber : email;
  const identity = phoneNumber ? 'PHONE_NUMBER' : 'EMAIL';

  const auth: any = useAuth();
  const [otp, setOtp] = React.useState('');

  const handleChange = (val: any) => {
    setOtp(val);
  };

  const handleSubmit = async () => {
    try {
      const res = await auth.otpConfirmation(verificationType, otp);
      if (res) {
        router.push('/congratulations');
      }
    } catch (err) {
      if (err instanceof Error) {
        window.alert(err.message);
      }
    }
  };

  const resendOtp = async () => {
    try {
      const res = await auth.resendOtp(verificationType);
      if (res) {
        return;
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
        {...props}
        identity={identity}
        resendOtp={resendOtp}
      />
    </AuthContainer>
  );
};

export default OTPVerification;

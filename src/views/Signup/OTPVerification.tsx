import React from 'react';
import AuthContainer from '../../components/AuthContainer/AuthContainer';
import Otp from '../../components/Otp';
import { useAuth } from '../../auth/Auth';
import { useRouter } from 'next/router';

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

  return (
    <AuthContainer>
      <Otp handleChange={handleChange} handleSubmit={handleSubmit} phoneNumber={phoneNumber} {...props} />
    </AuthContainer>
  );
};

export default OTPVerification;

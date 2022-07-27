import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AuthContainer from '../../components/AuthContainer/AuthContainer';
import Otp from '../../components/Otp';
import { useAuth } from '../../auth/Auth';

const OTPVerification = (props: any) => {
  const navigate = useNavigate();
  const { state }: any = useLocation();
  const { phoneNumber } = state;

  const auth: any = useAuth();
  const [otp, setOtp] = React.useState('');

  const handleChange = (val: any) => {
    setOtp(val);
  };

  const handleSubmit = async () => {
    try {
      const res = await auth.otpConfirmation(phoneNumber, otp);
      if (res) {
        navigate('/success');
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

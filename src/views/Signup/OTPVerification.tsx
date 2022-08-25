import React, { useState } from 'react';
import AuthContainer from '../../components/AuthContainer/AuthContainer';
import Otp from '../../components/Otp';
import { useAuth } from '../../auth/Auth';
import { useRouter } from 'next/router';
import ToastAlert from '../../components/Toast/ToastAlert';

const OTPVerification = (props: any) => {
  const router = useRouter();
  const { phoneNumber, email, newPassword }: any = router.query;
  const verificationType = phoneNumber ? phoneNumber : email;
  const identity = phoneNumber ? 'PHONE_NUMBER' : 'EMAIL';
  console.log(identity, 'verificationtype');
  const auth: any = useAuth();
  const [otp, setOtp] = useState('');
  const [toast, setToast] = useState({
    message: '',
    appearence: false,
    type: '',
  });

  const handleChange = (val: any) => {
    setOtp(val);
  };

  const handleSubmit = async () => {
    if (!newPassword) {
      try {
        const res = await auth.otpConfirmation(verificationType, otp);
        if (res) {
          router.push('/congratulations');
        }
      } catch (err) {
        if (err instanceof Error) {
          setToast({
            ...toast,
            message: err.message,
            appearence: true,
            type: 'error',
          });
        }
      }
    } else {
      try {
        const res = await auth.confirmPassword(email, otp, newPassword);
        if (res) {
          setToast({
            ...toast,
            message: '6 digit OTP has been sent',
            appearence: true,
            type: 'success',
          });
          router.push('/congratulations');
          return;
        }
      } catch (err) {
        if (err instanceof Error) {
          setToast({
            ...toast,
            message: err.message,
            appearence: true,
            type: 'error',
          });
        }
      }
    }
  };

  const resendOtp = async () => {
    try {
      const res = await auth.resendOtp(phoneNumber);
      if (res) {
        router.push('/congratulations');
      }
    } catch (err) {
      if (err instanceof Error) {
        setToast({
          ...toast,
          message: err.message,
          appearence: true,
          type: 'error',
        });
      }
    }
  };

  const handleCloseToast = () => {
    setToast({ ...toast, appearence: false });
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
      <ToastAlert
        appearence={toast.appearence}
        type={toast.type}
        message={toast.message}
        handleClose={handleCloseToast}
      />
    </AuthContainer>
  );
};

export default OTPVerification;

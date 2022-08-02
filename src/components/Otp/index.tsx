import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import OtpInput from 'react-otp-input';
import { PrimaryButton } from '../Button/PrimaryButton';
import { useRouter } from 'next/router';
// import '../../App.css';

const useStyles = {
  otpContainer: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
  otpInput: {
    height: 56,
    width: 68,
    borderRadius: 8,
    backgroundColor: '#F0F3FD',
    border: 'none',
    marginLeft: 8,
    marginRight: 8,
    '&:focus': {
      outline: 'none',
    },
  },
};

const Otp = ({ handleChange, handleSubmit, translate, phoneNumber }: any) => {
  const [receivedCode, setReceivedCode] = React.useState(true);
  const [otpFilled, setOtpFilled] = React.useState(true);
  const [otp, setOtp] = React.useState('');
  const [counter, setCounter] = useState(30);
  const { otpContainer, otpInput } = useStyles;
  const router=useRouter()
;
  const handleNavigate = () => {
    router.push('/createPassword');
  };

  const handleChangeInput = (val: any) => {
    setOtp(val);
    if (val.length > 3) {
      setOtpFilled(true);
      handleChange(val);
    } else {
      setOtpFilled(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter - 1);
    }, 1000);
    if (counter === 1) {
      setReceivedCode(false);
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [counter]);

  return (
    <>
      <Grid xs={12} item textAlign={'center'} pt={6}>
        <Grid pt={3}>
          <Typography fontSize={24} fontWeight={700} lineHeight={'31px'} color="#2E303D">
            {translate('OTP_VERIFICATION')}
          </Typography>
        </Grid>
        <Grid pt={1}>
          <Typography color={'#292D3260'} fontSize={16} align="center" letterSpacing={0.32}>
            {translate('OTP_VERIFICATION_MESSAGE', { phoneNumber: phoneNumber })}
          </Typography>
        </Grid>
      </Grid>
      <Grid style={otpContainer} item xs={12} pt={6}>
        <OtpInput
          placeholder="******"
          inputStyle={otpInput}
          className="testing"
          value={otp}
          onChange={handleChangeInput}
          numInputs={6}
          isInputNum
        />
      </Grid>
      <Grid textAlign={'center'} item xs={12} pt={6}>
        <Typography style={{ cursor: 'pointer' }}>
          {translate('DID_NOT_RECEIVE_A_CODE')}
          {'?  '}
          {receivedCode ? (
            <b style={{ color: '#E2282C', fontSize: '14px' }}>
              {counter}
              {translate('SECONDS')}
            </b>
          ) : (
            <>
              <b
                onClick={() => {
                  console.log('VERIFY_MOBILE_NUMBER');
                }}
                style={{ color: '#E2282C', fontSize: '14px' }}
              >
                {translate('VERIFY_MOBILE_NUMBER')}
              </b>{' '}
              <b
                onClick={() => {
                  console.log('RESEND_CODE');
                }}
                style={{ fontSize: '12px' }}
              >
                {translate('OR')}
              </b>{' '}
              <b
                onClick={() => {
                  console.log('RESEND_CODE');
                }}
                style={{ color: '#E2282C', fontSize: '14px' }}
              >
                {translate('RESEND_CODE')}
              </b>
            </>
          )}
        </Typography>
      </Grid>
      <Grid item xs={12} pt={20}>
        <PrimaryButton disabled={!otpFilled} onClick={handleSubmit} fullWidth>
          {translate('VERIFY')}
        </PrimaryButton>
      </Grid>
    </>
  );
};

export default Otp;

import React, { useState, useEffect } from 'react';
import { Grid, Typography, Box, useMediaQuery, useTheme } from '@mui/material';
import OtpInput from 'react-otp-input';
import { PrimaryButton } from '../Button/PrimaryButton';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { BackArrow } from '../../../public/icons';
import i18next from 'i18next';
import LANG_STRINGS from '../../enums/langStrings';

const useStyles = {
  otpContainer: {},
  otpInput: {
    width: 40,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#F0F3FD',
    border: 'none',
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 8,
    '&:focus': {
      outline: 'none',
    },
  },
};

const Otp = ({ handleChange, handleSubmit, translate, phoneNumber, identity, resendOtp }: any) => {
  const router = useRouter();
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [receivedCode, setReceivedCode] = React.useState(true);
  const [otpFilled, setOtpFilled] = React.useState(false);
  const [otp, setOtp] = React.useState('');
  const [counter, setCounter] = useState(30);
  const { otpContainer, otpInput } = useStyles;

  const handleChangeInput = (val: any) => {
    setOtp(val);
    if (val.length > 5) {
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

  const handleBack = () => {
    router.back();
  };

  const handleResend = () => {
    setCounter(30);
    setReceivedCode(!receivedCode);
    resendOtp();
  };

  return (
    <>
      <Grid sx={{ position: 'relative' }} xs={12} item textAlign={'center'} pt={6}>
        <Box
          padding={'16px'}
          borderRadius={2}
          border="1px solid rgba(0, 0, 0, 0.1)"
          position={'absolute'}
          onClick={handleBack}
          left={!isMobileScreen && i18next.language !== 'ar' ? -90 : ''}
          top={0}
          right={
            !isMobileScreen && i18next.language === 'ar' ? -90 : isMobileScreen && i18next.language === 'ar' ? 0 : ''
          }
          sx={{ cursor: 'pointer' }}
        >
          <Image src={BackArrow} />
        </Box>
        <Grid pt={3}>
          <Typography fontSize={24} fontWeight={700} lineHeight={'31px'} color="#2E303D">
            {identity == 'EMAIL'
              ? translate(LANG_STRINGS.EMAIL_VERIFICATION)
              : translate(LANG_STRINGS.PHONE_VERIFICATION)}
          </Typography>
        </Grid>
        <Grid pt={1}>
          <Typography
            color={'#292D3260'}
            fontSize={16}
            align="center"
            letterSpacing={0.32}
            dangerouslySetInnerHTML={{ __html: translate('OTP_VERIFICATION_MESSAGE', { phoneNumber: phoneNumber }) }}
          ></Typography>
        </Grid>
      </Grid>
      <Grid style={otpContainer} item xs={12} pt={6}>
        <OtpInput
          placeholder="******"
          inputStyle={otpInput}
          containerStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          value={otp}
          onChange={handleChangeInput}
          numInputs={6}
          isInputNum
        />
      </Grid>
      <Grid textAlign={'center'} item xs={12} pt={6}>
        <Typography>
          {translate('DID_NOT_RECEIVE_A_CODE')}
          {'?  '}
          {receivedCode ? (
            <b style={{ color: '#E2282C', fontSize: '14px' }}>
              {counter}
              {translate('SECONDS')}
            </b>
          ) : (
            <>
              <Typography component={'span'}>
                {translate('VERIFY_MOBILE_NUMBER', { identity: translate(identity) })}
              </Typography>
              <b style={{ fontSize: '12px' }}> &nbsp; {translate('OR')}</b> &nbsp;
              <b onClick={handleResend} style={{ color: '#E2282C', fontSize: '14px', cursor: 'pointer' }}>
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

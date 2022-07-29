import React, { useRef, useState } from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';
import { RecaptchaLogo } from '../../../public/icons';
import Image from 'next/image';
const Recaptcha = ({ handleVerifyRecaptcha, translate }: any) => {
  const [checked, setChecked] = useState(false);
  const captchaRef: any = useRef<ReCAPTCHA>();
  const handleSubmit = async (e: any) => {
    setChecked(e.target.checked);
    if (e.target.checked) {
      const captchaToken = await captchaRef.current.executeAsync();
      handleVerifyRecaptcha(captchaToken);
      captchaRef.current.reset();
    }
  };

  return (
    <div>
      <ReCAPTCHA
        size="invisible"
        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY + ''}
        ref={captchaRef}
        style={{ display: 'none' }}
      />
      <Box
        paddingX={2}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        border={'1px solid rgba(41, 45, 50, 0.12)'}
        borderRadius={2}
        height={82}
        bgcolor={'#F9F9F9'}
      >
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={checked} color="default" onChange={handleSubmit} />}
            label={translate('REBOOT_MESSAGE')}
          />
        </FormGroup>
        <Box height={62} width={62}>
          <Image height={'100%'} src={RecaptchaLogo} />
        </Box>
      </Box>
    </div>
  );
};

export default Recaptcha;

import i18next from 'i18next';
import { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
const Recaptcha = ({ getRecaptchaToken, translate }: any) => {
  let captchaRef: any = useRef<ReCAPTCHA>();

  const handleChange = (token: string | null) => {
    getRecaptchaToken(token);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <ReCAPTCHA
        size="normal"
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY + ''}
        ref={(e) => (captchaRef = e)}
        onChange={handleChange}
        hl={i18next.language}
      />
    </div>
  );
};

export default Recaptcha;

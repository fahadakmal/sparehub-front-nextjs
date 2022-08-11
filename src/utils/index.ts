import { useTranslation } from 'react-i18next';
const translate = (key: string) => {
  const { t } = useTranslation();
  return t(key);
};

export { translate };

export function validateEmail(email: any) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
}

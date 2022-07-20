import { useTranslation } from 'react-i18next';
const translate = (key: string) => {
  const { t } = useTranslation();
  return t(key);
};

export { translate };
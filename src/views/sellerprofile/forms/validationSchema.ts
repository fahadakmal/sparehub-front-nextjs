import * as Yup from 'yup';
import { t } from 'i18next';

export const sellerOnboardingSchema = Yup.object().shape({
  companyName: Yup.string().required(t('REQUIRED_FIELD')),
  companyNameAr: Yup.string().required(t('REQUIRED_FIELD')),
  displayName: Yup.string().required(t('REQUIRED_FIELD')),
  displayNameAr: Yup.string().required(t('REQUIRED_FIELD')),
  registrationNo: Yup.string().required(t('REQUIRED_FIELD')),
  email: Yup.string().required(t('REQUIRED_FIELD')),
  website: Yup.string().required(t('REQUIRED_FIELD')),
  countryId: Yup.string().required(t('REQUIRED_FIELD')),
  stateId: Yup.string().required(t('REQUIRED_FIELD')),
  cityId: Yup.string().required(t('REQUIRED_FIELD')),
  address1: Yup.string().required(t('REQUIRED_FIELD')),
});

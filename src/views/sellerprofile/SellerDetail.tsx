//IMPORTS
import { Grid } from '@mui/material';
import SellerHeading from '../../components/SellerHeading';
import Steper from '../../components/Stepper';
// import 'react-image-picker-editor/dist/index.css';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import SelectField from '../../components/SelectField';
import NextBtn from './NextBtn';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Typography from '@mui/material';
import DropdownSelect from '../../components/items/DropdownSelect';
import { useSelector, useDispatch } from 'react-redux';
import { getcountryFetch } from '../../redux/slices/sellerCountrySlice';
// rtl code
import { useMediaQuery, useTheme } from '@mui/material';
import SellerScreenLayout from '../../components/SellerLayout/SellerScreensLayout';
import PrimaryInput from '../../components/Input/PrimaryInput';
import LANG_STRINGS from '../../enums/langStrings';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Email } from '@mui/icons-material';
//STYLE
const useStyles = {
  leftContainer: {
    display: 'flex',
  },

  footer: {
    height: '10vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
};

//COMPONENT
const SellerDetail = ({ translate }: any) => {
  const [country, setCountry] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [file, setFile] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [mobilNumber, setMobileNumber] = useState<string>('');
  const [myboolean, setmyBoolean] = useState<Boolean>(false);

  const [message, setMessage] = useState(''); // This will be used to show a message if the submission is successful
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      message: '',
    },
    onSubmit: () => {
      setMessage('Form submitted');
      setSubmitted(true);
    },
    validationSchema: yup.object({
      name: yup.string().trim().required('Name is required'),
      email: yup.string().email('Must be a valid email').required('Email is required'),
      message: yup.string().trim().required('Message is required'),
    }),
  });

  const dispatch = useDispatch();
  // const {state}=useSelector((state)=>state)
  console.log(country, 'aa');
  const [count, setCount] = useState(0);
  const config2: any = {
    borderRadius: '50%',
    language: 'en',
    width: '100px',
    height: '100px',
    objectFit: 'contain',
    compressInitial: null,
  };
  const data1 = {};
  //   const initialImage: string = '/assets/images/8ptAya.webp';
  const initialImage = '';

  // api work
  const sellerCountry = useSelector((state: any) => state.sellerCountry.sellercountry);
  const sellerstate = useSelector((state: any) => state.sellerstate.sellerstate);
  console.log(sellerstate, 'sellerstate');
  console.log(sellerCountry, 'sellercountry');
  useEffect(() => {
    dispatch(getcountryFetch('h'));
  }, []);

  const router = useRouter();
  const Validate = (e: any) => {
    e.preventDefault();
    router.push('../UploadDocument');
  };

  const backNavigate = () => {
    // router.push('/SellerProfile');
  };
  let list;
  if (typeof window !== 'undefined') {
    list = localStorage.getItem(
      'CognitoIdentityServiceProvider.1u61rreo1n3kdrp10euthkkvcr.3031d387-1ba5-4e8d-aa6d-067a1c0034ae.accessToken',
    );
    console.log(list, 'lists');
  }

  const params = ``;
  const handleSubmit = () => {
    // dispatch(SellerDraftsAction("hi"))
  };

  const [seller, setSeller] = useState({
    businessName: '',
    businessNameArabic: '',
    shopName: '',
    shopNameArabic: '',
    regNumber: '',
    email: '',
    url: '',
    country: 'SA',
    dialCode: '+966',
  });
  console.log('hii', seller);

  const handleChange = (e: any) => {
    setSeller({ ...seller, [e.target.name]: e.target.value });
  };

  return (
    <SellerScreenLayout>
      <Grid className="marginlftRight">
        <Grid className="shadow">
          <SellerHeading
            mydata={() => handleSubmit()}
            headings={translate(LANG_STRINGS.SELLER_HEADINGS)}
            draftBtn={translate(LANG_STRINGS.SAVE_AS_DRAFT)}
          />
          <Grid style={{ marginTop: '20px', marginBottom: '7px', marginLeft: '20px', marginRight: '20px' }}>
            <Grid sx={{ marginTop: '30px' }}>
              <Steper
                count={count}
                sellerAccount={translate(LANG_STRINGS.SELLER_ACCOUNT)}
                businessDocument={translate(LANG_STRINGS.BUSINESS_INFORMATION)}
                bankAccount={translate(LANG_STRINGS.BANK_ACCOUNT)}
                warehouseAddress={translate(LANG_STRINGS.WAREHOUSE_ADDRESS)}
                returnAddress={translate(LANG_STRINGS.RETURN_ADDRESS)}
              />
            </Grid>
            <Grid container sx={{ marginTop: '31px' }}>
              {/* <Grid item xs={9}> */}
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <PrimaryInput
                    label={translate(LANG_STRINGS.BUSINESS_NAME)}
                    type={'text'}
                    name="businessName"
                    fullWidth
                    placeholder={translate(LANG_STRINGS.BUSINESS_NAME_PLACEHOLDER)}
                    // startAdornment={<Email color="disabled" />}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <PrimaryInput
                    label={translate(LANG_STRINGS.BUSINESS_NAME_AR)}
                    type={'text'}
                    name="businessNameArabic"
                    fullWidth
                    placeholder={translate(LANG_STRINGS.BUSINESS_NAME_AR_PLACEHOLDER)}
                    // startAdornment={<Email color="disabled" />}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={4} sx={{ marginTop: '1px' }}>
                <Grid item xs={6}>
                  <PrimaryInput
                    label={translate(LANG_STRINGS.SHOP_NAME)}
                    type={'text'}
                    name="shopName"
                    fullWidth
                    placeholder={translate(LANG_STRINGS.SHOP_NAME_PLACEHOLDER)}
                    // startAdornment={<Email color="disabled" />}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <PrimaryInput
                    label={translate(LANG_STRINGS.SHOP_NAME_AR)}
                    type={'text'}
                    name="shopNameArabic"
                    fullWidth
                    placeholder={translate(LANG_STRINGS.SHOP_NAME_AR_PLACEHOLDER)}
                    // startAdornment={<Email color="disabled" />}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>

              <Grid container sx={{ marginTop: '1px' }} spacing={4}>
                <Grid item xs={6}>
                  <PrimaryInput
                    label={translate(LANG_STRINGS.REG_NUMBER)}
                    type={'text'}
                    name="regNumber"
                    fullWidth
                    placeholder={translate(LANG_STRINGS.ENTER_REG_NUMBER)}
                    // startAdornment={<Email color="disabled" />}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <DropdownSelect
                    setValue={setMobileNumber}
                    value={mobilNumber}
                    label={translate(LANG_STRINGS.PHONE_NUMBER_LBL)}
                    required={translate(LANG_STRINGS.ENTER_SELLER_NUMBER)}
                  />
                </Grid>
              </Grid>
              <Grid container sx={{ marginTop: '1px' }} spacing={4}>
                <Grid item xs={6}>
                  <PrimaryInput
                    label={translate(LANG_STRINGS.BUSINESS_EMAIL)}
                    type={'text'}
                    name="email"
                    fullWidth
                    placeholder={translate(LANG_STRINGS.BUSINESS_EMAIL_PLACEHOLDER)}
                    startAdornment={<Email color="disabled" />}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <PrimaryInput
                    label={translate(LANG_STRINGS.BUSINESS_URL)}
                    type={'text'}
                    name="url"
                    fullWidth
                    placeholder={translate(LANG_STRINGS.SELLER_BUSINESS_URL)}
                    // startAdornment={<Email color="disabled" />}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Grid container sx={{ marginTop: '1px' }} spacing={3}>
                <Grid item xs={4}>
                  <SelectField
                    setAge={setCountry}
                    value={country}
                    mydata={sellerCountry}
                    placeholder={translate(LANG_STRINGS.SELLER_COUNTRY)}
                    label={translate(LANG_STRINGS.COUNTRY)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <SelectField
                    placeholder={translate(LANG_STRINGS.SELLER_STATE)}
                    label={translate(LANG_STRINGS.STATE)}
                    setAge={setState}
                    value={state}
                    mydata={sellerstate}
                  />
                </Grid>
                <Grid item xs={4}>
                  <SelectField
                    placeholder={translate(LANG_STRINGS.SELLER_CITY)}
                    label={translate(LANG_STRINGS.CITY)}
                    setAge={setCity}
                    value={city}
                  />
                </Grid>
              </Grid>
              <Grid container sx={{ marginTop: '25px' }}>
                <Grid item xs={12}>
                  <PrimaryInput
                    label={translate(LANG_STRINGS.SELLER_ADDRESS)}
                    type={'text'}
                    name="url"
                    fullWidth
                    placeholder={translate(LANG_STRINGS.ENTER_BUSINESS_ADDRESS)}
                    // startAdornment={<Email color="disabled" />}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid>
              <NextBtn
                Validate={Validate}
                backNavigate={backNavigate}
                nextBtn={translate(LANG_STRINGS.NEXT_BTN)}
                backBtn={translate(LANG_STRINGS.BACK_BTN)}
                mand_fields={translate(LANG_STRINGS.MANDATORY_FIELDS)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </SellerScreenLayout>
  );
};
export default SellerDetail;

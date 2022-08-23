//IMPORTS
import { Grid } from '@mui/material';
import SellerHeading from '../../components/SellerHeading';
import Steper from '../../components/Stepper';
import { useEffect, useState } from 'react';
import NextBtn from './NextBtn';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
// rtl code
import SellerScreenLayout from '../../components/SellerLayout/SellerScreensLayout';
import LANG_STRINGS from '../../enums/langStrings';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { SellerDetails } from './forms/sellerDetails';
import { UploadFiles } from '../uploadDocument';
import { BankDetail } from '../bankDetail';
import { WarehouseAddress } from '../warehousePage';
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
  const [currentStep, setCurrentStep] = useState(0);

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
  // const sellerCountry = useSelector((state: any) => state.sellerCountry.sellercountry);
  // const sellerstate = useSelector((state: any) => state.sellerstate.sellerstate);
 
  // useEffect(() => {
  //   dispatch(getcountryFetch('h'));
  // }, []);

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
                steps={[
                  translate(LANG_STRINGS.SELLER_ACCOUNT),
                  translate(LANG_STRINGS.BUSINESS_INFORMATION),
                  translate(LANG_STRINGS.BANK_ACCOUNT),
                  translate(LANG_STRINGS.WAREHOUSE_ADDRESS),
                ]}
                currentStep={currentStep}
              />
            </Grid>
            {currentStep == 0 && <SellerDetails translate={translate} />}
            {currentStep == 1 && <UploadFiles translate={translate} />}
            {currentStep == 2 && <BankDetail translate={translate} />}
            {currentStep == 3 && <WarehouseAddress translate={translate} />}
            <Grid>
              <NextBtn
                translate={translate}
                handleNext={() => setCurrentStep(currentStep + 1)}
                handleBack={() => setCurrentStep(currentStep - 1)}
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

import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Steper from '../../components/Stepper';
import SellerHeading from '../../components/SellerHeading';
import { useRouter } from 'next/router';
import NextBtn from '../sellerprofile/NextBtn';
import DropdownSelect from '../../components/items/DropdownSelect';
import PrimaryInput from '../../components/Input/PrimaryInput';
import LANG_STRINGS from '../../enums/langStrings';
import SellerScreenLayout from '../../components/SellerLayout/SellerScreensLayout';
import SelectField from '../../components/SelectField';

const BankDetail = ({ translate }: any) => {
  const [count, setCount] = useState(2);
  const [age, setAge] = useState('');
  const [bank, setBank] = useState<string>('');

  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [shopName, setShopName] = useState<string>('');
  const [mobilNumber, setMobileNumber] = useState<string>('');
  console.log(mobilNumber, 'aaa');
  const router = useRouter();
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  const Validate = (e: any) => {
    e.preventDefault();
    router.push('../SellerWarehouseAddr');
  };
  const mydisplay = { display: 'none' };
  const margins = { marginLeft: '120px' };

  const handleSubmit = () => {};

  const backNavigate = (e: any) => {
    e.preventDefault();
    router.push('../UploadDocument');
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
          <Grid sx={{ marginTop: '20px', marginBottom: '7px', padding: '20px' }}>
            <Steper
              count={count}
              sellerAccount={translate(LANG_STRINGS.SELLER_ACCOUNT)}
              businessDocument={translate(LANG_STRINGS.BUSINESS_INFORMATION)}
              bankAccount={translate(LANG_STRINGS.BANK_ACCOUNT)}
              warehouseAddress={translate(LANG_STRINGS.WAREHOUSE_ADDRESS)}
              returnAddress={translate(LANG_STRINGS.RETURN_ADDRESS)}
            />
            <Grid sx={{ fontWeight: 'bolder', marginTop: '20px' }}>{translate(LANG_STRINGS.BANK_ACC_DETAIL_MSG)}</Grid>
            <Grid container sx={{ marginTop: '1px' }} spacing={4}>
              <Grid item xs={6}>
                <SelectField
                  label={translate(LANG_STRINGS.BANK_NAME_LABEL)}
                  placeholder={translate(LANG_STRINGS.BANK_NAME_PLACEHOLDER)}
                  setAge={setBank}
                  value={bank}
                />
              </Grid>
              <Grid item xs={6}>
                <PrimaryInput
                  label={translate(LANG_STRINGS.ACC_HOLDER_NAME_LABEL)}
                  type={'text'}
                  name="shopNameArabic"
                  fullWidth
                  placeholder={translate(LANG_STRINGS.ACC_HOLDER_NAME_PLACEHOLDER)}
                  // startAdornment={<Email color="disabled" />}
                  onChange={handleChange}
                  required={true}
                />
              </Grid>
            </Grid>

            <Grid container sx={{ marginTop: '2px' }} spacing={4}>
              <Grid item xs={6}>
                <PrimaryInput
                  label={translate(LANG_STRINGS.BRANCH_CODE_LABEL)}
                  type={'text'}
                  name="shopNameArabic"
                  fullWidth
                  placeholder={translate(LANG_STRINGS.BRANCH_CODE_PLACEHOLDER)}
                  // startAdornment={<Email color="disabled" />}
                  onChange={handleChange}
                  required={true}
                />
              </Grid>
              <Grid item xs={6}>
                <PrimaryInput
                  label={translate(LANG_STRINGS.ACC_NUMBER_LABEL)}
                  type={'text'}
                  name="shopNameArabic"
                  fullWidth
                  placeholder={translate(LANG_STRINGS.ACC_NUMBER_PLACEHOLDER)}
                  // startAdornment={<Email color="disabled" />}
                  onChange={handleChange}
                  required={true}
                />
              </Grid>
            </Grid>

            <Grid container sx={{ marginTop: '2px' }} spacing={5}>
              <Grid item xs={6}>
                <PrimaryInput
                  label={translate(LANG_STRINGS.IBAN_LABEL)}
                  type={'text'}
                  name="shopNameArabic"
                  fullWidth
                  placeholder={translate(LANG_STRINGS.IBAN_PLACEHOLDER)}
                  // startAdornment={<Email color="disabled" />}
                  onChange={handleChange}
                  required={true}
                />
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

export default BankDetail;

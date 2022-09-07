import React, { useState,useEffect } from 'react';
import Grid from '@mui/material/Grid';
import PrimaryInput from '../../components/Input/PrimaryInput';
import LANG_STRINGS from '../../enums/langStrings';
import SelectField from '../../components/SelectField';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryBanksRequest } from '../../redux/slices/addressSlice';
import { API_TOKEN } from '../../constant';

const BankDetail = ({ translate,formik }: any) => {
  const dispatch = useDispatch()
  const { values: seller, handleChange, errors, touched, handleBlur,setFieldValue } = formik;
  const {bankName,accountTitle,branchCode,accountNo,iban} = seller.bank
  const {banks} = useSelector((state:any)=>state.address)
  useEffect(() => {
   dispatch(getCountryBanksRequest({
    token:API_TOKEN,
    id:seller.country
   }))
  }, [])
  return (<>
            <Grid sx={{ fontWeight: 'bolder', marginTop: '20px' }}>{translate(LANG_STRINGS.BANK_ACC_DETAIL_MSG)}</Grid>
            <Grid container sx={{ marginTop: '1px' }} spacing={4}>
              <Grid item xs={12} md={6}>
                <SelectField
                  value={bankName}
                  name="bankDetails.bankName"
                  data={banks}
                  label={translate(LANG_STRINGS.BANK_NAME_LABEL)}
                  placeholder={translate(LANG_STRINGS.BANK_NAME_PLACEHOLDER)}
                  setSelectedValue={(id)=>{
                    setFieldValue("bankDetails.bankName",id)
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <PrimaryInput
                  value={accountTitle}
                  label={translate(LANG_STRINGS.ACC_HOLDER_NAME_LABEL)}
                  type={'text'}
                  name="bankDetails.accountTitle"
                  fullWidth
                  placeholder={translate(LANG_STRINGS.ACC_HOLDER_NAME_PLACEHOLDER)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required={true}
                />
              </Grid>
            </Grid>

            <Grid container sx={{ marginTop: '2px' }} spacing={4}>
              <Grid item xs={12} md={6}>
                <PrimaryInput
                  value={branchCode}
                  label={translate(LANG_STRINGS.BRANCH_CODE_LABEL)}
                  type={'text'}
                  name="bankDetails.branchCode"
                  fullWidth
                  placeholder={translate(LANG_STRINGS.BRANCH_CODE_PLACEHOLDER)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required={true}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <PrimaryInput
                  value={accountNo}
                  label={translate(LANG_STRINGS.ACC_NUMBER_LABEL)}
                  type={'text'}
                  name="bankDetails.accountNo"
                  fullWidth
                  placeholder={translate(LANG_STRINGS.ACC_NUMBER_PLACEHOLDER)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required={true}
                />
              </Grid>
            </Grid>

            <Grid container sx={{ marginTop: '2px' }} spacing={5}>
              <Grid item xs={12} md={6}>
                <PrimaryInput
                  value={iban}
                  label={translate(LANG_STRINGS.IBAN_LABEL)}
                  type={'text'}
                  name="bankDetails.iban"
                  fullWidth
                  placeholder={translate(LANG_STRINGS.IBAN_PLACEHOLDER)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required={true}
                />
              </Grid>
            </Grid>
            </>
  );
};

export default BankDetail;

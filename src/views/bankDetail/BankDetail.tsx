import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import PrimaryInput from '../../components/Input/PrimaryInput';
import LANG_STRINGS from '../../enums/langStrings';
import SelectField from '../../components/SelectField';

const BankDetail = ({ translate }: any) => {
  const [bank, setBank] = useState<string>('');

  const [bankDetails, setbankDetails] = useState({
    name: '',
    code: '',
    accountNumber: '',
    Iban: '',
  });
  const handleChange = (e: any) => {
    setbankDetails({ ...bankDetails, [e.target.name]: e.target.value });
  };
  
  return (<>
            <Grid sx={{ fontWeight: 'bolder', marginTop: '20px' }}>{translate(LANG_STRINGS.BANK_ACC_DETAIL_MSG)}</Grid>
            <Grid container sx={{ marginTop: '1px' }} spacing={4}>
              <Grid item xs={6}>
                <SelectField
                  label={translate(LANG_STRINGS.BANK_NAME_LABEL)}
                  placeholder={translate(LANG_STRINGS.BANK_NAME_PLACEHOLDER)}
                  setSelectedValue={setBank}
                  checkValidation={bank}
                />
              </Grid>
              <Grid item xs={6}>
                <PrimaryInput
                  label={translate(LANG_STRINGS.ACC_HOLDER_NAME_LABEL)}
                  type={'text'}
                  name="name"
                  fullWidth
                  placeholder={translate(LANG_STRINGS.ACC_HOLDER_NAME_PLACEHOLDER)}
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
                  name="code"
                  fullWidth
                  placeholder={translate(LANG_STRINGS.BRANCH_CODE_PLACEHOLDER)}
                  onChange={handleChange}
                  required={true}
                />
              </Grid>
              <Grid item xs={6}>
                <PrimaryInput
                  label={translate(LANG_STRINGS.ACC_NUMBER_LABEL)}
                  type={'text'}
                  name="accountNumber"
                  fullWidth
                  placeholder={translate(LANG_STRINGS.ACC_NUMBER_PLACEHOLDER)}
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
                  name="Iban"
                  fullWidth
                  placeholder={translate(LANG_STRINGS.IBAN_PLACEHOLDER)}
                  onChange={handleChange}
                  required={true}
                />
              </Grid>
            </Grid>
            </>
  );
};

export default BankDetail;

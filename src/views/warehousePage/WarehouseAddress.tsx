import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import LANG_STRINGS from '../../enums/langStrings';
import { Typography } from '@mui/material';
import PrimaryInput from '../../components/Input/PrimaryInput';
import DropdownSelect from '../../components/items/DropdownSelect';
import SelectField from '../../components/SelectField';
import Checkbox from '@mui/material/Checkbox';
import Image from 'next/image';
import ErrorModal from '../sellerprofile/ErrorModal';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryStatesListRequest, getStateCitiesListRequest } from '../../redux/slices/addressSlice';
import { API_TOKEN } from '../../constant';
import { addLocationToWareHouse } from '../../redux/slices/sellerSlice';

const WarehouseAddress = ({ translate, formik }: any) => {
  const { values: seller, handleChange, errors, touched, handleBlur, setFieldValue } = formik;
  const { incharge, name, nameArabic, country, state, city, address } = seller.location;

  const addressSlice = useSelector((state: any) => state.address);

  const dispatch = useDispatch();
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [on, setOn] = useState<boolean>(false);
  const [successModal, setsuccessModal] = useState<boolean>(false);

  const [checked, setChecked] = React.useState(false);

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const addStoreLocation = () => {
   dispatch(addLocationToWareHouse(seller.location))
  };

  const handleCountryChange = (id) => {
    setFieldValue('location.country', id);
    dispatch(getCountryStatesListRequest({ id, token: API_TOKEN }));
  };
  const handleStateChange = (id) => {
    setFieldValue('location.state', id);
    dispatch(getStateCitiesListRequest({ id, token: API_TOKEN }));
  };

  return (
    <>
      {on ? (
        <ErrorModal
          model={on}
          wrong={translate(LANG_STRINGS.SOMETHING_WENT_WRONG)}
          deleteAction={translate(LANG_STRINGS.DELETE)}
          delete={translate(LANG_STRINGS.DELETE_IT)}
          action={translate(LANG_STRINGS.ACTION)}
          close={translate(LANG_STRINGS.CLOSE)}
          setmodel={setOn}
          image="/icons/deleteItem.png"
        />
      ) : (
        ''
      )}
      {successModal ? (
        <ErrorModal
          model={successModal}
          wrong={translate(LANG_STRINGS.PROFILE_COMPLETED)}
          deleteAction={translate(LANG_STRINGS.DELETE)}
          delete={translate(LANG_STRINGS.REQUIRED_INFORMATION)}
          action={translate(LANG_STRINGS.GO_TO_DASHBOARD)}
          close={translate(LANG_STRINGS.CLOSE)}
          setmodel={setsuccessModal}
          image="/icons/successimage.png"
          dialog="success"
        />
      ) : (
        ''
      )}
      <Grid>
        <Typography sx={{ fontWeight: 'bold' }} marginTop={3} variant="subtitle1">
          {translate(LANG_STRINGS.LOCATION_INCHARGE_DETAIL)}
        </Typography>
      </Grid>
      <Grid container style={{ marginTop: '1px' }} spacing={4}>
        <Grid item xs={12} md={9}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <PrimaryInput
                value={incharge.firstName}
                label={translate(LANG_STRINGS.FIRST_NAME)}
                type={'text'}
                name="location.incharge.firstName"
                fullWidth
                placeholder={translate(LANG_STRINGS.ENTER_FIRST_NAME)}
                onChange={handleChange}
                required={true}
                error={Boolean(errors.businessName) && touched.businessName}
                helperText={touched.businessName && errors.businessName}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <PrimaryInput
                value={incharge.lastName}
                label={translate(LANG_STRINGS.LAST_NAME)}
                type={'text'}
                name="location.incharge.lastName"
                fullWidth
                placeholder={translate(LANG_STRINGS.ENTER_LAST_NAME)}
                onChange={handleChange}
                required={true}
                helperText={errors.lastName}
              />
            </Grid>
          </Grid>

          <Grid container spacing={4} style={{ marginTop: '11px' }}>
            <Grid item xs={12} md={6}>
              <PrimaryInput
                value={incharge.email}
                label={translate(LANG_STRINGS.EMAIL)}
                type={'text'}
                name="location.incharge.email"
                fullWidth
                placeholder={translate(LANG_STRINGS.BUSINESS_EMAIL_PLACEHOLDER)}
                onChange={handleChange}
                required={true}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <DropdownSelect
                setValue={setMobileNumber}
                value={mobileNumber}
                label={translate(LANG_STRINGS.PHONE_NUMBER_LBL)}
                required={translate(LANG_STRINGS.ENTER_SELLER_NUMBER)}
              />
            </Grid>
          </Grid>

          <Grid>
            <Typography sx={{ fontWeight: 'bold' }} marginTop={2} variant="subtitle1">
              {translate(LANG_STRINGS.LOCATION_DETAILS)}
            </Typography>
          </Grid>
          <Grid container spacing={4} style={{ marginTop: '1px' }}>
            <Grid item xs={12} md={6}>
              <PrimaryInput
                value={name}
                label={translate(LANG_STRINGS.LOCATION_NAME_ENGLISH)}
                type={'text'}
                name="location.name"
                fullWidth
                placeholder={translate(LANG_STRINGS.LOCATION_NAME_PLACEHOLDER)}
                onChange={handleChange}
                required={true}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <PrimaryInput
                value={nameArabic}
                label={translate(LANG_STRINGS.ENTER_LOCATION_ARABIC)}
                type={'text'}
                name="location.nameArabic"
                fullWidth
                placeholder={translate(LANG_STRINGS.LOCATION_NAME_AR_PLACEHOLDER)}
                onChange={handleChange}
                required={true}
              />
            </Grid>
          </Grid>
          <Grid container spacing={4} style={{ marginTop: '11px' }}>
            <Grid item xs={12} md={6}>
              <SelectField
                name="location.country"
                data={addressSlice.countries}
                setSelectedValue={handleCountryChange}
                value={country}
                placeholder={translate(LANG_STRINGS.SELLER_COUNTRY)}
                label={translate(LANG_STRINGS.COUNTRY)}
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <SelectField
                name="location.state"
                data={addressSlice.states}
                placeholder={translate(LANG_STRINGS.SELLER_STATE)}
                label={translate(LANG_STRINGS.STATE)}
                setSelectedValue={handleStateChange}
                value={state}
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <SelectField
                name="location.city"
                data={addressSlice.cities}
                placeholder={translate(LANG_STRINGS.SELLER_CITY)}
                label={translate(LANG_STRINGS.CITY)}
                setSelectedValue={(id) => {
                  setFieldValue('location.city', id);
                }}
                value={city}
              />
            </Grid>
          </Grid>
          <Grid container style={{ marginTop: '25px' }}>
            <Grid item xs={12} md={6}>
              <PrimaryInput
                label={translate(LANG_STRINGS.ADDRESS)}
                type={'text'}
                name="location.address"
                fullWidth
                placeholder={translate(LANG_STRINGS.ENTER_BUSINESS_ADDRESS)}
                onChange={handleChange}
                required={true}
              />
            </Grid>
          </Grid>
          <Grid style={{ marginTop: '5px' }}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={checked} onChange={handleCheckbox} />}
                label={translate(LANG_STRINGS.RETURN_LOCATION)}
              />
            </FormGroup>
          </Grid>
          <Grid xs={12} style={{ border: '1px solid grey', padding: '15px', borderRadius: '5px', marginTop: '5px' }}>
            <Grid style={{ textAlign: 'center' }} onClick={addStoreLocation}>
              <Image src="/icons/addLocation.png" alt="uploadfile" width={18.15} height={16} />{' '}
              <span style={{ paddingLeft: '10px', fontWeight: 'bold' }}>{translate(LANG_STRINGS.ADD_LOCATION)}</span>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <Grid style={{ backgroundColor: '#FBFBFA', padding: '10px', height: '420px' }}>
            <Grid style={{ fontWeight: 'bolder' }}>{translate(LANG_STRINGS.UPLOADED_DOCUMENTS)}</Grid>
            <hr></hr>
            {seller.stores.length == 0 ? (
              <Grid style={{ marginTop: '70px', textAlign: 'center' }}>
                <Image src="/icons/noDocument.png" alt="uploadfile" width={100} height={100} />
                <Grid>{translate(LANG_STRINGS.NOT_UPLOADED_DOCUMENTS)}</Grid>
              </Grid> 
            ) : (
              seller.stores.map((wareHouse) => {
                return (
                  <Grid container>
                    <Grid item xs={2}>
                      <Image src="/icons/location.png" alt="uploadfile" width={16} height={20} />
                    </Grid>
                    <Grid item xs={7}>
                      <Typography variant="body1">{wareHouse.name}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Image src="/icons/edit.png" alt="uploadfile" width={18.33} height={18.33} />
                    </Grid>
                    <Grid item xs={1}>
                      <Image
                        src="/icons/deleteresult.png"
                        alt="uploadfile"
                        width={16}
                        height={18}
                        onClick={() => setOn(true)}
                      />
                    </Grid>
                  </Grid>
                );
              })
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default WarehouseAddress;

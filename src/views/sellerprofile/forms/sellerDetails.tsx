//IMPORTS
import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { Email } from "@mui/icons-material";
import PrimaryInput from "../../../components/Input/PrimaryInput";
import LANG_STRINGS from "../../../enums/langStrings";
import DropdownSelect from "../../../components/items/DropdownSelect";
import SelectField from "../../../components/SelectField";
import {
  getCountriesListRequest,
  getCountryStatesListRequest,
  getStateCitiesListRequest,
} from "../../../redux/slices/addressSlice";
import { useDispatch, useSelector } from "react-redux";
import { getDocumentTypesRequest } from "../../../redux/slices/sellerSlice";
import { API_TOKEN } from "../../../constant";

export const SellerDetails = ({ translate, formik }) => {
  const { values: seller, handleChange, errors, touched, handleBlur,setFieldValue } = formik;
  const [mobilNumber, setMobileNumber] = useState<string>("");
  const address = useSelector((state: any) => state.address);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountriesListRequest(API_TOKEN));
    dispatch(getDocumentTypesRequest(API_TOKEN));
  }, []);

  const handleCountryChange = (id) => {
    setFieldValue("country",id)
    dispatch(getCountryStatesListRequest({ id, token: API_TOKEN }));
  };
  const handleStateChange = (id) => {
    setFieldValue("state",id)
    dispatch(getStateCitiesListRequest({ id, token: API_TOKEN }));
  };
  return (
    <Grid container sx={{ marginTop: "31px" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <PrimaryInput
            value={seller.companyName}
            label={translate(LANG_STRINGS.BUSINESS_NAME)}
            type={"text"}
            name="companyName"
            fullWidth
            placeholder={translate(LANG_STRINGS.BUSINESS_NAME_PLACEHOLDER)}
            onBlur={handleBlur}
            onChange={handleChange}
            error={Boolean(errors.companyName) && touched.companyName}
            helperText={touched.companyName && errors.companyName}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <PrimaryInput
            value={seller.companyNameAr}
            label={translate(LANG_STRINGS.BUSINESS_NAME_AR)}
            type={"text"}
            name="companyNameAr"
            fullWidth
            placeholder={translate(LANG_STRINGS.BUSINESS_NAME_AR_PLACEHOLDER)}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(errors.companyNameAr) && touched.companyNameAr}
            helperText={touched.companyNameAr && errors.companyNameAr}
          />
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ marginTop: "1px" }}>
        <Grid item xs={12} md={6}>
          <PrimaryInput
            value={seller.displayName}
            label={translate(LANG_STRINGS.SHOP_NAME)}
            type={"text"}
            name="displayName"
            fullWidth
            placeholder={translate(LANG_STRINGS.SHOP_NAME_PLACEHOLDER)}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(errors.displayName) && touched.displayName}
            helperText={touched.displayName && errors.displayName}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <PrimaryInput
            value={seller.displayNameAr}
            label={translate(LANG_STRINGS.SHOP_NAME_AR)}
            type={"text"}
            name="displayNameAr"
            fullWidth
            placeholder={translate(LANG_STRINGS.SHOP_NAME_AR_PLACEHOLDER)}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(errors.displayNameAr) && touched.displayNameAr}
            helperText={touched.displayNameAr && errors.displayNameAr}

          />
        </Grid>
      </Grid>

      <Grid container sx={{ marginTop: "1px" }} spacing={4}>
        <Grid item xs={12} md={6}>
          <PrimaryInput
            value={seller.registrationNo}
            label={translate(LANG_STRINGS.REG_NUMBER)}
            type={"text"}
            name="registrationNo"
            fullWidth
            placeholder={translate(LANG_STRINGS.ENTER_REG_NUMBER)}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(errors.registrationNo) && touched.registrationNo}
            helperText={touched.registrationNo && errors.registrationNo}

          />
        </Grid>
        <Grid item xs={12} md={6}>
          <DropdownSelect
            setValue={setMobileNumber}
            value={mobilNumber}
            label={translate(LANG_STRINGS.PHONE_NUMBER_LBL)}
            required={translate(LANG_STRINGS.ENTER_SELLER_NUMBER)}
          />
        </Grid>
      </Grid>
      <Grid container sx={{ marginTop: "1px" }} spacing={4}>
        <Grid item xs={12} md={6}>
          <PrimaryInput
            value={seller.email}
            label={translate(LANG_STRINGS.BUSINESS_EMAIL)}
            type={"text"}
            name="email"
            fullWidth
            placeholder={translate(LANG_STRINGS.BUSINESS_EMAIL_PLACEHOLDER)}
            startAdornment={<Email color="disabled" />}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(errors.email) && touched.email}
            helperText={touched.email && errors.email}
          />
        </Grid>
        <Grid item xs={12} md={6} >
          <PrimaryInput
            value={seller.website}
            label={translate(LANG_STRINGS.BUSINESS_URL)}
            type={"text"}
            name="website"
            fullWidth
            placeholder={translate(LANG_STRINGS.SELLER_BUSINESS_URL)}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(errors.website) && touched.website}
            helperText={touched.website && errors.website}
          />
        </Grid>
      </Grid>
      <Grid container sx={{ marginTop: "1px" }} spacing={3}>
        <Grid item xs={12} md={4}>
          <SelectField
            name="country"
            data={address.countries}
            value={seller.country}
            setSelectedValue={handleCountryChange}
            placeholder={translate(LANG_STRINGS.SELLER_COUNTRY)}
            label={translate(LANG_STRINGS.COUNTRY)}
            
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <SelectField
            name="state"
            data={address.states}
            value={seller.state}
            placeholder={translate(LANG_STRINGS.SELLER_STATE)}
            label={translate(LANG_STRINGS.STATE)}
            setSelectedValue={handleStateChange}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <SelectField
            name="city"
            data={address.cities}
            value={seller.city}
            placeholder={translate(LANG_STRINGS.SELLER_CITY)}
            label={translate(LANG_STRINGS.CITY)}
            setSelectedValue={(id)=>setFieldValue("city",id)}
          />
        </Grid>
      </Grid>
      <Grid container sx={{ marginTop: "25px" }}>
        <Grid item xs={12} md={6}>
          <PrimaryInput
            value={seller.address1}
            label={translate(LANG_STRINGS.SELLER_ADDRESS)}
            type={"text"}
            name="address1"
            fullWidth
            placeholder={translate(LANG_STRINGS.ENTER_BUSINESS_ADDRESS)}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(errors.address1) && touched.address1}
            helperText={touched.address1 && errors.address1}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

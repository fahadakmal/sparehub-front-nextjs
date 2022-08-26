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

export const SellerDetails = ({ translate, formik }) => {
  const { values: seller, handleChange, errors, touched, handleBlur } = formik;
  const [country, setCountry] = useState<string>("0");
  const [state, setState] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [mobilNumber, setMobileNumber] = useState<string>("");
  const address = useSelector((state: any) => state.address);
  const dispatch = useDispatch();

  let list =
    "eyJraWQiOiJtNEdaZDgyeHJSVFdiT0VwN1U1cjZUNmZrMzFiT1Erd09jRDNtTkRIVDg4PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjNTI3MmM2ZC04ZjJlLTRhMzgtYmIyNC01N2EyYjNkOTM2YjgiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAubWUtc291dGgtMS5hbWF6b25hd3MuY29tXC9tZS1zb3V0aC0xX0JRQzN5RFdNeiIsImNsaWVudF9pZCI6IjF1NjFycmVvMW4za2RycDEwZXV0aGtrdmNyIiwib3JpZ2luX2p0aSI6IjY1OGM3YTU0LWYxOWYtNDZhMi1iZWNmLWY2MzgxZDNhNmNiMyIsImV2ZW50X2lkIjoiNzdkODYyYzgtY2VlMC00ZmEyLWI5MzEtMDAwYWE4Yzc0MWRjIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTY2MTQzMTc0MSwiZXhwIjoxNjYxNDM1MzQxLCJpYXQiOjE2NjE0MzE3NDEsImp0aSI6ImVjMjMzMzc2LWYyNTctNGVjNy05NmNkLWVkNjE4M2RjOWFiNCIsInVzZXJuYW1lIjoiYzUyNzJjNmQtOGYyZS00YTM4LWJiMjQtNTdhMmIzZDkzNmI4In0.f9bQcGhVsMloB9EyvMXuMw0KySR_apib1KXDmFZWT32iv84QdhNFaOEsNJB8lTDPNu1O1-pRtSr9mXApLk8oaqPVTVlmbwAUddKPMWw8oKHOjjoGttC0v5236AOmah9rYQoAIY4V1aEt2J5_-DZLzSwJV3PwxdyMi29LjgmIjq8r4BUmTvekSgNz4VZnPYqnlYGoFITJ9Nm23Yjbfq78q50DiAsjnwKF4MYoZbZmXsgrM7cDAyh-B2-GJ2S4uERxBfA1wd7BXE3p1Tq_Pn6_iKjxaA0yAOkdQYICmNhkM3CedQeLbdYR5QXpq0s27nygdojA_4ZdM_2QSHyCrR1VIA";

  useEffect(() => {
    dispatch(getCountriesListRequest(list));
  }, [window]);

  const handleCountryChange = (id) => {
    setCountry(id);
    dispatch(getCountryStatesListRequest({ id, token: list }));
  };
  const handleStateChange = (id) => {
    setState(id);
    dispatch(getStateCitiesListRequest({ id, token: list }));
  };
  return (
    <Grid container sx={{ marginTop: "31px" }}>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <PrimaryInput
            value={seller.businessName}
            label={translate(LANG_STRINGS.BUSINESS_NAME)}
            type={"text"}
            name="businessName"
            fullWidth
            placeholder={translate(LANG_STRINGS.BUSINESS_NAME_PLACEHOLDER)}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <PrimaryInput
            value={seller.businessNameArabic}
            label={translate(LANG_STRINGS.BUSINESS_NAME_AR)}
            type={"text"}
            name="businessNameArabic"
            fullWidth
            placeholder={translate(LANG_STRINGS.BUSINESS_NAME_AR_PLACEHOLDER)}
            onChange={handleChange}
          />
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ marginTop: "1px" }}>
        <Grid item xs={6}>
          <PrimaryInput
            value={seller.shopName}
            label={translate(LANG_STRINGS.SHOP_NAME)}
            type={"text"}
            name="shopName"
            fullWidth
            placeholder={translate(LANG_STRINGS.SHOP_NAME_PLACEHOLDER)}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <PrimaryInput
            value={seller.shopNameArabic}
            label={translate(LANG_STRINGS.SHOP_NAME_AR)}
            type={"text"}
            name="shopNameArabic"
            fullWidth
            placeholder={translate(LANG_STRINGS.SHOP_NAME_AR_PLACEHOLDER)}
            onChange={handleChange}
          />
        </Grid>
      </Grid>

      <Grid container sx={{ marginTop: "1px" }} spacing={4}>
        <Grid item xs={6}>
          <PrimaryInput
            value={seller.regNumber}
            label={translate(LANG_STRINGS.REG_NUMBER)}
            type={"text"}
            name="regNumber"
            fullWidth
            placeholder={translate(LANG_STRINGS.ENTER_REG_NUMBER)}
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
      <Grid container sx={{ marginTop: "1px" }} spacing={4}>
        <Grid item xs={6}>
          <PrimaryInput
            value={seller.email}
            label={translate(LANG_STRINGS.BUSINESS_EMAIL)}
            type={"text"}
            name="email"
            fullWidth
            placeholder={translate(LANG_STRINGS.BUSINESS_EMAIL_PLACEHOLDER)}
            startAdornment={<Email color="disabled" />}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <PrimaryInput
            value={seller.bussinessAddress}
            label={translate(LANG_STRINGS.BUSINESS_URL)}
            type={"text"}
            name="url"
            fullWidth
            placeholder={translate(LANG_STRINGS.SELLER_BUSINESS_URL)}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Grid container sx={{ marginTop: "1px" }} spacing={3}>
        <Grid item xs={4}>
          <SelectField
            data={address.countries}
            value={country}
            setSelectedValue={handleCountryChange}
            checkValidation={country}
            placeholder={translate(LANG_STRINGS.SELLER_COUNTRY)}
            label={translate(LANG_STRINGS.COUNTRY)}
          />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            data={address.states}
            value={state}
            placeholder={translate(LANG_STRINGS.SELLER_STATE)}
            label={translate(LANG_STRINGS.STATE)}
            setSelectedValue={handleStateChange}
            checkValidation={state}
          />
        </Grid>
        <Grid item xs={4}>
          <SelectField
            data={address.cities}
            value={city}
            placeholder={translate(LANG_STRINGS.SELLER_CITY)}
            label={translate(LANG_STRINGS.CITY)}
            setSelectedValue={setCity}
            checkValidation={city}
          />
        </Grid>
      </Grid>
      <Grid container sx={{ marginTop: "25px" }}>
        <Grid item xs={12}>
          <PrimaryInput
            value={seller.url}
            label={translate(LANG_STRINGS.SELLER_ADDRESS)}
            type={"text"}
            name="url"
            fullWidth
            placeholder={translate(LANG_STRINGS.ENTER_BUSINESS_ADDRESS)}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

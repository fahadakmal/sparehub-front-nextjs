import { Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { useAuth } from "../../auth/Auth";
import AuthContainer from "../../components/AuthContainer/AuthContainer";
import { PrimaryButton } from "../../components/Button/PrimaryButton";
import PrimaryInput from "../../components/Input/PrimaryInput";
import { translate } from "../../utils";
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import styling from "../../components/stylesObjects/stylesObj";
import LANG_STRINGS from "../../enums/langStrings";

const ResetPassword = () => {
    const { errorMessage,strengthMsgs ,backButton} = styling;
    
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();

  const [user, setUser] = useState({
    password: '',
    confirmPassword: '',
    country: 'SA',
  });

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleCountrySelect = (code: string) => {
    setUser({ ...user, country: code });
  };
  const auth: any = useAuth();

  const hideShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const hideShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handleValidation = () => {
    let isValid = false;
    const { password, confirmPassword } = user;
    if (password && confirmPassword && password === confirmPassword) {
      isValid = true;
    }
    return isValid;
  };
  // password, showing and hiding
  const passwordLength = user.password.length;

  // states for password validation
  const [isNumber, setIsNumber] = useState(false);
  const [isUppercase, setIsUppercase] = useState(false);
  const [isSpecialChar, setIsSpecialChar] = useState(false);
  const [isLowercase, setIsLowercase] = useState(false);

  const changeHandler =
   (prop: any) => (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
     setUser({ ...user, [prop]: event.target.value });
     checkSpecialCharacterHandler(event);
   };
   const checkSpecialCharacterHandler = (event: any) => {
    const mypass = event.target.value;
    const numbers = /[0-9]/g;
    const uppercaseLetters = /[A-Z]/g;
    const specialCharacter = /[!@#$%^&*?~`>/<']/g;
    const lowercase = /[a-z]/g;

    if (numbers.test(mypass)) {
      setIsNumber(true);
      console.log("abc")
    } else {
      setIsNumber(false);
    }
    if (uppercaseLetters.test(mypass)) {
      setIsUppercase(true);
    } else {
      setIsUppercase(false);
    }
    if (specialCharacter.test(mypass)) {
      setIsSpecialChar(true);
    } else {
      setIsSpecialChar(false);
    }
    if (lowercase.test(mypass)) {
      setIsLowercase(true);
    } else {
      setIsLowercase(false);
    }
  };

    // confirm password 

const [showErrorMessage, setShowErrorMessage] = useState(false);
const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);
    
  const handleCPassword = (event: any) => {
    setUser({...user,[event.target.name]: event.target.value})
    setIsCPasswordDirty(true);
  }
  
  useEffect(()=> {
    if (isCPasswordDirty) {
      if(user.password === user.confirmPassword) {
        setShowErrorMessage(false);
      } else {
        setShowErrorMessage(true);
      }
    }
  }, [user.confirmPassword])
  
  let activeCheck = <CheckOutlinedIcon sx={{ color: '#46BB59' }} fontSize="small" />;
  let disabledCheck = <CheckOutlinedIcon color="disabled" fontSize="small" />;

  const enabled =
    passwordLength > 7 &&
    isNumber &&
    isSpecialChar &&
    isLowercase &&
    user.confirmPassword.trim() === user.password.trim();

    return(
        <AuthContainer>
            <Link href="/login" passHref>
              <Box mt={3} sx={backButton}>
                <a>
                  <ArrowBackOutlinedIcon fontSize="medium" />
                </a>
              </Box>
            </Link>
            <Box mt={6} mb={10}>
                <Grid xs={12} item textAlign={'center'}>
                    <Typography mb={2} sx={{
                          fontWeight: 700,
                          fontSize: '24px',
                          lineHeight: '31px',
                      }}>
                        {translate('RESET_PASSWORD')}
                    </Typography>
                    <Typography component={'p'}>{translate('CREATE_PASSWORD_MESSAGE')}</Typography>
                </Grid>
            </Box>
            <Box>
                <Grid item xs={12} pt={3}>
                    <PrimaryInput
                        label={translate('NEW_PASSWORD')}
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        fullWidth
                        placeholder={translate('ENTER_PASSWORD')}
                        startAdornment={<Lock color="disabled" />}
                        endAdornment={showPassword ? <Visibility color="disabled" /> : <VisibilityOff color="disabled" />}
                        onClick={hideShowPassword}
                        // onChange={handleChange}
                        value={user.password}
                        onChange={changeHandler("password")}
                    />
                </Grid>
                <Grid item xs={12} pt={3}>
                    <PrimaryInput
                        label={translate('CONFORM_PASSWORD')}
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        fullWidth
                        placeholder={translate('ENTER_PASS_AGAIN')}
                        startAdornment={<Lock color="disabled" />}
                        endAdornment={showConfirmPassword ? <Visibility color="disabled" /> : <VisibilityOff color="disabled" />}
                        onClick={hideShowConfirmPassword}
                        // onChange={handleChange}
                        value={user.confirmPassword}
                        onChange={handleCPassword}
                    />
                    {showErrorMessage ? <Typography sx={errorMessage}>Passwords did not match</Typography>  : " "}
                </Grid>
                <Grid item xs={12} pt={3}>
                  <Box mb={2} mt={1}>
                    <Grid container spacing={0}>
                      <Grid item xs={0.8} md={0.6}>
                        {passwordLength > 7 ? activeCheck : disabledCheck}
                      </Grid>
                      <Grid item xs={11.2} md={11.4}>
                        <Typography sx={strengthMsgs}>{translate(LANG_STRINGS.EIGHT_CHARS)}</Typography>
                      </Grid>
                      <Grid item xs={0.8} md={0.6}>
                        {isNumber ? activeCheck : disabledCheck}
                      </Grid>
                      <Grid item xs={11.2} md={11.4}>
                        <Typography sx={strengthMsgs}>{translate(LANG_STRINGS.CONTAIN_NUMBER)}</Typography>
                      </Grid>
                      <Grid item xs={0.8} md={0.6}>
                        {isSpecialChar ? activeCheck : disabledCheck}
                      </Grid>
                      <Grid item xs={11.2} md={11.4}>
                        <Typography sx={strengthMsgs}>{translate(LANG_STRINGS.CONTAIN_SPECIAL_CHARACTER)}</Typography>
                      </Grid>
                      <Grid item xs={0.8} md={0.6}>
                        {isLowercase ? activeCheck : disabledCheck}
                      </Grid>
                      <Grid item xs={11.2} md={11.4}>
                        <Typography sx={strengthMsgs}>{translate(LANG_STRINGS.CONTAIN_LOWERCASE_LETTER)}</Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
            </Box>

            <Grid item xs={12} pt={3}>
                <PrimaryButton onClick={()=>router.push('/otpVerification')} disabled={!enabled} variant="contained" fullWidth>
                {translate('CREATE_PASSWORD')}
                </PrimaryButton>
            </Grid>
      </AuthContainer>
    )
}
export default ResetPassword;
import { Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';
import * as React from 'react';
import AuthContainer from '../../components/AuthContainer/AuthContainer';
import { PrimaryButton } from '../../components/Button/PrimaryButton';
import PrimaryInput from '../../components/Input/PrimaryInput';
import { useAuth } from '../../auth/Auth';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { dotPass, tickpass } from '../../../public/images';
// import '../../App.css';

const styling = {
  successMessage: {
    color: 'green',
    fontSize: '14px',
    fontWeight: '600',
  },
  errorMessage: {
    color: '#E2282C',
    fontSize: '14px',
    fontWeight: '600',
  },
  strengthMsgs: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '28px',
    letterSpacing: '0.24px',
    color: '#000000',
  },
};

export default function CreatePassword({ translate }: any) {
  const { successMessage } = styling;
  const { errorMessage } = styling;
  const { strengthMsgs } = styling;

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const router = useRouter();

  const [user, setUser] = React.useState({
    password: '',
    confirmPassword: '',
    country: 'SA',
  });
  // states for password validation
  const [isNumber, setIsNumber] = React.useState(false);
  const [isUppercase, setIsUppercase] = React.useState(false);
  const [isSpecialChar, setIsSpecialChar] = React.useState(false);
  const [isLowercase, setIsLowercase] = React.useState(false);
  const [showErrorMessage, setShowErrorMessage] = React.useState(false);
  const [isCPasswordDirty, setIsCPasswordDirty] = React.useState(false);

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

  const handleNavigate = () => {
    router.push('/congratulations');
  };

  // password, showing and hiding
  const passwordLength = user.password.length;

  const changeHandler = (prop: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
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
      console.log('abc');
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

  const handleCPassword = (event: any) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    setIsCPasswordDirty(true);
  };

  React.useEffect(() => {
    if (isCPasswordDirty) {
      if (user.password === user.confirmPassword) {
        setShowErrorMessage(false);
      } else {
        setShowErrorMessage(true);
      }
    }
  }, [user.confirmPassword]);

  return (
    <AuthContainer>
      <Grid xs={12} item textAlign={'center'}>
        <Typography component="h1" variant="h5">
          {translate('CREATE_A_PASSWORD')}
        </Typography>
        <Typography component={'p'}>{translate('CREATE_PASSWORD_MESSAGE')}</Typography>
      </Grid>

      <>
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
            onChange={changeHandler('password')}
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
          {showErrorMessage ? <Typography sx={errorMessage}>Passwords did not match</Typography> : ' '}
        </Grid>
        <Grid item xs={12} pt={3}>
          <Box mb={2} mt={3}>
            <Grid container spacing={2}>
              <Grid item xs={3} md={1}>
                {passwordLength > 7 ? (
                  <Image src={tickpass} height={15} width={15} />
                ) : (
                  <Image src={dotPass} height={10} width={10} />
                )}
              </Grid>
              <Grid item xs={9} md={11}>
                <Typography sx={strengthMsgs}>{translate('EIGHT_CHARS')}</Typography>
              </Grid>
              <Grid item xs={3} md={1}>
                {isNumber ? (
                  <Image src={tickpass} height={15} width={15} />
                ) : (
                  <Image src={dotPass} height={10} width={10} />
                )}
              </Grid>
              <Grid item xs={9} md={11}>
                <Typography sx={strengthMsgs}>{translate('CONTAIN_NUMBER')}</Typography>
              </Grid>
              <Grid item xs={3} md={1}>
                {isSpecialChar ? (
                  <Image src={tickpass} height={15} width={15} />
                ) : (
                  <Image src={dotPass} height={10} width={10} />
                )}
              </Grid>
              <Grid item xs={9} md={11}>
                <Typography sx={strengthMsgs}>{translate('CONTAIN_SPECIAL_CHARACTER')}</Typography>
              </Grid>
              <Grid item xs={3} md={1}>
                {isLowercase ? (
                  <Image src={tickpass} height={15} width={15} />
                ) : (
                  <Image src={dotPass} height={10} width={10} />
                )}
              </Grid>
              <Grid item xs={9} md={11}>
                <Typography sx={strengthMsgs}>{translate('CONTAIN_LOWERCASE_LETTER')}</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </>

      <Grid item xs={12} pt={3}>
        <PrimaryButton onClick={handleNavigate} variant="contained" fullWidth>
          {translate('CREATE_PASSWORD')}
        </PrimaryButton>
      </Grid>
    </AuthContainer>
  );
}

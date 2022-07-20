import { Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContainer from '../../components/AuthContainer/AuthContainer';
import { PrimaryButton } from '../../components/Button/PrimaryButton';
import PrimaryInput from '../../components/Input/PrimaryInput';
import { useAuth } from '../../auth/Auth';
import { translate } from '../../utils';
import '../../App.css';

export default function CreatePassword() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const navigate = useNavigate();

  const [user, setUser] = React.useState({
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </Grid>
        <Grid></Grid>
      </>

      <Grid item xs={12} pt={3}>
        <PrimaryButton variant="contained" fullWidth>
          {translate('CREATE_PASSWORD')}
        </PrimaryButton>
      </Grid>
    </AuthContainer>
  );
}

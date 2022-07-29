import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AuthContainer from '../../components/AuthContainer/AuthContainer';
import { PrimaryButton } from '../../components/Button/PrimaryButton';

const useStyles = {
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '80vh',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    gap: 3,
    maxWidth: 455,
  },
};

const Congratulations = ({ translate }: any) => {
  const { root } = useStyles;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/');
  };
  return (
    <AuthContainer>
      <Grid item sx={root}>
        <Typography fontSize={24} fontWeight={700} lineHeight={'31px'} color="#2E303D">
          {translate('REGISTERED_SUCCESSFULLY')}
        </Typography>
        <Typography color={'#292D3260'} fontSize={16} align="center" letterSpacing={0.32}>
          {translate('REGISTERED_SUCCESSFULLY_MESSAGE')}
        </Typography>
        <PrimaryButton onClick={handleNavigate} fullWidth>
          {translate('TAKE_ME_LOGIN')}
        </PrimaryButton>
      </Grid>
    </AuthContainer>
  );
};

export default Congratulations;

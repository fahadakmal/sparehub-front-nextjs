import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import AuthContainer from '../../components/AuthContainer/AuthContainer';
import { PrimaryButton } from '../../components/Button/PrimaryButton';
import { useRouter } from 'next/router';
import ToastAlert from '../../components/Toast/ToastAlert';
import LANG_STRINGS from '../../enums/langStrings';

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
  },
};

const Congratulations = ({ translate }: any) => {
  const { root } = useStyles;
  const router = useRouter();
  const { newPassword } = router.query;
  const [toast, setToast] = useState({
    message: '',
    appearence: false,
    type: '',
  });

  useEffect(() => {
    setToast({ ...toast, message: translate(LANG_STRINGS.USER_VERIFIED), appearence: true, type: 'success' });
  }, []);

  const handleNavigate = () => {
    router.push('/login');
  };

  const handleCloseToast = () => {
    setToast({ ...toast, appearence: false });
  };

  return (
    <AuthContainer>
      <Grid item sx={root}>
        <Typography fontSize={24} fontWeight={700} lineHeight={'31px'} color="#2E303D">
          {!newPassword ? translate(LANG_STRINGS.REGISTERED_SUCCESSFULLY) : translate(LANG_STRINGS.PASSWORD_UPDATED)}
        </Typography>
        <Typography
          sx={{ maxWidth: '480px' }}
          mb={8}
          color={'#292D32'}
          fontSize={16}
          align="center"
          letterSpacing={0.32}
        >
          {!newPassword
            ? translate(LANG_STRINGS.REGISTERED_SUCCESSFULLY_MESSAGE)
            : translate(LANG_STRINGS.PASSWORD_UPDATED_MSG)}
        </Typography>
        <PrimaryButton onClick={handleNavigate} fullWidth>
          {translate('TAKE_ME_LOGIN')}
        </PrimaryButton>
        <ToastAlert
          appearence={toast.appearence}
          type={toast.type}
          message={toast.message}
          handleClose={handleCloseToast}
        />
      </Grid>
    </AuthContainer>
  );
};

export default Congratulations;

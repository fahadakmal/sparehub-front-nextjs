import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../../components/Button/PrimaryButton';

const theme = createTheme();

export default function ForgotPassword() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography component="h1" variant="h5">
            Forgot Password
          </Typography>
          <Typography>
            Lost your password? Please enter your username or email address. You will receive a link to create a new
            password via email.
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />

            <PrimaryButton sx={{ mt: 3, mb: 2 }} variant={'contained'} fullWidth>
              Reset Password
            </PrimaryButton>
            <Grid container>
              <Grid item xs>
                <Link to={'/'}>Remember your password?</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

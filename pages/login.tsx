import React from 'react';
import WithAuthentication from '../src/hooks/WithAuthentication';
import { Login } from '../src/views/Login';

const LoginPage = () => {

  return (
    <WithAuthentication
    component={Login}
    requiredAuth={false}
/>
  )
}

export default LoginPage
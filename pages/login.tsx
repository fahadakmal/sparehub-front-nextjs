import React from 'react';
import WithAuthentication from '../src/hooks/WithAuthentication';
import { Login } from '../src/views/Login';

const LoginPage = (props: any) => {
  return <WithAuthentication component={Login} requiredAuth={false} {...props} />;
};

export default LoginPage;

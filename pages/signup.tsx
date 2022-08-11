import React from 'react';
import WithAuthentication from '../src/hooks/WithAuthentication';
import { Signup } from '../src/views/Signup';

const SignupPage = () => {
  return <WithAuthentication component={Signup} requiredAuth={false} />;
};

export default SignupPage;

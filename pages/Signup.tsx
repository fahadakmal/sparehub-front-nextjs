import React from 'react';
import WithAuthentication from '../src/hooks/WithAuthentication';
import { Signup } from '../src/views/Signup';

const SignUpPage = () => {

  return (
    <WithAuthentication
    component={Signup}
    requiredAuth={false}
/>
  )
}

export default SignUpPage
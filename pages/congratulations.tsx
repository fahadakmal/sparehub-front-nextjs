import React from 'react';
import WithAuthentication from '../src/hooks/WithAuthentication';
import Congratulations from '../src/views/Signup/Congratulations';
const CongratulationsPage = () => {
  return <WithAuthentication component={Congratulations} requiredAuth={true} />;
};

export default CongratulationsPage;

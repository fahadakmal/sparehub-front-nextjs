import React from "react";
import WithAuthentication from "../src/hooks/WithAuthentication";
import OTPVerification from "../src/views/Signup/OTPVerification";

const OTPVerificationPage = () => {

  return (
      <WithAuthentication
          component={OTPVerification}
          requiredAuth={false}
      />
  )
}

export default OTPVerificationPage
import React from "react";
import WithAuthentication from "../src/hooks/WithAuthentication";
import { ForgotPassword } from "../src/views/ForgotPassword";
const ForgetPasswordPage = () => {

  return (
      <WithAuthentication
          component={ForgotPassword}
          requiredAuth={false}
      />
  )
}

export default ForgetPasswordPage
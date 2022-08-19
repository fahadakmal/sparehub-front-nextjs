import React from "react";
import WithAuthentication from "../src/hooks/WithAuthentication";
import { BankDetail } from "../src/views/bankDetail";
const customerbankDetail = () => {

  return (
      <WithAuthentication
          component={BankDetail}
          requiredAuth={true}
      />
  )
}

export default customerbankDetail
import React from "react";
import WithAuthentication from "../src/hooks/WithAuthentication";
import { SellerDetail } from "../src/views/sellerprofile";
const SellerDetailPage = () => {

  return (
      <WithAuthentication
          component={SellerDetail}
          requiredAuth={true}
      />
  )
}

export default SellerDetailPage
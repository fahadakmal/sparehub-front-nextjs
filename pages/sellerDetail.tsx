import React from "react";
import WithAuthentication from "../src/hooks/WithAuthentication";
import { SellerDetail } from "./sellerprofile";
const sellerDetailPage = () => {

  return ( 
    <SellerDetail />
      // <WithAuthentication
      //     component={SellerDetail}
      //     requiredAuth={true}
      // />
  )
}

export default sellerDetailPage
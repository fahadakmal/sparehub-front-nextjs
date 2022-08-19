import React from "react";
import WithAuthentication from "../src/hooks/WithAuthentication";
import { WarehouseAddress } from "../src/views/warehousePage";
const SellerWarehouseAddr = () => {

  return (
      <WithAuthentication
          component={WarehouseAddress}
          requiredAuth={true}
      />
  )
}

export default SellerWarehouseAddr
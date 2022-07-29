import React from "react";
import { Dashboard } from "../src/views/Dashboard";
import WithAuthentication from "../src/hooks/WithAuthentication";

const HomePage = () => {

  return (
      <WithAuthentication
          component={Dashboard}
          requiredAuth={true}
      />
  )
}

export default HomePage
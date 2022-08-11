import React from "react";
import WithAuthentication from "../src/hooks/WithAuthentication";
import CreatePassword from "../src/views/Signup/CreatePasword";

const CreatePasswordPage = () => {

  return (
      <WithAuthentication
          component={CreatePassword}
          requiredAuth={false}
      />
  )
}

export default CreatePasswordPage
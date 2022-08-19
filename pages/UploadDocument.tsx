import React from "react";
import WithAuthentication from "../src/hooks/WithAuthentication";
import { UploadFiles } from "../src/views/uploadDocument";
const UploadDocument = () => {

  return (
      <WithAuthentication
          component={UploadFiles}
          requiredAuth={true}
      />
  )
}

export default UploadDocument
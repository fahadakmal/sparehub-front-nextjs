import React from "react";
import WithAuthentication from "../src/hooks/WithAuthentication";
import { UploadFiles } from "./uploadDocument";
const uploadfiles = () => {

  return (
    <UploadFiles/>
      // <WithAuthentication
      //     component={UploadFiles}
      //     requiredAuth={true}
      // />
  )
}

export default uploadfiles
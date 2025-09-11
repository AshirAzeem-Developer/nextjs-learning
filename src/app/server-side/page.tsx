import { URL } from "@/utils/server-helper";
import React from "react";

const ServerOnly = () => {
  console.log("This is the Server URL", URL);
  return <div>ServerOnly</div>;
};

export default ServerOnly;

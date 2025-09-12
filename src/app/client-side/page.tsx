"use client";

import { useTheme } from "@/components/theme-provide";
// import { URL } from "@/utils/server-helper";
import React from "react";

const ClientOnly = () => {
  const theme = useTheme();

  //   console.log("This is the Server URL", URL);
  return <h1 style={{ color: theme.color.secondary }}>ClientOnly</h1>;
};

export default ClientOnly;

import { ThemeContext } from "@/components/theme-provide";
import React, { useContext } from "react";

const ServerOnly = () => {
  const theme = useContext(ThemeContext);

  console.log("Theme is -> ", theme.color.primary);

  return <div>ServerOnly</div>;
};

export default ServerOnly;

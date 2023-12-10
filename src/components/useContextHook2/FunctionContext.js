import React from "react";
import { useTheme } from "./ThemeContextProvider";
import { useThemeUpdate } from "./ThemeContextProvider";

const FunctionContext = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
    textAlign: "center",
  };
  return (
    <div style={themeStyles}>
      <button onClick={toggleTheme}>toggle theme</button>
      function theme
    </div>
  );
};

export default FunctionContext;

import React from "react";
// useContext helps in managing state globally.
import FunctionContext from "./FunctionContext";
import ClassContext from "./ClassContext";
import ThemeContextProvider from "./ThemeContextProvider";

const UseContextBasic = () => {
  return (
    <>
      <p>* web dev simplified lecs. *</p>
      <ThemeContextProvider>
        <FunctionContext />
        {/* <ClassContext /> */}
      </ThemeContextProvider>
      {/* the Provider takes only one prop, i.e. "value" */}
    </>
  );
};

export default UseContextBasic;

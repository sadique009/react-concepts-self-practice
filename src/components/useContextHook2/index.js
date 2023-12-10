import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./UseRefBasic";
import UseRefFocus from "./UseRefFocus";
import UseRefBasic from "./UseRefBasic";
import UseContextBasic from "./UseContextBasic";

import CompA from "./useContext/CompA";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <UseRefBasic/> */}
    {/* <UseRefFocus /> */}
    <UseContextBasic />

    <CompA />
  </>
);

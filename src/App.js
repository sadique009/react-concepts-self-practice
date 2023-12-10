import React from "react";
import "./App.css";
import ClickCounter from "./components/HigherOrderComponents/ClickCounter";
import HoverCounter from "./components/HigherOrderComponents/HoverCounter";
import PortalDemo from "./components/ReactPortal/PortalDemo";
import ParentComponent from "./components/useCallbackHook/ParentComponent";
import Counter from "./components/useMemoHook/Counter";
import DocTitleOne from "./components/CustomHooks/DocTitleOne";
import DocTitleTwo from "./components/CustomHooks/DocTitleTwo";
import Counter1 from "./components/CustomHooks/Counter1";
import Counter2 from "./components/CustomHooks/Counter2";

const App = () => {
  return (
    <>
      {/* if we try to pass down a prop in ClickCounter component from here, it won't work because the prop is passed down to the hoc and not to the ClickCounter component.  */}
      {/* <ClickCounter name="msn" />;
      <HoverCounter /> */}

      {/* <PortalDemo/> */}

      {/* <ParentComponent /> */}
      {/* 
      <Counter /> */}
      {/* 
      <DocTitleOne />
      <DocTitleTwo /> */}

      <Counter1 />
      <Counter2 />
    </>
  );
};

export default App;

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
import UserForm from "./components/CustomHooks/UserForm";
import UserGreeting from "./components/ConditionalRendering/UserGreeting";
import Stylesheet from "./components/StylingMethods/Stylesheet";
import Inline from "./components/StylingMethods/Inline";
import NameList from "./components/ListRendering/NameList";

// module stylesheet is imported like this.
import styles from "./components/StylingMethods/appStyles.module.css";
import "./components/StylingMethods/appStyles.css";

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

      {/* <Counter1 />
      <Counter2 /> */}

      {/* <UserForm /> */}

      {/* <UserGreeting /> */}

      {/* <Stylesheet primary={true} /> */}
      {/* <Inline /> */}
      {/* <h1 className="error">error</h1>
      <h1 className={styles.success}>success</h1> */}
      <NameList />
    </>
  );
};

export default App;

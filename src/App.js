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
import Welcome from "./components/ClassComponents/Welcome";
import LifecycleA from "./components/ClassComponents/LifecycleA";
// module stylesheet is imported like this.
import styles from "./components/StylingMethods/appStyles.module.css";
import "./components/StylingMethods/appStyles.css";
import CounterEg from "./components/useStateHooks/CounterEg";
import DataList from "./components/useStateHooks/DataList";
import AppEg from "./components/useEffectHooks/AppEg";
import UseRefBasic from "./components/useRefHook/UseRefBasic";
import UseRefFocus from "./components/useRefHook/UseRefFocus";
import UseReducer from "./components/useReducerHook/UseReducer";

const App = () => {
  return (
    <>
      {/* if we try to pass down a prop in ClickCounter component from here, it won't work because the prop is passed down to the hoc and not to the ClickCounter component.  */}
      {/* <ClickCounter name="msn" />;
      <HoverCounter /> */}

      {/* <PortalDemo/> */}

      {/* <ParentComponent /> */}

      {/* <CounterEg /> */}
      {/* <DataList /> */}
      {/* <AppEg/> */}
      {/* <UseRefBasic />
      <UseRefFocus /> */}
      {/* <UseReducer /> */}
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
      {/* <NameList /> */}
      {/* <Welcome/> */}
      {/* <LifecycleA /> */}
    </>
  );
};

export default App;

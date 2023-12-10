import React, { useState } from "react";
import "./App.css";
import Counter from "./counter";
import List from "./list";
import ProductApi from "./productApi";
import UseEffectExample from "./useEffectExample";

function App() {
  const [text, setText] = useState(""); // after re-render, the initial value passed to the hook is ignored.
  // instead, the updated value, {that was set using the updater/setter fn} is returned.
  // console.log(text);

  /* const state=React.useState("devsnest");  // without "import" statement, we can implement "useState" like this.
  // this is an alternate way of defining "useState" hook.
     const text=state[0];
     const setText=useState[1]; */
  console.log("app comp rendered");

  /* let text="devsnest"; */ // changes made to local variable do not reflect on the ui.
  // also, after re-rendering, all the changes made to local variables are lost.

  const handleChange = (e) => {
    setText(e.target.value); // the setter fn does two things:
    // it triggers a re-render.
    // it updates the initial state.
    console.log(text);
  };
  return (
    // <div className="App">
    //   <input type="text" name="content" id="content" onChange={handleChange} />
    //   {text} {/* here, we are using "text" as a prop. */}
    // </div>
    // <Counter/>
    // <List />
    // <UseEffectExample/>
    <ProductApi/>
  );
}

export default App;

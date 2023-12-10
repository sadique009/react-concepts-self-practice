// lec-31- useDocumentTitle custom hook.
// custom hooks allow us to reuse logic if it is implemented in multiple components.

// if there is no jsx in our code, we don't need to import react.
import React, { useEffect } from "react";

const useDocumentTitle = (count) => {
  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);
};

export default useDocumentTitle;

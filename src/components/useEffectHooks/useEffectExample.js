// devsnest lecs.
// revised 1,

import React, { useState, useEffect } from "react";

// we use this hook when we want our component to be notified of changes external to the ui.
// eg, api calls, events happening on the window. eg. movement of mouse.

function UseEffectExample() {
  console.log("re-render");

  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  // useEffect accepts a setter fn and a dependency array.
  useEffect(() => {
    const handleMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
      console.log("pointer move event");
    };

    console.log("addEventListener added for pointermove event");

    window.addEventListener("pointermove", handleMove);

    // cleanup fn.
    // it triggers when the component is unmounted.
    return window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div>
      x: {cursor.x}, y:{cursor.y}
    </div>
  );
}

export default UseEffectExample;

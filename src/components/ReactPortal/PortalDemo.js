// lec-31- portals.
// provide a way to render children in the DOM node that exists outside the DOM hierarchy of the parent component.
// use case- having to deal with parent component's css when the child component is a modal, popup or a tooltip.
// even though a portal can be in anywhere in the dom tree, it behaves just like a normal react child in every other way,
// this includes event bubbling.
// this means that an event fired from inside a portal will propagate to the ancestors in the containing react tree,
// even if those elements are not the ancestors in the DOM tree.

import React from "react";
// wrong way to import - import {ReactDOM} from "react-dom";
import ReactDOM from "react-dom";

const PortalDemo = () => {
    // this is how we create a portal.
  return ReactDOM.createPortal(
    // 1st parameter.
    <div>
      <h2>portals demo</h2>
    </div>,
    // 2nd parameter.
    document.getElementById("portal-root")
  );
};

export default PortalDemo;

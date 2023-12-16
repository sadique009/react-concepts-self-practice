// lec-6- class components.
// while using class components, we require 2 imports.

import React, { Component } from "react";

export class Welcome extends Component {
  // render method either returns null or jsx.
  render() {
    return <div>hello world</div>;
  }
}

export default Welcome;

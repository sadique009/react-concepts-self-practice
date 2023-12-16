// lec-23- component mounting lifecycle methods.

import React, { Component } from "react";

export class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "msn",
    };
    console.log("lifecycleB constructor");
  }
  //this methods gets access to 2 params, props and state, and returns a new state or null.
  static getDerivedStateFromProps(props, state) {
    console.log("lifecycleB getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("lifecycleB componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("lifecycleB shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("lifecycleB getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("lifecycleB componentDidUpdate");
  }
  render() {
    console.log("lifecycleB render");
    return <div>lifecycleA</div>;
  }
}

export default LifecycleB;

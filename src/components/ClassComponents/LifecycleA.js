// lec-23- component mounting lifecycle methods.

// lec-24- component updating lifecycle methods.

// order of execution during the mounting phase.

// lifecycleA constructor
// lifecycleA getDerivedStateFromProps
// lifecycleA render
// lifecycleB constructor
// lifecycleB getDerivedStateFromProps
// lifecycleB render
// lifecycleB componentDidMount
// lifecycleA componentDidMount

import React, { Component } from "react";
import LifecycleB from "./LifecycleB";
export class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "msn",
    };
    console.log("lifecycleA constructor");
  }
  //this methods gets access to 2 params, props and state, and returns a new state or null.
  static getDerivedStateFromProps(props, state) {
    console.log("lifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("lifecycleA componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("lifecycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
      console.log("lifecycleA getSnapshotBeforeUpdate");
      return null;
  }

  componentDidUpdate() {
    console.log("lifecycleA componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "codevolution",
    });
  };

  render() {
    console.log("lifecycleA render");
    return (
      <div>
        <div>lifecycleA</div>
        <button onClick={this.changeState}>change state</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;

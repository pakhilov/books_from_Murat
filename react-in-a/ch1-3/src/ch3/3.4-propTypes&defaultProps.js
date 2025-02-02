import React from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

class Counter extends React.Component {
  // To set PropTypes for a component, you provide a static property called propTypes.

  // PropTypes: a utility to validate which properties you’ll be using
  // so you can prevent bugs and plan the sorts of data your components will use.

  static propTypes = {
    incrementBy: PropTypes.number,
  };
  // to set default props, you provide a static property called defaultProps.
  static defaultProps = {
    incrementBy: 1,
  };

  constructor(props) {
    super(props);
    // state is similar to default props with the exception that the data is expected to be mutated a
    // and only available on components that inherit from React.Component.
    this.state = {
      count: 0,
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  onButtonClick() {
    // as an argument, setState can take either an object or a function that returns an object
    this.setState(function (prevState, props) {
      return { count: prevState.count + props.incrementBy };
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.onButtonClick}>++</button>
      </div>
    );
  }
}

// if we do not specify the property, it will increment by 1
render(<Counter incrementBy={5} />, document.getElementById("root"));

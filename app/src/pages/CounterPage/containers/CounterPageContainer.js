import React, { Component } from "react";

import Counter from "../../../commonComponents/Counter";
import CounterPageLayout from "../components/CounterPageLayout";

class CounterPageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countValue: 0,
    };
  }

  handleIncrement = () => {
    this.setState((state) => {
      const incrementValue = state.countValue + 1;
      return {
        countValue: incrementValue,
      };
    });
  };

  handleDecrement = () => {
    if (this.state.countValue > 0) {
      this.setState((state) => {
        const decrementValue = state.countValue - 1;

        return {
          countValue: decrementValue,
        };
      });
    }
  };

  handleReset = () => {
    this.setState({ countValue: 0 });
  };

  render() {
    return (
      <>
        <Counter
          countValue={this.state.countValue}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleReset={this.handleReset}
        />
        <CounterPageLayout />
      </>
    );
  }
}
export default CounterPageContainer;

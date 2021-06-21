import React from "react";

import { useState } from "react";
import Counter from "../../../commonComponents/Counter";

const HookCounterContainer = () => {
  const [counterState, setCountValue] = useState({ countValue: 0 });

  const handleIncrement = () => {
    setCountValue((state) => {
      const incrementValue = state.countValue + 1;
      return {
        countValue: incrementValue,
      };
    });
  };

  const handleDecrement = () => {
    if (counterState.countValue > 0) {
      setCountValue((state) => {
        const decrementValue = state.countValue - 1;

        return {
          countValue: decrementValue,
        };
      });
    }
  };

  const handleReset = () => {
    setCountValue({ ...counterState, countValue: 0 });
  };

  return (
    <>
      <Counter
        countValue={counterState.countValue}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleReset={handleReset}
      />
    </>
  );
};

export default HookCounterContainer;

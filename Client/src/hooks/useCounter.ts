import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  const increaseByFive = () => {
    setCount(count + 5);
  };

  const decreaseByFive = () => {
    if (count >= 5) {
      setCount(count - 5);
    }
  };

  const double = () => {
    setCount(count * 2);
  };

  const half = () => {
    setCount(Math.floor(count / 2));
  };

  return {
    count,
    increase,
    decrease,
    reset,
    increaseByFive,
    decreaseByFive,
    double,
    half,
  };
}

export default useCounter;
import useCounter from "../hooks/useCounter";

function Counter() {
  const {
    count,
    increase,
    decrease,
    reset,
    increaseByFive,
    decreaseByFive,
    double,
    half,
  } = useCounter();

  return (
    <>
      <h2>Count: {count}</h2>

      <p>You Clicked {count} Times.</p>

      <button onClick={increase}>
        Increase
      </button>

      <button onClick={decrease}>
        Decrease
      </button>

      <button onClick={reset}>
        Reset
      </button>

      <button onClick={increaseByFive}>
        +5
      </button>

      <button onClick={decreaseByFive}>
        -5
      </button>

      <button onClick={double}>
        Double
      </button>

      <button onClick={half}>
        Half
      </button>
    </>
  );
}

export default Counter;
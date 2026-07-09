import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Count: {count}</h2>
      <p>You CLicked {count} Times.</p>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        Decrease
      </button>

      <button onClick={() => setCount(0)}>
        Reset
                          
      </button>
      <button onClick={() => setCount(count + 5)}> +5
      </button>

          <button
            onClick={() => {
              if (count >= 5) {
                setCount(count - 5);
              }
            }}
          >
            -5
          </button>
          <button onClick={() => setCount(count * 2)}>
            Double
          </button>

          <button onClick={() => setCount(Math.floor(count / 2))}>
            Half
          </button>
    </>
  );
}

export default Counter;
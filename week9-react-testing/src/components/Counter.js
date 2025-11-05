import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div data-testid="counter">
      <h2>Counter Value: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default Counter;

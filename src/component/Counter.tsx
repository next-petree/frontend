import React from "react";
import { useCounter } from "hooks";

const Counter = () => {
  const { count, increment, decrement } = useCounter();
  return (
    <div>
      {count} <button onClick={() => increment()}>up</button>
    </div>
  );
};

export default Counter;

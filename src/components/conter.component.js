import React from "react";

const Counter = props => {
  return (
    <div>
      <div>{props.counter}</div>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </div>
  );
};

export default Counter;

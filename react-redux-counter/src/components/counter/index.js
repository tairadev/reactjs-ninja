import React from 'react';

const Counter = ({ counter, increment, decrement, removeCounter }) => {
  return (
    <div
      style={{ position: 'relative', border: '1px solid black', padding: 10 }}>
      <h1>{counter}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button
        style={{ fontSize: 7, position: 'absolute', right: 10, top: 10 }}
        onClick={removeCounter}>
        X
      </button>
    </div>
  );
};

export default Counter;

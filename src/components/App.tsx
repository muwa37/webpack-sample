import { useState } from 'react';

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);

  return (
    <div>
      <h1>hello world</h1>
      <div>
        <button onClick={decrementCount}>-</button>
        <h2>{count}</h2>
        <button onClick={incrementCount}>+</button>
      </div>
    </div>
  );
};

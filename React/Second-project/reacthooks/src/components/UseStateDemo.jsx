import { useState } from 'react';

function UseStateDemo() {
      const [count, setCount] = useState(0); 

  const incr = () => {
    setCount(count + 1);
  };

  const decr = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>UseStateDemo</h1>
      <button
        type="button"
        className="btn btn-primary mx-3"
        onClick={incr}
      >
        Increment
      </button>
      <button
        type="button"
        className="btn btn-outline-info"
        onClick={decr}
      >
        Decrement
      </button>
      <h2>Count: {count}</h2>
    </>
  );
}

export default UseStateDemo;

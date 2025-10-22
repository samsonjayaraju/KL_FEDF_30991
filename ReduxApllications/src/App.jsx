// src/App.jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "./features/counter/CounterSlice";

export default function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>React 19 + Vite + Redux Toolkit Counter</h2>
      <h1>{count}</h1>

      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Enter amount"
        />
        <button onClick={() => dispatch(incrementByAmount(amount))}>
          Increment by Amount
        </button>
      </div>
    </div>
  );
}
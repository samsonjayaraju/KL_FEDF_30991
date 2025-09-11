import { useState, useEffect } from "react";

function UseBoolean() {
  const [isEligible, setIsEligible] = useState(true);

  return (
    <>
      <h1>UseBoolean Demo</h1>
      <button
        type="button"
        className="btn btn-primary mx-3"
        onClick={toggle}
      ></button>
      <button type="button" className="btn btn-outline-info" onClick={reset}>
        Reset (False)
      </button>
      <h2>Boolean Value: {flag ? "True" : "False"}</h2>
    </>
  );
}

export default UseBoolean;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../../features/counter";

const Counter = () => {
  const count = useSelector((state) => state.counter.value); // counter nama services
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const handleInputChange = (e) => {
    setValue(Number(e.target.value));
  };

  return (
    <>
      <div className="d-flex justify-content-evenly">
        <button aria-label="Increment by Amount" onClick={() => dispatch(incrementByAmount(value))}>
          Increment by Amount
        </button>
        <button aria-label="Increment Value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <input type="number" value={value} onChange={handleInputChange} />
        <span>{count}</span>
        <button aria-label="Decrement Value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default Counter;

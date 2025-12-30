import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DecVal, DevByTen, IncVal } from "../redux/Feature/CounterSlice";

const Del = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="w-50 p-5">
      <h1>{count}</h1>
      <div>
        <button onClick={() => dispatch(IncVal())}>Add</button>
        <button onClick={() => dispatch(DecVal())}>Remove</button>
        <button onClick={() => dispatch(DevByTen())}>DevByTen</button>
      </div>
    </div>
  );
};

export default Del;

import { useState } from "react";

export const useCounter = (initialState) => {
  const [count, setCount] = useState(initialState); //=> [state, setState]

  const handleAdd = (factor) => {
    setCount(count + factor);
  };

  const handleSubs = (factor) => {
    setCount(count - factor);
  };

  return {
    count,
    handleAdd,
    handleSubs
  }
};

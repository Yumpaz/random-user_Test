import React, { useState, useEffect, useMemo } from "react";
import "./styles/UserCount.css";
import { useCounter } from "./hooks/useCounter";

const Count = () => {
  
  const {count, handleAdd, handleSubs} = useCounter(0)

  return (
    <div className="count">
      <h2>Contador de usuarios</h2>
      <h3>{count}</h3>
      <button onClick={() => handleAdd(10)}>Aumentar</button>
      <button onClick={() => handleSubs(10)}>Disminuir</button>
    </div>
  );
};

export default Count;

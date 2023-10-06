import React, { useState, useEffect } from "react";
import "./styles/UserCount.css";

const Count = () => {
  const [count, setCount ] = useState(0); //=> [state, setState]

  useEffect(() => {
    document.title = `El estado tiene ${count}`//Cambiar el titulo de la página con cada cambio de estado
  })

  const handleAdd = () => {
    setCount(count + 1);
  }

  const handleSubs = () => {
    setCount(count - 1);
  }

  return (
    <div className="count">
      <h2>Contador de usuarios</h2>
      <h3>{count}</h3>
      <button onClick={handleAdd}>Aumentar</button>
      <button onClick={handleSubs}>Disminuir</button>
    </div>
  );
};

export default Count;

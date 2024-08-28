import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001"); // Conectando ao servidor WebSocket

const HomePage = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Emitindo o valor inicial ao conectar
    socket.emit("update_count", count);
  }, [count]);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    socket.emit("update_count", newCount); // Emitindo evento de incremento
  };

  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    socket.emit("update_count", newCount); // Emitindo evento de decremento
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={increment}>Adicionar</button>
      <button onClick={decrement}>Subtrair</button>
    </div>
  );
};

export default HomePage;

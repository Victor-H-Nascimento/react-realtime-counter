import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001"); // Conectando ao servidor WebSocket

const CounterPage = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Recebendo atualizações do contador via WebSocket
    socket.on("count_updated", (newCount) => {
      setCount(newCount);
    });

    // Limpar o evento ao desmontar o componente
    return () => socket.off("count_updated");
  }, []);

  return (
    <div>
      <h1>Valor do Contador: {count}</h1>
    </div>
  );
};

export default CounterPage;

const io = require("socket.io")(3001, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

let count = 0;
const newOrders = [];

io.on("connection", (socket) => {
  console.log("New client connected");

  // Enviar o valor inicial ao cliente
  socket.emit("count_updated", count);

  socket.on("update_count", (newCount) => {
    count = newCount;
    io.emit("count_updated", count); // Atualizar todos os clientes
  });

  socket.on("update_new-orders", (order) => {
    newOrders.push(order);
    io.emit("notify-new-orders", newOrders); // Atualizar todos os clientes
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

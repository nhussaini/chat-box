const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const router = require("./router");

const app = express();
// const io = require("socket.io")(server, {
//   cors: {
//     origin: "*",
//   },
// });

// app.use(
//   cors({
//     origin: "*",
//   })
// );
const server = http.createServer(app);
// const io = socketio(server);
//we need to change the above code the the below code for cors to work
const io = socketio(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});
// io.set("origins", "http://localhost:3000");

io.on("connection", (socket) => {
  console.log("We have a new connection!!");

  socket.on("join", ({ name, room }) => {
    console.log(name, room);
  });

  socket.on("disconnect", () => {
    console.log("User left");
  });
});

app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));

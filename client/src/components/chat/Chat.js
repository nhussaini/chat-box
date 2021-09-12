import React, { useState, useEffect } from "react";
// import queryString from "query-string";
// import io from "socket.io-client";
import { io } from "socket.io-client";
// const io = require("socket.io-client");

let socket;

const queryString = require("query-string");

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);
    setName(name);
    setRoom(room);

    socket.emit("join", { name, room });

    return () => {
      socket.emit("disconnect");

      socket.off();
    };

    // console.log(socket);
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  return (
    <div>
      <h1>chatroom</h1>
    </div>
  );
};

export default Chat;

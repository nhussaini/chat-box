import React, { useState, useEffect } from "react";
// import queryString from "query-string";
import io from "socket.io-client";

const queryString = require("query-string");

const Chat = ({ location }) => {
  useEffect(() => {
    const data = queryString.parse(location.search);
    console.log(data);
  });

  return (
    <div>
      <h1>chatroom</h1>
    </div>
  );
};

export default Chat;

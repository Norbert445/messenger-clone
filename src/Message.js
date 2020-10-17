import React from "react";
import "./Message.css";

function Message(props) {
  return (
    <div>
      <h2>{props.text}</h2>
    </div>
  );
}

export default Message;

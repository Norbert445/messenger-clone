import React, { useState } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Message.js";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  console.log({ messages });

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>Messenger clone</h1>
      <form>
        <FormControl>
          <InputLabel>Enter message...</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
          <Button
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            Send message
          </Button>
        </FormControl>
      </form>

      {/* messages */}
      {messages.map((message) => (
        <Message text={message} />
      ))}
    </div>
  );
}

export default App;

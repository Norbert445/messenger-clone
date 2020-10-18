import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Message.js";
import db from "./firebase.js";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Zadajte svoje meno"));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("messages").add({
      username: username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="App">
      <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Facebook_Messenger-512.png" />
      <h1>Messenger clone by Norbert Macsali</h1>
      <h2>Vitajte {username}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          <InputLabel>Zadajte spravu</InputLabel>
          <Input
            className="app__input"
            placeholder="Zadajte spravu..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;

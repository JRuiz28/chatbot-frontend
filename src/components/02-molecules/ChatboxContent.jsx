import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

import "../../styles/content.css";

function ChatbotContent() {
  // Variables.
  const [log, setLog] = useState([]);
  const [userInput, setUserInput] = useState("");

  // Auto Scroll.
  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  // Handle.
  const handleSendMessage = async () => {
    if (userInput !== "") {
      try {
        const userQuestion = userInput;
        // Clear user input.
        setUserInput("");
        // Add user input into log.
        setLog((log) => [...log, { text: userQuestion, isUser: true }]);

        const { data } = await axios.post(
          `${process.env.REACT_APP_API_URL}/search`,
          { question: userQuestion }
        );

        let botMessage = {};
        botMessage = { text: data, isUser: false };

        // Add bot response into log.
        setLog((log) => [...log, botMessage]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  // Render.
  const welcomeMessageBot = {
    text: `¡Bienvenido al chatbot!`,
  };
  const renderedWelcomeMessage = log && (
    <div className="message incoming">
      <p>{welcomeMessageBot.text}</p>
    </div>
  );

  return (
    <div className="chat-card">
      <div className="chat-header">
        <h2>Chatbot</h2>
      </div>
      <div className="chat-body">
        {renderedWelcomeMessage}
        {/* // Iteration logs. */}
        {log.map((message, index) => (
          <div
            key={index}
            className={message.isUser ? "message outgoing" : "message incoming"}
          >
            <p>{message.text}</p>
          </div>
        ))}
        <div ref={divRef} />
      </div>
      <div className="chat-footer">
        <input
          placeholder="Escribe tu mensaje"
          value={userInput}
          onChange={handleUserInput}
          type="text"
        />
        <button onClick={handleSendMessage}>Enviar</button>
      </div>
    </div>
  );
}

export default ChatbotContent;

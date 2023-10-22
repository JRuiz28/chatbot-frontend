import React, { useState } from 'react';
import ButtonChat from "../01-atoms/ButtonChat";
import ChatbotContent from '../02-molecules/ChatboxContent';

import '../../styles/container.css'

function Chatbot () {
  // Status button chat.
  const [status, setStatus] = useState(false);

  // Handle for knowing status button Chatbot.
  const handleButtonClick = () => {
    setStatus(!status);
  }

  // Rendered.
  const renderedContent = status && (
    <ChatbotContent />
  );

  return (
    <div className="chatbot">
      {/* Floating button */}
      <ButtonChat
        status={status}
        handle={handleButtonClick} />
      {renderedContent}
    </div>
  )
}

export default Chatbot;

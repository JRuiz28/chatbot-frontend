import React from 'react';
import Chatbot from './03-organisms/Chatbot';
import '../styles/app.css';
import dotenv from 'dotenv';
dotenv.config();

function App() {
  return (
    <main className="app-container">
      <Chatbot />
    </main>
  );
}

export default App;

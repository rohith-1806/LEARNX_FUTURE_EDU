import React, { useState, useEffect, useRef } from "react";
import { qaPairs, defaultResponse } from "./knowledgeBase";
import "./LearnXHelper.css";

const initialMessage = {
  id: 1,
  text: "Hi 👋 I am LearnX Helper.\nHow can I help your learning today?",
  sender: "bot",
};

const getBotResponse = (text) => {
  const lowerText = text.toLowerCase();
  
  let bestMatch = null;
  let maxScore = 0;
  
  for (const pair of qaPairs) {
    let score = 0;
    for (const kw of pair.keywords) {
      // Give more weight to exact keyword matches or substring matches
      if (lowerText.includes(kw)) score++;
    }
    if (score > maxScore) {
      maxScore = score;
      bestMatch = pair.answer;
    }
  }
  
  if (bestMatch && maxScore > 0) return bestMatch;
  return defaultResponse;
};

const LearnXHelper = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([initialMessage]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Load state from local storage on mount
  useEffect(() => {
    const savedState = localStorage.getItem("learnx_chat_open");
    if (savedState) {
      setIsOpen(JSON.parse(savedState));
    }
  }, []);

  // Save state to local storage when changed
  useEffect(() => {
    localStorage.setItem("learnx_chat_open", JSON.stringify(isOpen));
  }, [isOpen]);

  // Scroll to bottom on new message
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    const userMsg = {
      id: Date.now(),
      text: inputValue.trim(),
      sender: "user",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate network delay for bot typing
    setTimeout(() => {
      const botResponseText = getBotResponse(userMsg.text);
      const botMsg = {
        id: Date.now() + 1,
        text: botResponseText,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="learnx-helper-container">
      {/* Chat Window */}
      <div className={`learnx-chat-window ${isOpen ? "open" : "closed"}`}>
        <div className="learnx-chat-header">
          <div className="learnx-chat-header-info">
            <div className="learnx-chat-avatar">
              <span className="sparkle-icon">✨</span>
            </div>
            <div>
              <h3 className="learnx-chat-title">🤖 LearnX Helper</h3>
              <p className="learnx-chat-subtitle">AI Learning Assistant • Online</p>
            </div>
          </div>
          <button className="learnx-chat-close" onClick={toggleChat}>
            &times;
          </button>
        </div>

        <div className="learnx-chat-body">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`learnx-chat-message-wrapper ${msg.sender}`}
            >
              <div className={`learnx-chat-message ${msg.sender}`}>
                {msg.text.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="learnx-chat-message-wrapper bot">
              <div className="learnx-chat-message bot typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="typing-text">LearnX Helper is typing...</div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="learnx-chat-input-area">
          <input
            type="text"
            className="learnx-chat-input"
            placeholder="Ask LearnX Helper..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="learnx-chat-send-btn"
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>

      {/* Floating Button Wrapper */}
      <div className="learnx-floating-wrapper">
        <div className="learnx-tooltip">Ask LearnX Helper</div>
        <button className="chatbot-launcher" onClick={toggleChat}>
            <span className="robot-emoji">🤖</span>
            <span className="online-dot"></span>
        </button>
      </div>
    </div>
  );
};

export default LearnXHelper;

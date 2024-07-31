// src/components/Chatbot.js
import React, { useState } from 'react';
import styled from 'styled-components';
import ChatMessage from './ChatMessage'
import { SiChatbot } from "react-icons/si";
import { FiSend } from "react-icons/fi";


// Container to hold the chatbot icon and popup
const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 20px; // Distance from the bottom of the screen
  right: 20px;  // Distance from the right side of the screen
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

// Styled component for the chatbot icon
const ChatbotIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: #007bff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transform: perspective(600px) rotateX(15deg);
  transition: transform 0.3s ease;
  &:hover {
    transform: perspective(600px) rotateX(0deg);
  }
`;

// Styled component for the chat popup
const ChatPopup = styled.div`
  width: 300px;
  border: 1px solid black;
  height: 400px;
  background-color: #EE3810;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: relative;
`;
const ChatHead = styled.p`
  background-color: #d3d3d3;
    padding: 10px;
    display: flex;
    align-items: center;
    padding-left: 52px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    margin: 0;
    font-weight: bold;
    font-size: 1.2em;
`;

const ChatFooter = styled.div`
  display: flex;
    padding: 10px;
    border-top: 2px solid red;
    margin-top: 37px;
    border-bottom-left-radius: 9px;
    border-bottom-right-radius: 9px;
    background-color: #f9f9f9;
`;

const TextButton = styled.button`
  background-color: #6e7e5c;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #5b694d;
  }
`;



const ChatInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: none;
  border-radius: 20px;
  margin-right: 10px;
  background-color: #DDB6D7;
  color: white;
  font-size: 1em;
`;


const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ChatbotContainer>
      <ChatPopup isOpen={isOpen}>
        <ChatHead><SiChatbot style={{marginRight: 10}}/>Chatbot Support</ChatHead>
        <ChatMessage />
        <ChatFooter>
        <ChatInput
          type="text"

          placeholder="Type a message"
        />
        <TextButton><FiSend /></TextButton>
        </ChatFooter>      
      </ChatPopup>
      <ChatbotIcon onClick={togglePopup}>
        💬
      </ChatbotIcon>
    </ChatbotContainer>
  );
};

export default Chatbot;

import React from 'react'
import "./ChatWindow.css"
import ChatMessage from "./ChatMessage"


const ChatWindow = () => {
  return (
    <div className="chat_window">
      <p className="chat_head">Chat</p>
      <ChatMessage />
    </div>
  )
}

export default ChatWindow

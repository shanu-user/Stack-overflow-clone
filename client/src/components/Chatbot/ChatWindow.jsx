import React from 'react'
import "./ChatWindow.css"
import ChatMessage from "./ChatMessage"
import { FaWindowClose } from 'react-icons/fa'

const ChatWindow = ({handleClose}) => {
  return (
    <div className="chat_window">
      <p className="chat_head">
        Chat
        <button onClick={handleClose}><FaWindowClose /></button>
      </p>
      <ChatMessage />
    </div>
  )
}

export default ChatWindow

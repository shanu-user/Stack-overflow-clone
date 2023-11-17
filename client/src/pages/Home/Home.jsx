import React, { useState } from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import '../../App.css'
import Chatbot from '../../components/Chatbot/Chatbot'
import ChatWindow from '../../components/Chatbot/ChatWindow'

const Home = ({slideIn}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleClose = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className='home-container-1'>
      <LeftSidebar slideIn={slideIn}/>
      <div className="home-container-2">
        <HomeMainbar />
        <RightSidebar />
        {isOpen ? <ChatWindow handleClose={handleClose}/> : <Chatbot handleOpen={handleOpen} />}
      </div>
    </div>
  )
}

export default Home

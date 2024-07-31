import './App.css';
import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom';
import {fetchAllQuestions} from './actions/question.js'
import AllRoutes from './AllRoutes'
import Navbar from './components/Navbar/Navbar';
import {fetchAllUsers} from './actions/users'
import dotenv from 'dotenv'
import Chatbot from './components/Chatbot/Chatbot'

dotenv.config()
function App() {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleClose = () => {
    setIsOpen(!isOpen)
  }

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchAllQuestions()) 
    dispatch(fetchAllUsers())
  }, [dispatch])

  const [slideIn, setSlideIn] = useState(true)

  useEffect(()=>{
    if(window.innerWidth <=760){
      setSlideIn(false)
    }
  },[])

  const handleSlideIn = () =>{
    if(window.innerWidth <= 760){
      setSlideIn((state) => !state)
    }
  }
  return (
    <div className="App">
      <Router>
        <Navbar handleSlideIn={handleSlideIn}/>
        <AllRoutes slideIn={slideIn} handleSlideIn={handleSlideIn}/>
        <Chatbot />
      </Router>
    </div>
  );
}

export default App;

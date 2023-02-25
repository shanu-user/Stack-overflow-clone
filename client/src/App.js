import './App.css';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {BrowserRouter} from 'react-router-dom';
import {fetchAllQuestions} from './actions/question.js'
import AllRoutes from './components/AllRoutes'
import Navbar from './components/Navbar/Navbar';
import {fetchAllUsers} from './actions/users'


function App() {


  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchAllQuestions()) 
    dispatch(fetchAllUsers)
  }, [dispatch])
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;

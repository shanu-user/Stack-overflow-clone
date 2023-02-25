import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import './HomeMainbar.css'
import {useSelector} from 'react-redux'
import QuestionList from './QuestionList'


const HomeMainbar = () => {
  const user=123
  const navigate=useNavigate()
  const questionList = useSelector(state=>state.questionsReducer)
  console.log(questionList)
  const redirect=()=>{
    alert("login or signup to ask a question")
    navigate('/Auth')
  }
  // var questionList=[{
  //     _id: 1,
  //     upvotes: 3,
  //     downvotes: 2,
  //     noOfAnswers: 2,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["java","nodejs","reactjs","mongodb"],
  //     userPosted: "mano",
  //     userId: 1,
  //     askedOn: "jan 1",
  //     answer: [{
  //       answerBody: "Answer",
  //       userAnswered: "kumar",
  //       answeredOn: "jan 2",
  //       userId: 2
  //     }]
  // },{
  //   _id: 2,
  //   upvotes: 3,
  //   downvotes: 2,
  //   noOfAnswers: 0,
  //   questionTitle: "What is a function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["javascript","R","python"],
  //   userPosted: "mano",
  //   userId: 1,
  //   askedOn: "jan 1",
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: "kumar",
  //     answeredOn: "jan 2",
  //     userId: 2
  //   }]
  // },{
  //   _id: 3,
  //   upvotes: 3,
  //   downvotes: 2,
  //   noOfAnswers: 0,
  //   questionTitle: "What is a function",
  //   questionBody: "It meant to be",
  //   questionTags: ["javascript","R","python"],
  //   userPosted: "mano",
  //   askedOn: "jan 1",
  //   userId: 1,
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: "kumar",
  //     answeredOn: "jan 2",
  //     userId: 2
  //   }]
  // }]
  const checkAuth=()=>
  {
    if(user===null){
      redirect()
    }
    else{
      navigate('/AskQuestion')
    }
  }
  const location=useLocation()
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button to='/AskQuestion' onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div >
        {
          questionList.data===null ? <h1>Loading ...</h1> : 
          <>
            <p>{questionList.data.length}</p>
            <QuestionList questionsList={questionList}/>
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar

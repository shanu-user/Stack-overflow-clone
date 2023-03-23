import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/comment-alt-solid.svg'
import pen from '../../assets/pen-solid.svg'
import blacklogo from '../../assets/blacklogo.svg'

const Widget = () => {
  return (
    <div className='widget'>
      {/* First section of Widget */}

      <h4>The Overflow Blog</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={pen} width='18' alt='pen'/>
          <p>Observability is key to the future of software (and your DevOps career)</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={pen} width='18' alt='pen'/>
          <p>Podcast 374: How valuable is your screen name?</p>
        </div>
      </div>

      {/* Second section of Widget */}
      
      <h4>Featured on Meta</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={comment} width='18' alt='pen'/>
          <p>Review queue workflows - Final release...</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={comment} width='18' alt='pen'/>
          <p>Please welcome Valued Associates: #958 - V2Blash #959 - SpencerG</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={blacklogo} width='18' alt='pen'/>
          <p>Outdated Answers: accepted answer is now unpinned on Stack Overflow</p>
        </div>
      </div>
      
      {/* Third section of Widget */}
      
      <h4>Hot Meta Posts</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <p>38 Why was this spam flag declined, yet the question marked as spam?</p>
        </div>
        <div className="right-sidebar-div-2">
          <p>20 What is the best course of action when a user has high enough rep to...</p>
        </div>
        <div className="right-sidebar-div-2">
          <p>14 Is a link to the "How to ask" help page a useful comment?</p>
        </div>
      </div>
    </div>
  )
}

export default Widget

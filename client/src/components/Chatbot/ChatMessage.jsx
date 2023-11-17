import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
// import decode from 'jwt-decode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot } from '@fortawesome/free-solid-svg-icons'
import "./ChatMessage.css"
import Avatar from '../Avatar/Avatar'

const ChatMessage = () => {
  const dispatch = useDispatch()
  const Users = useSelector((state) => {
    return state.currentUserReducer
  })
  console.log(Users)
  console.log(Users?.result?.name.charAt(0).toUpperCase())
  return (
    <div className="chat-message">
        <div className="article-message">
            {/* <div className="ai-profile">
                <FontAwesomeIcon icon={faRobot} size="2x"/>
            </div> */}
            <Avatar children={<FontAwesomeIcon icon={faRobot} size="2x"/>} backgroundColor="pink" />
            <p>Hello</p>
        </div>
        <div className="customer-message">
            <Avatar children={Users?.result?.name.charAt(0).toUpperCase()} backgroundColor="pink" px="20" py="20" color="black"/>
            <p>Hello</p>
        </div>
    </div>
  )
}

export default ChatMessage

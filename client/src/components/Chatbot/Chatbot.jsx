import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot } from '@fortawesome/free-solid-svg-icons'
import "./Chatbot.css"


const Chatbot = ({handleOpen}) => {
    
    return (
        <div className="chatbot">
            <FontAwesomeIcon icon={faRobot} onClick={handleOpen} size="2x"/>
        </div>
    )
}

export default Chatbot 
import React from 'react'
import './LeftSidebar.css'
import {NavLink} from 'react-router-dom'
import Globe from '../../assets/Globe.svg'

const LeftSidebar = ({ slideIn ,handleSlideIn}) => {
  const slideInStyle = {
    transform: "translateX(0%)",
  }
  const slideOutStyle = {
    transform: "translateX(-100%)",
  }
  return (
    <div className='left-sidebar' style={slideIn ? slideInStyle : slideOutStyle}>
      <nav className="side-nav">
        <div className="side-nav-div">
          <button onClick={()=>handleSlideIn()} className="nav-btn">
            <NavLink to='/' className='side-nav-links' activeclassname='active'>
                <p>Home</p>
            </NavLink>
          </button>
            <div style={{paddingLeft: "30px"}}>
                <p>PUBLIC</p>
            </div>
            <button onClick={()=>handleSlideIn()} className="nav-btn">
              <NavLink to='/Questions' className='side-nav-links' activeclassname="active" style={{paddingLeft: "0px"}}>
                  <img src={Globe} alt="Globe" />
                  <p style={{paddingLeft: "10px"}}>Questions</p>
              </NavLink>
            </button>
            <button onClick={()=>handleSlideIn()} className="nav-btn">
              <NavLink to='/Tags' className='side-nav-links' activeclassname="active" style={{paddingLeft: "30px"}}>
                  <p>Tags</p>
              </NavLink>
            </button>
            <button onClick={()=>handleSlideIn()} className="nav-btn">
              <NavLink to='/Users' className='side-nav-links' activeclassname="active" style={{paddingLeft: "30px"}}>
                  <p>Users</p>
              </NavLink>
            </button>
        </div>
      </nav>
    </div>
  )
}

export default LeftSidebar

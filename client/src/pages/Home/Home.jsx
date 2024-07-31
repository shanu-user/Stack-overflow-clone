import React, { useState } from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import '../../App.css'




const Home = ({slideIn}) => {
  
  return (
    <div className='home-container-1'>
      <LeftSidebar slideIn={slideIn}/>
      <div className="home-container-2">
        <HomeMainbar />
        <RightSidebar />
        
      </div>
    </div>
  )
}

export default Home

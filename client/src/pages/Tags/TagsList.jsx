import React from 'react'
import './Tags.css'


const TagsList = ({ tag }) => {
  return (
    <div>
      <div className="tag">
        <h4>{tag.tagName}</h4>
        <p>{tag.tagDesc}</p>
      </div>
    </div>
  )
}

export default TagsList

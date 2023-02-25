import React from 'react'

const Avatar = ({children,backgroundColor,
  px,
  py,
  color,
  borderRadius,
  fontSize,
  textAlign,
  cursor}) => {
  const style={
    backgroundColor: backgroundColor,
    padding: `${px}, ${py}`,
    color: color || 'black',
    borderRadius: `${borderRadius}%`,
    fontSize,
    textAlign: "center",
    cursor: cursor || null,
    textDecoration: "none"
  };
  return (
    <div style={style}>
        {children}
    </div>
  )
}

export default Avatar

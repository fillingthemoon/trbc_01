import React from 'react'

const TitleText = (props) => {
  const {
    title,
    text,
    titleStyle,
    textStyle,
  } = props

  return (
    <div>
      <h1 style={titleStyle}>{title}</h1>
      <hr className="title-underline" />
      <p style={textStyle}>{text}</p>
    </div>
  )
}

export default TitleText
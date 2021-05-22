import React from 'react'

const TitleText = (props) => {
  const {
    title,
    text,
    titleStyle,
    textStyle,
    titleClassName,
    textClassName,
  } = props

  return (
    <div>
      <h1 style={titleStyle} className={titleClassName}>{title}</h1>
      <hr className="title-underline" />
      <p style={textStyle} className={textClassName}>{text}</p>
    </div>
  )
}

export default TitleText
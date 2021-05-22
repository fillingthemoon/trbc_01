import React from 'react'

const TitleText = (props) => {
  const {
    title,
    text,
    style
  } = props

  return (
    <div>
      <h1 style={style}>{title}</h1>
      <hr className="title-underline" />
      <p>{text}</p>
    </div>
  )
}

export default TitleText
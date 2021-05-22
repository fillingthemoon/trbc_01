import React from 'react'

const TitleText = (props) => {
  const {
    title,
    text
  } = props

  return (
    <div>
      <h1>{title}</h1>
      <hr className="title-underline" />
      <p>{text}</p>
    </div>
  )
}

export default TitleText
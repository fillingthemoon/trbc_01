import React from 'react'

import {
  Typography
} from 'antd'
const { Title, Text } = Typography

const TitleText = (props) => {
  const {
    title,
    text,
    titleStyle,
    textStyle,
    titleClassName,
    textClassName,
    underlineAlign,
    titleUnderlineStyle,
  } = props

  return (
    <>
      <div style={titleUnderlineStyle}>
        <Title style={{ ...titleStyle }} className={titleClassName}>
          {title}
          <hr className={underlineAlign === 'center' ? 'title-underline-center' : 'title-underline-left'} />
        </Title>
      </div>

      <Text style={textStyle} className={textClassName}>{text}</Text>
    </>
  )
}

export default TitleText
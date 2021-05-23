import React from 'react'

import {
  Typography
} from 'antd'
const { Title, Paragraph } = Typography

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
    <div>
      <div style={titleUnderlineStyle}>
        <Title style={{ ...titleStyle }} className={titleClassName}>
          {title}
          <hr className={underlineAlign === 'center' ? 'title-underline-center' : 'title-underline-left'} />
        </Title>
      </div>

      <Paragraph style={textStyle} className={textClassName}>{text}</Paragraph>
    </div>
  )
}

export default TitleText
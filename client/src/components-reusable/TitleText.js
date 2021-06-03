import React from 'react'

import {
  Typography
} from 'antd'
const { Title, Paragraph } = Typography

const TitleText = (props) => {
  const {
    className,
    title,
    text,
    titleStyle,
    textStyle,
    titleClassName,
    textClassName,
    underlineAlign,
    titleUnderlineStyle,
    underlineStyle,
  } = props

  return (
    <div className={className}>
      <div style={titleUnderlineStyle}>
        <Title style={titleStyle} className={titleClassName}>
          {title}
          <hr style={{ ...underlineStyle, marginTop: '10px', marginBottom: '0' }} className={underlineAlign === 'center' ? 'title-underline-center' : 'title-underline-left'} />
        </Title>
      </div>

      {Array.isArray(text)
        ? text.map((t, i) =>
          <Paragraph key={i} style={textStyle} className={textClassName}>{t}</Paragraph>
        )
        : <Paragraph style={textStyle} className={textClassName}>{text}</Paragraph>
      }
    </div>
  )
}

export default TitleText
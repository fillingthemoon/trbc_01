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
        <Title style={{ ...titleStyle }} className={['typo-title', titleClassName]}>
          {title}
          <hr className={underlineAlign === 'center' ? 'title-underline-center' : 'title-underline-left'} />
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
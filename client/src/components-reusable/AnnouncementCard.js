import React from 'react'

import { Card, Typography } from 'antd'
const { Title, Text, Paragraph, Link } = Typography

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  maxWidth: '550px',
}

const imgStyle = {
  maxHeight: '200px',
  objectFit: 'cover',
}

const linkStyle = {
  wordBreak: 'break-word',
}

const splitLines = (text) => {
  const splitText = text.split('\n')
  const trimmedText = splitText.map(text =>
    text.trim()
  )
  return trimmedText
}

const AnnouncementCard = ({ announcement }) => {
  const {
    title,
    text,
    imageSource,
  } = announcement

  return (
    <Card cover={<img alt="img" src={imageSource} style={imgStyle} />}
      style={cardStyle}
    >
      <Title style={{ fontSize: '1.2rem', margin: '0 0 20px 0' }}>{title}</Title>
      <div>
        {splitLines(text).map((paragraph, i) =>
          <Paragraph key={i} style={{ fontSize: '0.95rem', fontWeight: '300', margin: '0' }}>
            {(() => {
              if (paragraph.substring(0, 8) === 'https://') {
                return <Link href={paragraph} style={linkStyle} target='_blank'>{paragraph}</Link>
              } else if (paragraph === '') {
                return <span>&nbsp;</span>
              } else {
                return paragraph
              }
            })()}
            {console.log(splitLines(text))}
          </Paragraph>
        )}
      </div>
    </Card>
  )
}

export default AnnouncementCard
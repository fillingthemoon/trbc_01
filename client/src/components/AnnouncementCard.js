import React from 'react'

import { Card, Typography } from 'antd'
const { Title, Text, Paragraph, Link } = Typography

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  margin: '40px',
  maxWidth: '600px',
}

const imgStyle = {
  maxHeight: '300px',
  objectFit: 'cover',
}

const linkStyle = {
  wordBreak: 'break-word',
}

const AnnouncementCard = ({ announcement }) => {
  const {
    title,
    texts,
    imageSource,
  } = announcement

  return (
    <Card cover={<img alt="img" src={imageSource} style={imgStyle} />}
      style={cardStyle}
    >
      <Title style={{ fontSize: '1.4rem', margin: '10px 0' }}>{title}</Title>
      {texts.map((text, i) => {
        if (Array.isArray(text)) {
          return (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
              {text.map((line, j) =>
                <Text key={j} style={{ fontSize: '1rem', fontWeight: '300' }}>{line}</Text>
              )}
            </div>
          )
        } else if (text.substring(0, 8) === 'https://') {
          return (
            <Link key={i} href={text} target='_blank' style={linkStyle}>
              {text}
            </Link>
          )
        } else {
          return (
            <Paragraph key={i} style={{ fontSize: '1rem', fontWeight: '300', margin: '30px 0' }}>
              {text}
            </Paragraph>
          )
        }
      }
      )}
    </Card>
  )
}

export default AnnouncementCard
import React from 'react'

import { Row, Card, Typography } from 'antd'
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
    description,
    imageSource,
    urls,
  } = announcement

  return (
    <Row>
      <Card cover={<img alt="img" src={imageSource} style={imgStyle} />}
        style={cardStyle}
      >
        <Title style={{ fontSize: '1.2rem', margin: '10px 0' }}>{title}</Title>
        {description.map((paragraph, i) =>
          <Paragraph key={i} style={{ fontSize: '1rem', fontWeight: '300', margin: '40px 0' }}>
            {paragraph}
          </Paragraph>
        )}
        {urls.map((url, i) =>
          <Link key={i} href={url} target='_blank' style={linkStyle}>
            {url}
          </Link>
        )}
      </Card>
    </Row>
  )
}

export default AnnouncementCard
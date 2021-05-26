import React from 'react'

import TitleText from '../components-reusable/TitleText'

import { splitLines, formatParagraph } from '../helper-files/helperFunctions'

import { Row, Card, Typography } from 'antd'
const { Title, Paragraph } = Typography

import announcementsData from '../data/announcements'

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  margin: '20px',
  maxWidth: '550px',
}

const imgStyle = {
  maxHeight: '200px',
  objectFit: 'cover',
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
      <Title style={{ fontSize: '1.2rem', marginBottom: '20px' }}>{title}</Title>
      <div>
        {splitLines(text).map((paragraph, i) =>
          <Paragraph key={i} style={{ fontSize: '0.95rem', fontWeight: '300', margin: '0' }}>
            {formatParagraph(paragraph)}
          </Paragraph>
        )}
      </div>
    </Card>
  )
}

const titleUnderlineStyle = {
  display: 'flex',
  justifyContent: 'center',
}

const Announcements = () => {
  return (
    <div className='announcements-container'>
      <div>
        <TitleText titleUnderlineStyle={titleUnderlineStyle} title='Announcements' underlineAlign='center' />
        <Row justify='center'>
          {announcementsData.map((announcement, i) => (
            <AnnouncementCard key={i} announcement={announcement} />
          ))}
        </Row>
      </div>
    </div>
  )
}

export default Announcements
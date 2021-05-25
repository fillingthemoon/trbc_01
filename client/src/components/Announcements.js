import React from 'react'

import TitleText from '../components-reusable/TitleText'

import { splitLines, formatParagraph } from '../helper-files/helperFunctions'

import { Row, Card, Typography } from 'antd'
const { Title, Paragraph, Link } = Typography

import { general } from '../helper-files/images'
const { trbcSanc } = general

const announcementsData = [
  {
    title: 'Livestreaming Services',
    text:
      `From 23 May 2021, TRBC will livestream weekly worship services. In view of heightened safe management measures, there will not be any in-person worship services until further notice.
      
      Join us on YouTube at any of the following worship service timings.
      
      https://www.youtube.com/channel/UCLdT5PZRFghsCWlTJPY5VPQ
      
      8.30am - English Service
      10.30am - Chinese/Teochew Service
      5.00pm - Sunset Service (English/Mandarin)`
    ,
    imageSource: trbcSanc
  }
]

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
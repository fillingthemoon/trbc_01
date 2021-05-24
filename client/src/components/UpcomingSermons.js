import React from 'react'

import TitleText from '../components-reusable/TitleText'

import { Card, Typography, Row } from 'antd'
const { Title, Paragraph } = Typography

const upcomingSermonsData = [
  {
    page: 'home',
    section: 'upcoming-sermons',
    title: 'Sermon Title',
    speaker: 'Pastor',
    text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada',
  },
  {
    page: 'home',
    section: 'upcoming-sermons',
    title: 'Sermon Title',
    speaker: 'Pastor',
    text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada',

  },
  {
    page: 'home',
    section: 'upcoming-sermons',
    title: 'Sermon Title',
    speaker: 'Pastor',
    text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada',

  },
]

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  margin: '20px',
  maxWidth: '320px',
}

const UpcomingSermon = ({ upcomingSermon }) => {
  const { title, text, speaker } = upcomingSermon

  return (
    <Card
      style={cardStyle}
    >
      <Title style={{ fontSize: '1.2rem', margin: '0 0 30px 0' }}>{title}</Title>
      <Paragraph style={{ fontSize: '1rem', fontWeight: '300', margin: '0' }}>{text}</Paragraph>
      <Paragraph style={{ fontSize: '1rem', fontWeight: '300', margin: '30px 0 0 0' }}>{speaker}</Paragraph>
    </Card>
  )
}

const titleUnderlineStyle = {
  display: 'flex',
  justifyContent: 'left',
}

const UpcomingSermons = () => {

  return (
    <div className='upcoming-sermons-container'>
      <TitleText
        titleUnderlineStyle={titleUnderlineStyle}
        title='Upcoming Sermons'
        underlineAlign='left'
        titleStyle={{ margin: '0 20px' }}
      />
      <Row justify='center'>
        {upcomingSermonsData.map((upcomingSermon, i) =>
          <UpcomingSermon key={i} upcomingSermon={upcomingSermon} />
        )}
      </Row>
    </div>
  )
}

export default UpcomingSermons
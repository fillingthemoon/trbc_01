import React from 'react'

import TitleText from '../components-reusable/TitleText'

import { Card, Typography, Row } from 'antd'
const { Title, Paragraph, Text } = Typography

const upcomingSermonsData = [
  {
    page: 'home',
    section: 'upcoming-sermons',
    title: 'Pellentesque habitant morbi tristique senectus et',
    speaker: 'Pastor Name',
    text: 'Pellentesque habitant morbi tristique senectus et',
    passage: 'Colossians 2:6-7',
    date: '23 May 2021',
  },
  {
    page: 'home',
    section: 'upcoming-sermons',
    title: 'Pellentesque habitant morbi tristique senectus et',
    speaker: 'Pastor Name',
    text: 'Pellentesque habitant morbi tristique senectus et',
    passage: 'Colossians 2:6-7',
    date: '23 May 2021',

  },
  {
    page: 'home',
    section: 'upcoming-sermons',
    title: 'Pellentesque habitant morbi tristique senectus et',
    speaker: 'Pastor Name',
    text: 'Pellentesque habitant morbi tristique senectus et',
    passage: 'Colossians 2:6-7',
    date: '23 May 2021',

  },
]

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  margin: '20px',
  maxWidth: '320px',
  border: 'none',
}

const UpcomingSermon = ({ upcomingSermon }) => {
  const { title, speaker, date, passage } = upcomingSermon

  return (
    <Card style={cardStyle}>
      <Title style={{ fontSize: '1.2rem', fontWeight: '700', display: 'block' }}>{passage}</Title>
      <Paragraph style={{ fontSize: '1rem', fontWeight: '300', margin: '0' }}>{title}</Paragraph>
      <Text style={{ fontSize: '1rem', fontWeight: '300', display: 'block', margin: '20px 0' }}>{speaker}</Text>
      <Text style={{ fontSize: '1rem', fontWeight: '500', display: 'block' }}>{date}</Text>
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
      <Row justify='left'>
        {upcomingSermonsData.map((upcomingSermon, i) =>
          <UpcomingSermon key={i} upcomingSermon={upcomingSermon} />
        )}
      </Row>
    </div>
  )
}

export default UpcomingSermons
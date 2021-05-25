import React from 'react'

import TitleText from '../components-reusable/TitleText'

import {
  colorPrimaryOrange as iconColor,
} from '../colors'

import { UserOutlined, CalendarOutlined } from '@ant-design/icons'

import { Card, Typography, Row, Divider } from 'antd'
const { Title, Paragraph } = Typography
const { Meta } = Card

const upcomingSermonsData = [
  {
    page: 'home',
    section: 'upcoming-sermons',
    title: 'Pellentesque habitant morbi tristique senectus et',
    speaker: 'Pastor Name',
    text: 'Pellentesque habitant morbi tristique senectus et',
    passage: 'Colossians 2:6-7',
    date: '23 May 2021, 11am',
  },
  {
    page: 'home',
    section: 'upcoming-sermons',
    title: 'Pellentesque habitant morbi tristique senectus et',
    speaker: 'Pastor Name',
    text: 'Pellentesque habitant morbi tristique senectus et',
    passage: 'Colossians 2:6-7',
    date: '23 May 2021, 9:30am',

  },
  {
    page: 'home',
    section: 'upcoming-sermons',
    title: 'Pellentesque habitant morbi tristique senectus et',
    speaker: 'Pastor Name',
    text: 'Pellentesque habitant morbi tristique senectus et',
    passage: 'Colossians 2:6-7',
    date: '23 May 2021, 5pm',

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

const iconStyle = {
  fontSize: '1rem',
  color: iconColor,
}

const UpcomingSermon = ({ upcomingSermon }) => {
  const { title, speaker, date, passage } = upcomingSermon

  return (
    <Card style={cardStyle}>
      <Title style={{ fontSize: '1.2rem', fontWeight: '700', display: 'block' }}>{passage}</Title>
      <Paragraph style={{ fontSize: '1rem', fontWeight: '300', margin: '0' }}>{title}</Paragraph>
      <Divider />
      <Meta
        style={{ textAlign: 'left' }}
        avatar={<UserOutlined style={iconStyle} />}
        description={speaker}
      />
      <br/>
      <Meta
        style={{ textAlign: 'left' }}
        avatar={<CalendarOutlined style={iconStyle} />}
        description={date}
      />
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
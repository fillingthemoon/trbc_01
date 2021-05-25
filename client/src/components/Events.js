import React from 'react'

import TitleText from '../components-reusable/TitleText'

import {
  colorLGray as cardColor,
  colorPrimaryOrange as iconColor,
} from '../colors'

import { CalendarOutlined } from '@ant-design/icons'

import { Card, Typography, Row, Divider } from 'antd'
const { Title, Paragraph } = Typography
const { Meta } = Card

const eventsData = [
  {
    page: 'home',
    section: 'events',
    title: 'Church Retreat 2019',
    text: 'Pellentesque habitant morbi tristique senectus et. Pellentesque habitant morbi. Ntesque habitant morbi tristique sene.',
    date: '21-25 May 2021',
  },
  {
    page: 'home',
    section: 'events',
    title: 'Church Retreat 2019',
    text: 'Pellentesque habitant morbi tristique senectus et. Pellentesque habitant morbi. Ntesque habitant morbi tristique sene.',
    date: '21-25 May 2021',
  },
  {
    page: 'home',
    section: 'events',
    title: 'Church Retreat 2019',
    text: 'Pellentesque habitant morbi tristique senectus et. Pellentesque habitant morbi. Ntesque habitant morbi tristique sene.',
    date: '21-25 May 2021',
  },
  {
    page: 'home',
    section: 'events',
    title: 'Church Retreat 2019',
    text: 'Pellentesque habitant morbi tristique senectus et. Pellentesque habitant morbi. Ntesque habitant morbi tristique sene.',
    date: '21-25 May 2021',
  },
  {
    page: 'home',
    section: 'events',
    title: 'Church Retreat 2019',
    text: 'Pellentesque habitant morbi tristique senectus et. Pellentesque habitant morbi. Ntesque habitant morbi tristique sene.',
    date: '21-25 May 2021',
  },
]

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  margin: '20px',
  maxWidth: '320px',
  border: 'none',
  backgroundColor: cardColor,
}

const iconStyle = {
  fontSize: '1rem',
  color: iconColor,
}

const Event = ({ event }) => {
  const { title, text, date } = event

  return (
    <Card style={cardStyle}>
      <Title style={{ fontSize: '1.2rem', fontWeight: '700', display: 'block' }}>
        {title}
      </Title>
      <Paragraph style={{ fontSize: '1rem', fontWeight: '300', margin: '20px 0' }}>{text}</Paragraph>
      <Divider />
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

const Events = () => {

  return (
    <div className='events-container'>
      <TitleText
        titleUnderlineStyle={titleUnderlineStyle}
        title='Events'
        underlineAlign='left'
        titleStyle={{ margin: '0 20px' }}
      />
      <Row justify='left'>
        {eventsData.map((event, i) =>
          <Event key={i} event={event} />
        )}
      </Row>
    </div>
  )
}

export default Events
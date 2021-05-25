import React from 'react'

import TitleText from '../components-reusable/TitleText'

import {
  colorLGray as cardColor,
  colorPrimaryOrange as iconColor,
} from '../colors'

import { Card, Typography, Row, Divider } from 'antd'
const { Title, Paragraph, Text } = Typography

const eventsData = [
  {
    page: 'home',
    section: 'events',
    title: 'Pellentesque habitant morbi tristique senectus et',
    text: 'Pellentesque habitant morbi tristique senectus et',
    date: '23 May 2021',
  },
  {
    page: 'home',
    section: 'events',
    title: 'Pellentesque habitant morbi tristique senectus et',
    text: 'Pellentesque habitant morbi tristique senectus et',
    date: '23 May 2021',

  },
  {
    page: 'home',
    section: 'events',
    title: 'Pellentesque habitant morbi tristique senectus et',
    text: 'Pellentesque habitant morbi tristique senectus et',
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
  backgroundColor: cardColor,
}

const Event = ({ event }) => {
  const { title, date } = event

  return (
    <Card style={cardStyle}>
      <Title style={{ fontSize: '1.2rem', fontWeight: '700', display: 'block' }}>
        {title}
      </Title>
      <Paragraph style={{ fontSize: '1rem', fontWeight: '300', margin: '0' }}>{title}</Paragraph>
      <Text style={{ fontSize: '1rem', fontWeight: '500', display: 'block', margin: '30px 0 0 0' }}>{date}</Text>
    </Card>
  )
}

const titleUnderlineStyle = {
  display: 'flex',
  justifyContent: 'left',
}

const iconStyle = {
  fontSize: '1.2rem',
  marginRight: '10px',
  color: iconColor,
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
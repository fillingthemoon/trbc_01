import React from 'react'

import { splitLines, formatParagraph } from '../helper-files/helperFunctions'

import TitleText from '../components-reusable/TitleText'

import {
  colorLGray as cardColor,
  colorPrimaryOrange as iconColor,
} from '../helper-files/colors'

import { CalendarOutlined } from '@ant-design/icons'

import { Card, Typography, Row, Divider } from 'antd'
const { Title, Paragraph } = Typography
const { Meta } = Card

const eventsData = [
  {
    page: 'home',
    section: 'events',
    title: 'TRBC - TRBK Carnival',
    text: `Pellentesque habitant morbi tristique senectus et. Pellentesque habitant morbi. habitant morbi tristique sene. Pellentesque habitant morbi tristique senectus et. Ntesque habitant morbi tristique sene. Pellentesque habitant morbi tristique senectus et. Ntesque habitant morbi tristique sene. Pellentesque habitant morbi tristique senectus et.
    
    Ntesque habitant morbi tristique sene. Pellentesque habitant morbi tristique senectus et. Ntesque habitant morbi tristique sene. Pellentesque habitant morbi tristique senectus et. Ntesque habitant morbi tristique sene. Pellentesque habitant morbi tristique senectus et. Ntesque habitant morbi tristique sene. Pellentesque habitant morbi tristique senectus et.`,
    date: '21-25 May 2021',
  },
  {
    page: 'home',
    section: 'events',
    title: 'Combined Church Camp',
    text: `Pellentesque habitant morbi tristique senectus et. Pellentesque habitant morbi. habitant morbi tristique sene. Pellentesque habitant morbi tristique senectus et. Pellentesque habitant morbi tristique senectus et. Ntesque habitant morbi tristique sene. Pellentesque habitant morbi tristique senectus et.
    
    Ntesque habitant morbi tristique sene. Pellentesque habitant morbi tristique senectus et.`,
    date: '21-25 May 2021',
  },
]

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  margin: '20px',
  maxWidth: '450px',
  border: 'none',
  backgroundColor: cardColor,
}

const imgStyle = {
  maxHeight: '300px',
  objectFit: 'cover',
}

const iconStyle = {
  fontSize: '1rem',
  color: iconColor,
}

const Event = ({ event }) => {
  const { title, text, date, imgSrc } = event

  return (
    <Card
      cover={imgSrc && <img src={imgSrc} style={imgStyle} />}
      style={cardStyle}
    >
      <Title style={{ fontSize: '1.8rem', fontWeight: '700', display: 'block', marginBottom: '30px' }}>
        {title}
      </Title>
      <div>
        {splitLines(text).map((paragraph, i) =>
          <Paragraph key={i} style={{ fontSize: '1rem', fontWeight: '300', margin: '0' }}>
            {formatParagraph(paragraph)}
          </Paragraph>
        )}
      </div>
      <Divider />
      <Meta
        style={{ textAlign: 'left' }}
        avatar={<CalendarOutlined style={iconStyle} />}
        description={date}
      />
    </Card >
  )
}

const titleUnderlineStyle = {
  display: 'flex',
  justifyContent: 'left',
}

const Events = () => {

  return (
    <div className='events-container'>
      <div >
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
    </div >
  )
}

export default Events
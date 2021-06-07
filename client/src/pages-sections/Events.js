import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { splitLines, formatParagraph } from '../helper-files/helperFunctions'
import { getWord } from '../helper-files/navBarPagesEnChWords'

import TitleText from '../components-reusable/TitleText'

import {
  colorLGray as cardColor,
  colorPrimaryOrange as iconColor,
} from '../helper-files/colors'

import { FaCalendar } from 'react-icons/fa'

import { getEvents } from '../reducers/eventsReducer'
import { convertName } from '../helper-files/helperFunctions'

import { Card, Typography, Row, Divider } from 'antd'
const { Title, Paragraph } = Typography
const { Meta } = Card

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
        avatar={<FaCalendar style={iconStyle} />}
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
  const dispatch = useDispatch()

  const eventsData = useSelector(state => state.events)
  const language = useSelector(state => state.language)

  useEffect(() => {
    dispatch(getEvents())
  }, [language])

  if (eventsData.length <= 0) { return null }

  return (
    <div className='events-container'>
      <div >
        <TitleText
          titleUnderlineStyle={titleUnderlineStyle}
          title={getWord(convertName('dashed', 'proper', eventsData[0].pageSection), language)}
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
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import TitleText from '../components-reusable/TitleText'

import {
  colorPrimaryOrange as iconColor,
} from '../helper-files/colors'

import { Card, Typography, Row, Divider } from 'antd'
import { FaUser, FaCalendar } from 'react-icons/fa'
const { Title, Paragraph } = Typography
const { Meta } = Card

import { getUpcomingSermons } from '../reducers/upcomingSermonsReducer'
import { convertName } from '../helper-files/helperFunctions'

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  margin: '20px',
  width: '300px',
  border: 'none',
}

const iconStyle = {
  fontSize: '1rem',
  color: iconColor,
}

const UpcomingSermon = ({ upcomingSermon }) => {
  const { title, details } = upcomingSermon
  const { date, time, person, passage } = details

  return (
    <Card style={cardStyle}>
      <Title style={{ fontSize: '1.2rem', fontWeight: '700', display: 'block' }}>{passage}</Title>
      <Paragraph style={{ fontSize: '1rem', fontWeight: '300', margin: '0' }}>{title}</Paragraph>
      <Divider />
      <Meta
        style={{ textAlign: 'left' }}
        avatar={<FaUser style={iconStyle} />}
        description={person}
      />
      <br />
      <Meta
        style={{ textAlign: 'left' }}
        avatar={<FaCalendar style={iconStyle} />}
        description={`${date}, ${time}`}
      />
    </Card>
  )
}

const titleUnderlineStyle = {
  display: 'flex',
  justifyContent: 'left',
}

const UpcomingSermons = () => {
  const dispatch = useDispatch()

  const upcomingSermonsData = useSelector(state => state.upcomingSermons)
  const language = useSelector(state => state.language)

  useEffect(() => {
    dispatch(getUpcomingSermons())
  }, [language])

  if (upcomingSermonsData.length <= 0) { return null }

  return (
    <div className='upcoming-sermons-container'>
      <div>
        <TitleText
          titleUnderlineStyle={titleUnderlineStyle}
          title={language === 'en'
            ? convertName('dashed', 'proper', upcomingSermonsData[0].pageSection)
            : '即将举行的布道'
          }
          underlineAlign='left'
          titleStyle={{ margin: '0 20px' }}
        />
        <Row justify='left'>
          {upcomingSermonsData.map((upcomingSermon, i) =>
            <UpcomingSermon key={i} upcomingSermon={upcomingSermon} />
          )}
        </Row>
      </div>
    </div>
  )
}

export default UpcomingSermons
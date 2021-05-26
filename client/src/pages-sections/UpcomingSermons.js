import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import TitleText from '../components-reusable/TitleText'

import {
  colorPrimaryOrange as iconColor,
} from '../helper-files/colors'

import { UserOutlined, CalendarOutlined } from '@ant-design/icons'
import { Card, Typography, Row, Divider } from 'antd'
const { Title, Paragraph } = Typography
const { Meta } = Card

import { getUpcomingSermons } from '../reducers/upcomingSermonsReducer'

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  margin: '20px',
  maxWidth: '300px',
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
        avatar={<UserOutlined style={iconStyle} />}
        description={person}
      />
      <br />
      <Meta
        style={{ textAlign: 'left' }}
        avatar={<CalendarOutlined style={iconStyle} />}
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

  useEffect(() => {
    dispatch(getUpcomingSermons())
  }, [])

  if (!upcomingSermonsData) { return null }

  return (
    <div className='upcoming-sermons-container'>
      <div>
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
    </div>
  )
}

export default UpcomingSermons
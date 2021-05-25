import React from 'react'

import {
  Card,
  Typography,
  Divider,
} from 'antd'

import { FieldTimeOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons'

import {
  colorPrimaryOrange as iconColor,
} from '../colors'

const { Title, Paragraph, Text } = Typography

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  margin: '40px',
  maxWidth: '400px',
}

const imgStyle = {
  maxHeight: '300px',
  objectFit: 'cover',
}

const detailsStyle = {
  textAlign: 'left',
  margin: '0 20px',
  display: 'flex',
  flexDirection: 'column',
  height: '80px',
  justifyContent: 'space-between'
}

const detailsTextStyle = {
  fontSize: '0.9rem',
  fontWeight: 500,
}

const iconStyle = {
  fontSize: '1.2rem',
  marginRight: '10px',
  color: iconColor,
}

const CardItem = ({ item }) => {
  const { title, text, imgSrc, details } = item

  const { time, location, leader } = details ? details : { time: null, location: null, leader: null }

  return (
    <Card
      cover={<img alt="img" src={imgSrc} style={imgStyle} />}
      style={cardStyle}
    // hoverable
    >
      <Title style={{ fontSize: '1.2rem', margin: '10px 0' }}>{title}</Title>
      <Paragraph style={{ fontSize: '1rem', fontWeight: '300', margin: '20px 0' }}>{text}</Paragraph>
      { details &&
        <>
          <Divider style={{ margin: '20px 0' }} />
          <div style={detailsStyle}>
            {time &&
              <div>
                <FieldTimeOutlined style={iconStyle} />
                <Text style={detailsTextStyle}>{time}</Text>
              </div>
            }
            {location &&
              <div>
                <HomeOutlined style={iconStyle} />
                <Text style={detailsTextStyle}>{location}</Text>
              </div>
            }
            {leader &&
              <div>
                <UserOutlined style={iconStyle} />
                <Text style={detailsTextStyle}>{leader}</Text>
              </div>
            }
          </div>
        </>
      }
    </Card>
  )
}

export default CardItem
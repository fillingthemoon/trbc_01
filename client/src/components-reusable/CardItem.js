import React from 'react'

import {
  Card,
  Typography,
} from 'antd'

import { FieldTimeOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons'

import {
  colorPrimaryOrange,
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
  fontSize: '0.9rem',
  fontWeight: 500,
}

const iconStyle = {
  fontSize: '1.2rem',
  marginRight: '10px',
  color: colorPrimaryOrange,
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
      <Paragraph style={{ fontSize: '1rem', fontWeight: '300', margin: '40px 0' }}>{text}</Paragraph>
      { details &&
        <div style={{ textAlign: 'left', margin: '0 20px' }}>
          {time &&
            <Paragraph>
              <FieldTimeOutlined style={iconStyle} />
              <Text style={detailsStyle}>{time}</Text>
            </Paragraph>
          }
          {location &&
            <Paragraph>
              <HomeOutlined style={iconStyle} />
              <Text style={detailsStyle}>{location}</Text>
            </Paragraph>
          }
          {leader &&
            <Paragraph>
              <UserOutlined style={iconStyle} />
              <Text style={detailsStyle}>{leader}</Text>
            </Paragraph>
          }
        </div>
      }
    </Card>
  )
}

export default CardItem
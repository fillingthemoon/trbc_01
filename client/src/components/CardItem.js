import React from 'react'

import {
  Card,
  Typography,
  Divider,
} from 'antd'

import { FieldTimeOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons'

const { Title, Paragraph, Text } = Typography

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  margin: '40px',
  maxWidth: '500px',
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
  color: '#fa8c16',
}

const CardItem = ({ item }) => {
  const { title, description, image, details } = item

  const { time, location, leader } = details ? details : { time: null, location: null, leader: null }

  return (
    <Card
      cover={<img alt="img" src={image} style={imgStyle} />}
      style={cardStyle}
      // hoverable
    >
      <Title style={{ fontSize: '1.2rem', margin: '10px 0' }}>{title}</Title>
      <Paragraph style={{ fontSize: '1rem', fontWeight: '300', margin: '40px 0' }}>{description}</Paragraph>
      { details &&
        <div style={{ textAlign: 'left', margin: '0 20px' }}>
          <Paragraph>
            <FieldTimeOutlined style={iconStyle} />
            <Text style={detailsStyle}>{time}</Text>
          </Paragraph>
          <Paragraph>
            <HomeOutlined style={iconStyle} />
            <Text style={detailsStyle}>{location}</Text>
          </Paragraph>
          <Paragraph>
            <UserOutlined style={iconStyle} />
            <Text style={detailsStyle}>{leader}</Text>
          </Paragraph>
        </div>
      }
    </Card>
  )
}

export default CardItem
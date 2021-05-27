import React from 'react'

import {
  Card,
  Typography,
  Divider,
} from 'antd'

import { FieldTimeOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons'

import {
  colorPrimaryOrange as iconColor,
} from '../helper-files/colors'

const { Title, Paragraph } = Typography
const { Meta } = Card

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

const iconStyle = {
  fontSize: '1rem',
  color: iconColor,
}

const ItemCard = ({ item }) => {
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
              <>
                <Meta
                  style={{ textAlign: 'left' }}
                  avatar={<FieldTimeOutlined style={iconStyle} />}
                  description={time}
                />
                <br />
              </>
            }
            {location &&
              <>
                <Meta
                  style={{ textAlign: 'left' }}
                  avatar={<HomeOutlined style={iconStyle} />}
                  description={location}
                />
                <br />
              </>
            }
            {leader &&
              <>
                <Meta
                  style={{ textAlign: 'left' }}
                  avatar={<UserOutlined style={iconStyle} />}
                  description={leader}
                />
                <br />
              </>
            }
          </div>
        </>
      }
    </Card>
  )
}

export default ItemCard
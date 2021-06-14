import React from 'react'
import { Link } from 'react-router-dom'

import { general } from '../helper-files/images'
const { fallbackImg } = general

import {
  Card,
  Typography,
} from 'antd'

const { Title, Paragraph } = Typography

const imgStyle = {
  maxWidth: '300px',
  objectFit: 'cover',
  padding: '5%',
}

const itemDisplayStyle = {
  textAlign: 'center',
  margin: '5%',
}

const ItemDisplay = ({ item }) => {
  const { title, text, imgSrc, id, page } = item

  return (
    <Link to={`/${page}/${id}`} style={itemDisplayStyle}>
      <Card
        cover={<img alt="img" src={imgSrc} style={imgStyle} fallback={fallbackImg} />}
        className='item-display'
        hoverable
      >
        <Title style={{ fontSize: '1.6rem', margin: '10px 0' }}>{title}</Title>
        <Paragraph style={{ fontSize: '0.9rem', fontWeight: '300', margin: '20px 0 0 0' }}>{text}</Paragraph>
      </Card>
    </Link>
  )
}

export default ItemDisplay
import React from 'react'
import { Link } from 'react-router-dom'

import { general } from '../helper-files/images'
const { fallbackImg } = general

import {
  Typography,
  Image,
} from 'antd'

const { Title, Paragraph } = Typography

const imgStyle = {
  maxWidth: '300px',
  maxHeight: '300px',
  objectFit: 'scale-down',
}

const itemDisplayStyle = {
  maxWidth: '250px',
  textAlign: 'center',
  margin: '20px 40px',
}

const ItemDisplay = ({ item }) => {
  const { title, text, imgSrc, id, page } = item

  return (
    <Link to={`/${page}/${id}`} style={itemDisplayStyle}>
      <Image alt="img" src={imgSrc} style={imgStyle} preview={false} fallback={fallbackImg}/>
      <Title style={{ fontSize: '1.5rem', margin: '10px 0' }}>{title}</Title>
      <Paragraph style={{ fontSize: '0.9rem', fontWeight: '300', margin: '20px 0' }}>{text}</Paragraph>
    </Link>
  )
}

export default ItemDisplay
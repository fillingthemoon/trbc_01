import React from 'react'

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
  const { title, text, imgSrc } = item

  return (
    <div style={itemDisplayStyle}>
      <Image alt="img" src={imgSrc} style={imgStyle} />
      <Title style={{ fontSize: '1.5rem', margin: '10px 0' }}>{title}</Title>
      <Paragraph style={{ fontSize: '0.9rem', fontWeight: '300', margin: '20px 0' }}>{text}</Paragraph>
    </div>
  )
}

export default ItemDisplay
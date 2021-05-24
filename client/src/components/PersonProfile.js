import React from 'react'

import {
  Typography,
  Avatar,
} from 'antd'
const { Title, Text } = Typography

const mainStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 40px',
  width: '320px',
  textAlign: 'center',
}

const roleStyle = {
  fontWeight: '200',
  fontSize: '1rem',
}

const PersonProfile = (props) => {
  const {
    title, text, imgSrc
  } = props

  return (
    <div style={mainStyle}>
      <Avatar size={150} src={imgSrc} style={{ marginBottom: '40px' }} />

      <Title style={{ fontSize: '1.3rem' }}>
        {title}
      </Title>
      <Text style={roleStyle}>{text}</Text>
    </div>
  )
}

export default PersonProfile
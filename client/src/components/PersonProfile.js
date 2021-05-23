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
  padding: '40px',
  width: '320px',
  textAlign: 'center',
}

const roleStyle = {
  fontWeight: '200',
  fontSize: '1rem',
}

const PersonProfile = (props) => {
  const {
    title, description, image
  } = props

  return (
    <div style={mainStyle}>
      <Avatar size={150} src={image} style={{ marginBottom: '40px' }} />

      <Title style={{ fontSize: '1.3rem' }}>
        {title}
      </Title>
      <Text style={roleStyle}>{description}</Text>
    </div>
  )
}

export default PersonProfile
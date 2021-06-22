import React from 'react'
import { Link } from 'react-router-dom'

import { Card, Typography, Col, Row } from 'antd'

import { AiFillClockCircle } from 'react-icons/ai'
import { FaMapMarkerAlt } from 'react-icons/fa'

import {
  colorPrimaryOrange as iconColor,
  colorLGray,
} from '../helper-files/colors'

const { Title, Text } = Typography

const imgStyle = {
  maxHeight: '250px',
  objectFit: 'cover',
}

const titleStyle = {
  fontSize: '1.5rem',
  textAlign: 'left',
  margin: '15px',
}

const detailsStyle = {
  padding: '10px 20px',
  backgroundColor: colorLGray,
}

const detailItemStyle = {
  display: 'flex',
  alignItems: 'center',
  margin: '6px 0',
  fontWeight: '500',
}

const iconStyle = {
  fontSize: '1rem',
  marginRight: '10px',
  color: iconColor,
}

const ServiceCard = ({ serviceItem }) => {
  const { title, text, imgSrc, details, page, id } = serviceItem
  const { time } = details ? details : { time: null }
  const { location } = details ? details : { location: null }

  return (
    // Technically, Services is on the I'm New page not the Services page, but this is an exception
    <Link to={`/${page}/${id}`}>
      <Card
        cover={<img alt="img" src={imgSrc} style={imgStyle} />}
        hoverable
        className="service-card"
      >
        <Title style={titleStyle}>{title}</Title>
        {details && (
          <Col style={detailsStyle}>
            {time && (
              <Row style={detailItemStyle}>
                <AiFillClockCircle style={iconStyle} />
                <Text>{time}</Text>
              </Row>
            )}
            {location && (
              <Row style={detailItemStyle}>
                <FaMapMarkerAlt style={iconStyle} />
                <Text>{location}</Text>
              </Row>
            )}
          </Col>
        )}
      </Card>
    </Link>
  )
}

export default ServiceCard

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

const styles = {
  link: {
    flex: '1',
  },
  img: {
    maxHeight: '250px',
    objectFit: 'cover',
  },
  title: {
    fontSize: '1.5rem',
    textAlign: 'left',
    margin: '15px',
  },
  details: {
    padding: '10px 20px',
    backgroundColor: colorLGray,
  },
  detailItem: {
    display: 'flex',
    alignItems: 'center',
    margin: '6px 0',
    fontWeight: '500',
  },
  icon: {
    fontSize: '1rem',
    marginRight: '10px',
    color: iconColor,
  },
}

const ServiceCard = ({ serviceItem }) => {
  const { title, text, imgSrc, details, page, id } = serviceItem
  const { time } = details ? details : { time: null }
  const { location } = details ? details : { location: null }

  return (
    // Technically, Services is on the I'm New page not the Services page, but this is an exception
    <Link to={`/${page}/${id}`} style={styles.link}>
      <Card
        cover={imgSrc !== 'null' && <img alt="img" src={imgSrc} style={styles.img} />}
        hoverable
        className="service-card"
      >
        <Title style={styles.title}>{title}</Title>
        {details && (
          <Col style={styles.details}>
            {time && (
              <Row style={styles.detailItem}>
                <AiFillClockCircle style={styles.icon} />
                <Text>{time}</Text>
              </Row>
            )}
            {location && (
              <Row style={styles.detailItem}>
                <FaMapMarkerAlt style={styles.icon} />
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

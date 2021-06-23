import React from 'react'
import { Link } from 'react-router-dom'

import { Card, Typography, Col, Row } from 'antd'

import {
  colorPrimaryOrange as iconColor,
  colorLGray,
} from '../helper-files/colors'

const { Title, Text } = Typography

const styles = {
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

const ServiceCard = ({ resourceLibraryItem }) => {
  const { title, text, imgSrc, url } = resourceLibraryItem

  return (
    // Technically, Services is on the I'm New page not the Services page, but this is an exception
    <Link href="www.youtube.com">
      <Card
        cover={<img alt="img" src={imgSrc} style={styles.img} />}
        hoverable
        className="service-card"
      >
        <Title style={styles.title}>{title}</Title>(
        <Col style={styles.details}>
        </Col>
        )
      </Card>
    </Link>
  )
}

export default ServiceCard

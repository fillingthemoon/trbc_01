import React from 'react'
import { Link } from 'react-router-dom'

import { Card, Typography, Col, Row } from 'antd'

import { AiFillClockCircle } from 'react-icons/ai'
import { FaMapMarkerAlt } from 'react-icons/fa'

import {
  colorPrimaryOrange as iconColor,
  colorLGray,
} from '../helper-files/colors'

const { Title, Text, Paragraph } = Typography

const styles = {
  card: {
    width: '330px',
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
  summary: {
    fontSize: '0.9rem',
    fontWeight: '300',
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
  const { title, text, summary, imgSrc, details, page, id } = serviceItem
  const { time } = details ? details : { time: null }
  const { location } = details ? details : { location: null }

  return (
    // Technically, Services is on the I'm New page not the Services page, but this is an exception
    <Link to={`/${page}/${id}`}>
      <Card
        cover={
          imgSrc !== 'null' && <img alt="img" src={imgSrc} style={styles.img} />
        }
        hoverable
        className="service-card"
        style={styles.card}
      >
        <Title style={styles.title}>{title}</Title>
        <Paragraph style={styles.summary}>{summary}</Paragraph>
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

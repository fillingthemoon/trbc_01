import React from 'react'

import Banner from '../components-reusable/Banner'
import TitleText from '../components-reusable/TitleText'

import { general } from '../helper-files/images'
const { exterior } = general

import { convertName } from '../helper-files/helperFunctions'

import { Row, Col, Typography, Image } from 'antd'

const { Paragraph, Text } = Typography

import { AiFillClockCircle } from 'react-icons/ai'
import { FaMapMarkerAlt, FaUser } from 'react-icons/fa'

import {
  colorPrimaryOrange as iconColor,
  colorLGray,
} from '../helper-files/colors'

const styles = {
  rowStyle: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
  },
  infoImg: {
    display: 'flex',
    justifyContent: 'flex',
    margin: '20px',
  },
  img: {
    maxWidth: '400px',
    maxHeight: '500px',
    objectFit: 'scale-down',
  },
  infoCol: {
    maxWidth: '550px',
    margin: '20px',
  },
  details: {
    margin: '30px 0 0 0',
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

const IndividualPage = ({ item }) => {
  const { title, text, details, imgSrc } = item

  // Services, Outreach, Missions
  const { time } = details ? details : { time: null }
  const { location } = details ? details : { location: null }
  const { person } = details ? details : { person: null }

  // Ministry/Job Openings
  const { type } = details ? details : { type: null }
  const { keyResponsibilities } = details
    ? details
    : { keyResponsibilities: null }
  const { requirements } = details ? details : { requirements: null }

  return (
    <>
      <Banner
        imageTitlePairs={[
          {
            title: item.service
              ? item.service
              : convertName('dashed', 'proper', item.pageSection),
            image: exterior,
          },
        ]}
      />
      <Row justify="center" style={styles.rowStyle}>
        <Col style={styles.infoImg}>
          <Image alt="img" src={imgSrc} style={styles.img} preview={false} />
        </Col>
        <Col style={styles.infoCol}>
          <TitleText title={title} underlineAlign="left" />
          <Paragraph style={{ fontSize: '0.9rem', fontWeight: '400' }}>
            {text}
          </Paragraph>
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
              {person && (
                <Row style={styles.detailItem}>
                  <FaUser style={styles.icon} />
                  <Text>{person}</Text>
                </Row>
              )}
              {type && (
                <Row style={styles.detailItem}>
                  <Text>Type: {type}</Text>
                </Row>
              )}
              {keyResponsibilities && (
                <Row style={styles.detailItem}>
                  <Paragraph>{keyResponsibilities}</Paragraph>
                </Row>
              )}
              {requirements && (
                <Row style={styles.detailItem}>
                  <Paragraph>{requirements}</Paragraph>
                </Row>
              )}
            </Col>
          )}
        </Col>
      </Row>
    </>
  )
}

export default IndividualPage

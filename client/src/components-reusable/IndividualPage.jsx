import React from 'react'
import { Redirect } from 'react-router-dom'

import Banner from '../components-reusable/Banner'
import TitleText from '../components-reusable/TitleText'

import { InfoBanner } from '../pages/MinistryJobOpenings'

import { general } from '../helper-files/images'
const { exterior } = general

import { convertName } from '../helper-files/helperFunctions'
import { splitLines, formatParagraph } from '../helper-files/helperFunctions'

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
    maxWidth: '600px',
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
  label: {
    fontWeight: '700',
  },
  mjoRow: {
    marginBottom: '1rem',
  },
  mjoListItem: {
    margin: '0',
  },
}

const IndividualPage = ({ item }) => {
  const href = window.location.href.split('/')
  const pageUrl = href[4]

  if (!item) {
    return <Redirect to="/page-not-found" />
  }

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
      {pageUrl === 'ministry-job-openings' && <InfoBanner />}
      <Row justify="center" style={styles.rowStyle}>
        <Col style={styles.infoImg}>
          {imgSrc !== 'null' && (
            <Image alt="img" src={imgSrc} style={styles.img} preview={false} />
          )}
        </Col>
        <Col style={styles.infoCol}>
          <TitleText title={title} underlineAlign="left" />
          <Paragraph style={{ fontSize: '0.9rem', fontWeight: '400' }}>
            {text}
          </Paragraph>
          {details && (
            <Col style={styles.details}>
              {/* Services, Outreach, Missions fields */}
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

              {/* Ministry/Job Openings fields */}
              {type && (
                <Row style={styles.mjoRow}>
                  <Text style={styles.label}>Type:&nbsp;</Text>
                  <Text>{type}</Text>
                </Row>
              )}
              {keyResponsibilities && (
                <Row style={{ ...styles.mjoRow, display: 'block' }}>
                  <Text style={styles.label}>Key Responsibilities:</Text>
                  <ul>
                    {splitLines(keyResponsibilities).map((paragraph, i) => (
                      <li key={i} style={styles.mjoListItem}>
                        {formatParagraph(paragraph)}
                      </li>
                    ))}
                  </ul>
                </Row>
              )}
              {requirements && (
                <Row style={{ ...styles.mjoRow, display: 'block' }}>
                  <Text style={styles.label}>Requirements:</Text>
                  <ul>
                    {splitLines(requirements).map((paragraph, i) => (
                      <li key={i} style={styles.mjoListItem}>
                        {formatParagraph(paragraph)}
                      </li>
                    ))}
                  </ul>
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

import React from 'react'

import Banner from '../components-reusable/Banner'
import TitleText from '../components-reusable/TitleText'

import { general } from '../helper-files/images'
const { exterior } = general

import { convertName } from '../helper-files/helperFunctions'

import {
  Row,
  Col,
  Typography,
  Image,
} from 'antd'

const { Paragraph, Text } = Typography

import { AiFillClockCircle } from 'react-icons/ai'
import { FaMapMarkerAlt, FaUser } from 'react-icons/fa'

import {
  colorPrimaryOrange as iconColor,
  colorLGray,
} from '../helper-files/colors'

const rowStyle = {
  margin: '20px',
}

const infoImgStyle = {
  display: 'flex',
  justifyContent: 'flex',
  margin: '20px',
}

const imgStyle = {
  maxWidth: '400px',
  maxHeight: '500px',
  objectFit: 'scale-down',
}

const infoColStyle = {
  maxWidth: '400px',
  margin: '20px',
}

const detailsStyle = {
  margin: '30px 0',
  padding: '10px 20px',
  backgroundColor: colorLGray,
}

const detailItemStyle = {
  display: 'flex',
  alignItems: 'center',
  margin: '6px 0',
  fontWeight: '500px',
}

const iconStyle = {
  fontSize: '1rem',
  marginRight: '10px',
  color: iconColor,
}

const IndividualPage = ({ item }) => {
  const { title, text, details, imgSrc } = item
  const { time } = details ? details : { time: null }
  const { location } = details ? details : { location: null }
  const { person } = details ? details : { person: null }

  return (
    <>
      <Banner imageTitlePairs={[{
        title: convertName('dashed', 'proper', item.sectionName),
        image: exterior
      }]} />
      <Row justify='center' style={rowStyle}>
        <Col style={infoImgStyle}>
          <Image alt="img" src={imgSrc} style={imgStyle} preview={false} />
        </Col>
        <Col style={infoColStyle}>
          <TitleText
            title={title}
            underlineAlign='left' />
          <Paragraph style={{ fontSize: '0.9rem', fontWeight: '400' }}>{text}</Paragraph>
          {details &&
            <Col style={detailsStyle}>
              {time &&
                <div style={detailItemStyle}>
                  <AiFillClockCircle style={iconStyle} />
                  <Text>{time}</Text>
                </div>
              }
              {location &&
                <div style={detailItemStyle}>
                  <FaMapMarkerAlt style={iconStyle} />
                  <Text>{location}</Text>
                </div>
              }
              {person &&
                <div style={detailItemStyle}>
                  <FaUser style={iconStyle} />
                  <Text>{person}</Text>
                </div>
              }
            </Col>
          }
        </Col>
      </Row>
    </>
  )
}

export default IndividualPage
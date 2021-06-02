import React from 'react'

import Banner from '../components-reusable/Banner'

import { general } from '../helper-files/images'
const { exterior } = general

import { convertName } from '../helper-files/helperFunctions'

import {
  Row,
  Col,
  Typography,
  Image,
} from 'antd'

const { Title, Paragraph } = Typography

import { FieldTimeOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons'

import {
  colorPrimaryOrange as iconColor,
} from '../helper-files/colors'

const imgStyle = {
  width: '400px',
  maxHeight: '500px',
  objectFit: 'scale-down',
}

const detailsStyle = {
  textAlign: 'left',
  margin: '0 20px',
  display: 'flex',
  flexDirection: 'column',
  height: '80px',
  justifyContent: 'space-between'
}

const iconStyle = {
  fontSize: '1rem',
  color: iconColor,
}

const rowStyle = {
  margin: '70px',
}

const IndividualPage = ({ item }) => {
  const { title, text, details, imgSrc } = item
  const { time, location, person } = details ? details : { time: null, location: null, person: null }

  return (
    <>
      <Banner imageTitlePairs={[
        { title: convertName('dashed', 'proper', item.sectionName), image: exterior }
      ]} />
      <Row justify='center' style={rowStyle}>
        <Col>
          <Image alt="img" src={imgSrc} style={imgStyle} preview={false} />
        </Col>
        <Col>
          <Title style={{ fontSize: '1.5rem', margin: '10px 0' }}>{title}</Title>
          <Paragraph style={{ fontSize: '0.9rem', fontWeight: '300', margin: '20px 0' }}>{text}</Paragraph>
          {details &&
            <div style={detailsStyle}>
              {time &&
                <div>
                  <FieldTimeOutlined style={iconStyle} />
                  {time}
                </div>
              }
              {location &&
                <div>
                  <HomeOutlined style={iconStyle} />
                  {location}
                </div>
              }
              {person &&
                <div>
                  <UserOutlined style={iconStyle} />
                  {person}
                </div>
              }
            </div>
          }
        </Col>
      </Row>
    </>
  )
}

export default IndividualPage
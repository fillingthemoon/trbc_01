import React from 'react'
import { Link } from 'react-router-dom'

import { convertName } from '../helper-files/helperFunctions'

import {
  Card,
  Divider,
} from 'antd'

import {
  FaCampground,
  FaHistory,
  FaStar,
  FaPeopleCarry,
  FaHandsHelping,
  FaChurch,
  FaHome,
} from 'react-icons/fa'

import { BsFillPeopleFill } from 'react-icons/bs'
import { BiWorld } from 'react-icons/bi'
import { HiSpeakerphone } from 'react-icons/hi'

const cardStyle = {
  margin: '10px',
  width: '220px',
  boxShadow: '1px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  border: 'none',
}

const iconStyle = {
  fontSize: '1.3rem',
  marginRight: '20px',
}

const iconDictionary = {
  'cec': <FaCampground style={iconStyle} />,
  'discipleship': <BsFillPeopleFill style={iconStyle} />,
  'home': <FaHome style={iconStyle} />,
  'im-new': <FaStar style={iconStyle} />,
  'missions': <BiWorld style={iconStyle} />,
  'our-history': <FaHistory style={iconStyle} />,
  'our-team': <FaPeopleCarry style={iconStyle} />,
  'outreach': <FaHandsHelping style={iconStyle} />,
  'services': <FaChurch style={iconStyle} />,
  'statement-of-faith': <HiSpeakerphone style={iconStyle} />,
}

const PageCard = (props) => {
  const {
    pageName,
    sectionNames,
  } = props

  return (
    <Card
      style={cardStyle}
      title={
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {iconDictionary[pageName]}
          {convertName('dashed', 'proper', pageName)}
        </div>
      }
    >
      {sectionNames.map((sectionName, i) =>
        <div key={i}>
          <Link to={`/admin/${convertName('proper', 'dashed', sectionName)}`}>
            {convertName('dashed', 'proper', sectionName)}
          </Link>
          {i !== sectionNames.length - 1 && <Divider />}
        </div>
      )}
    </Card >
  )
}

export default PageCard
import React from 'react'
import { Link } from 'react-router-dom'

import { convertName } from '../helper-files/helperFunctions'

import { Card, Divider } from 'antd'

import {
  FaCampground,
  FaHistory,
  FaPeopleCarry,
  FaHandsHelping,
  FaChurch,
  FaBriefcase,
  FaHome,
} from 'react-icons/fa'

import { BsFillPeopleFill } from 'react-icons/bs'
import { BiWorld } from 'react-icons/bi'
import { HiSpeakerphone } from 'react-icons/hi'

const cardStyle = {
  margin: '10px',
  width: '250px',
  boxShadow: '1px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  border: 'none',
}

const iconStyle = {
  fontSize: '1.3rem',
  marginRight: '20px',
}

const iconDictionary = {
  cec: <FaCampground style={iconStyle} />,
  discipleship: <BsFillPeopleFill style={iconStyle} />,
  home: <FaHome style={iconStyle} />,
  'ministry-job-openings': <FaBriefcase style={iconStyle} />,
  missions: <BiWorld style={iconStyle} />,
  'our-history': <FaHistory style={iconStyle} />,
  'our-team': <FaPeopleCarry style={iconStyle} />,
  outreach: <FaHandsHelping style={iconStyle} />,
  services: <FaChurch style={iconStyle} />,
  'statement-of-faith': <HiSpeakerphone style={iconStyle} />,
}

const PageCard = (props) => {
  const { pageName, pageSections } = props

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
      {pageSections.map((pageSection, i) => (
        <div key={i}>
          <Link to={`/admin/${convertName('proper', 'dashed', pageSection)}`}>
            {convertName('dashed', 'proper', pageSection)}
          </Link>
          {i !== pageSections.length - 1 && <Divider />}
        </div>
      ))}
    </Card>
  )
}

export default PageCard

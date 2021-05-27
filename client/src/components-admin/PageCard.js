import React from 'react'
import { Link } from 'react-router-dom'
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

const lowerCaseWords = ['of', 'to']

const convertPageName = (pageName) => {
  const newPageName = pageName.split('-')
    .map(pageNameWord => {
      let firstLetter = pageNameWord[0]
      if (!lowerCaseWords.includes(pageNameWord)) {
        firstLetter = pageNameWord[0].toUpperCase()
      }
      return firstLetter.concat(pageNameWord.substring(1, pageNameWord.length))
    })
    .join(' ')

  return newPageName
}

const convertSectionName = (sectionName) => {
  const newSectionName = sectionName
    .split(' ')
    .join('-')
    .toLowerCase()
    .replace(/['())]/g, '')
    .replace(/[/]/, '-')

  return newSectionName
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

  sectionNames.forEach(sectionName =>
    convertSectionName(sectionName)
  )

  return (
    <Card
      style={cardStyle}
      title={
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {iconDictionary[pageName]}
          {convertPageName(pageName)}
        </div>
      }
    >
      {sectionNames.map((sectionName, i) =>
        <div key={i}>
          <Link to={`/admin/${convertSectionName(sectionName)}`}>
            {sectionName}
          </Link>
          {i !== sectionNames.length - 1 && <Divider />}
        </div>
      )}
    </Card >
  )
}

export default PageCard
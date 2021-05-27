import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Card,
  Divider,
} from 'antd'

import {
  FaCampground,
  FaHistory,
  FaStarOfLife,
  FaPeopleCarry,
  FaHandsHelping,
  FaChurch,
  FaCalendar,
  FaBible
} from 'react-icons/fa'

import { BsFillPeopleFill } from 'react-icons/bs'
import { BiWorld } from 'react-icons/bi'
import { HiSpeakerphone } from 'react-icons/hi'
import { IoDocumentText } from 'react-icons/io5'

const cardStyle = {
  margin: '10px',
  width: '220px',
  boxShadow: '1px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  border: 'none',
}

const iconStyle = {
  fontSize: '1.5rem',
}

const lowerCaseWords = ['of', 'to']

const convertPageName = (pageName) => {
  return pageName.split('-')
    .map(pageNameWord => {
      let firstLetter = pageNameWord[0]
      if (!lowerCaseWords.includes(pageNameWord)) {
        firstLetter = pageNameWord[0].toUpperCase()
      }
      return firstLetter.concat(pageNameWord.substring(1, pageNameWord.length))
    })
    .join(' ')
}

const iconDictionary = {
  'announcements': <HiSpeakerphone style={iconStyle} />,
  'cec': <FaCampground style={iconStyle} />,
  'discipleship': <BsFillPeopleFill style={iconStyle} />,
  'events': <FaCalendar style={iconStyle} />,
  'im-new': <FaStarOfLife style={iconStyle} />,
  'missions': <BiWorld style={iconStyle} />,
  'our-history': <FaHistory style={iconStyle} />,
  'our-team': <FaPeopleCarry style={iconStyle} />,
  'outreach': <FaHandsHelping style={iconStyle} />,
  'services': <FaChurch style={iconStyle} />,
  'statement-of-faith': <IoDocumentText style={iconStyle} />,
  'upcoming-sermons': <FaBible style={iconStyle} />,
}

const PageCard = (props) => {
  const {
    pageName,
    sectionNames,
  } = props

  return (
    <Card
      style={cardStyle}
      title={convertPageName(pageName)}
    >
      {sectionNames.map((sectionName, i) =>
        <div key={i}>
          <Link to='/home'>{sectionName}</Link>
          {i !== sectionNames.length - 1 && <Divider />}
        </div>
      )}
    </Card >
  )
}

export default PageCard
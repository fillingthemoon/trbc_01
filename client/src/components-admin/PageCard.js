import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
} from 'antd'

import {
  FaCampground,
  FaHistory,
  FaStarOfLife,
  FaPeopleCarry,
  FaHome,
  FaHandsHelping,
  FaChurch
} from 'react-icons/fa'

import { BsFillPeopleFill } from 'react-icons/bs'
import { BiWorld } from 'react-icons/bi'
import { HiSpeakerphone } from 'react-icons/hi'


const btnStyle = {
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  margin: '10px',
  padding: '30px 10px',
  width: '200px',
  boxShadow: '1px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  border: 'none',
  borderRadius: '10px',
  lineHeight: 0,
}

const iconStyle = {
  fontSize: '1.3rem',
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
  'cec': <FaCampground style={iconStyle} />,
  'discipleship': <BsFillPeopleFill style={iconStyle} />,
  'home': <FaHome style={iconStyle} />,
  'im-new': <FaStarOfLife style={iconStyle} />,
  'missions': <BiWorld style={iconStyle} />,
  'our-history': <FaHistory style={iconStyle} />,
  'our-team': <FaPeopleCarry style={iconStyle} />,
  'outreach': <FaHandsHelping style={iconStyle} />,
  'services': <FaChurch style={iconStyle} />,
  'statement-of-faith': <HiSpeakerphone style={iconStyle} />,
}

const PageCard = (props) => {
  const {
    pageName
  } = props

  return (
    <Link replace to='/home'>
      <Button
        style={btnStyle}
        icon={iconDictionary[pageName]}
      >
        {convertPageName(pageName)}
      </Button>
    </Link>
  )
}

export default PageCard
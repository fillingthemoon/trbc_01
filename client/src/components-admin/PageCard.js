import React from 'react'
import { Link } from 'react-router-dom'

import {
  colorWhite,
} from '../helper-files/colors'

import {
  Card,
  Typography,
  Divider,
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
import { IoDocumentText } from 'react-icons/io5'

import {
  colorPrimaryOrange as iconColor,
} from '../helper-files/colors'

const { Title } = Typography
const { Meta } = Card

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  margin: '10px',
  width: '200px',
  boxShadow: '4px 2px 10px 0px rgba(0, 0, 0, 0.05)',
  borderRadius: '10px',
}

const iconStyle = {
  marginTop: '24px',
  fontSize: '2rem',
  // color: iconColor,
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
  'statement-of-faith': <IoDocumentText style={iconStyle} />,
}

const PageCard = (props) => {
  const {
    pageName
  } = props

  return (
    <Card
      cover={iconDictionary[pageName]}
      style={cardStyle}
    >
      <Title style={{ fontSize: '1.2rem', margin: '10px 0' }}>{convertPageName(pageName)}</Title>
      <Divider style={{ margin: '20px 0' }} />
      <Button
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          color: colorWhite,
          border: 'none',
          borderRadius: '7px',
        }}
      >
        <Link to='/home'>Edit</Link>
      </Button>
    </Card>
  )
}

export default PageCard
import React from 'react'

import TitleText from '../components-reusable/TitleText'
import AnnouncementCard from '../components-reusable/AnnouncementCard'

import { Row } from 'antd'

import { general } from '../images'
const { trbcSanc } = general

const announcementsData = [
  {
    title: 'Livestreaming Services',
    text:
      `From 23 May 2021, TRBC will livestream weekly worship services. In view of heightened safe management measures, there will not be any in-person worship services until further notice.
      
      Join us on YouTube at any of the following worship service timings.
      
      https://www.youtube.com/channel/UCLdT5PZRFghsCWlTJPY5VPQ
      
      8.30am - English Service
      10.30am - Chinese/Teochew Service
      5.00pm - Sunset Service (English/Mandarin)`
    ,
    imageSource: trbcSanc
  }
]

const titleUnderlineStyle = {
  display: 'flex',
  justifyContent: 'center',
}

const Announcements = () => {
  return (
    <div className='announcements-container'>
      <div>
        <TitleText titleUnderlineStyle={titleUnderlineStyle} title='Announcements' underlineAlign='center' />
        <Row justify='center'>
          {announcementsData.map((announcement, i) => (
            <AnnouncementCard key={i} announcement={announcement} />
          ))}
        </Row>
      </div>
    </div>
  )
}

export default Announcements
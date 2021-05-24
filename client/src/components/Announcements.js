import React from 'react'

import TitleText from '../components-reusable/TitleText'
import AnnouncementCard from '../components-reusable/AnnouncementCard'

import { Row } from 'antd'

const titleUnderlineStyle = {
  display: 'flex',
  justifyContent: 'center',
}

const Announcements = ({ announcementsData }) => {
  return (
    <div className='announcements-container'>
      <TitleText titleUnderlineStyle={titleUnderlineStyle} title='Announcements' underlineAlign='center' />
      <Row justify='center'>
        {announcementsData.map((announcement, i) => (
          <AnnouncementCard key={i} announcement={announcement} />
        ))}
      </Row>
    </div>
  )
}

export default Announcements
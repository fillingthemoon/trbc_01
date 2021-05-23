import React from 'react'

import Banner from '../components/Banner'
import TitleText from '../components/TitleText'
import AnnouncementCard from '../components/AnnouncementCard'

import { Row } from 'antd'

import { general } from '../images'
const { exterior, serviceTiming, paSystem, trbcSanc } = general

const announcementsData = [
  {
    title: 'Livestreaming Services',
    texts: [
      `From 23 May 2021, TRBC will livestream weekly worship services. 
      In view of heightened safe management measures, there will not
      be any in-person worship services until further notice.`,
      'Join us on YouTube at any of the following worship service timings.',
      [
        '8.30am - English Service',
        '10.30am - Chinese/Teochew Service',
        '5.00pm - Sunset Service (English/Mandarin)',
      ],
      'https://www.youtube.com/channel/UCLdT5PZRFghsCWlTJPY5VPQ',
    ],
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
      <TitleText titleUnderlineStyle={titleUnderlineStyle} title='Announcements' underlineAlign='center' />
      <Row justify='center'>
        {announcementsData.map((announcement, i) => (
          <AnnouncementCard key={i} announcement={announcement} />
        ))}
      </Row>
    </div>
  )
}

const Home = () => {
  return (
    <div>
      <Banner imageTitlePairs={[
        { title: 'Welcome', image: exterior },
        { title: 'Welcome', image: serviceTiming },
        { title: 'Welcome', image: paSystem },
      ]} />
      <div className='home'>
        <Announcements />
      </div>
    </div>
  )
}

export default Home

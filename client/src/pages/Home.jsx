import React from 'react'

import Banner from '../components-reusable/Banner'
import ServiceTimings from '../pages-sections/ServiceTimings'
import Announcements from '../pages-sections/Announcements'
import UpcomingSermons from '../pages-sections/UpcomingSermons'
import Events from '../pages-sections/Events'

import { useSelector } from 'react-redux'

import { general } from '../helper-files/images'
const { homeBanner } = general

const Home = () => {
  const language = useSelector((state) => state.language)

  return (
    <div>
      <Banner
        imageTitlePairs={[
          {
            title: language === 'en' ? 'Welcome' : '欢迎',
            image: homeBanner,
            titleFontSize: '3vw',
          },
        ]}
      />
      <div className="home">
        <ServiceTimings />
        {/* <UpcomingSermons /> */}
        <Announcements />
        {/* <Events /> */}
      </div>
    </div>
  )
}

export default Home

import React from 'react'

import Banner from '../components-reusable/Banner'
import Announcements from '../pages-sections/Announcements'
import UpcomingSermons from '../pages-sections/UpcomingSermons'
import Events from '../pages-sections/Events'

import { useSelector } from 'react-redux'

import { general } from '../helper-files/images'
const { exterior, sanctuary01, paSystem } = general

const Home = () => {

  const language = useSelector(state => state.language)

  return (
    <div>
      <Banner imageTitlePairs={[
        {
          title: language === 'en' ? 'Welcome' : '欢迎',
          image: exterior
        },
        {
          title: language === 'en' ? 'Welcome' : '欢迎',
          image: sanctuary01
        },
        {
          title: language === 'en' ? 'Welcome' : '欢迎',
          image: paSystem
        },
      ]} />
      <div className='home'>
        <UpcomingSermons />
        <Announcements />
        <Events />
      </div>
    </div>
  )
}

export default Home

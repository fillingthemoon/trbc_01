import React from 'react'

import Banner from '../components-reusable/Banner'
import Announcements from '../pages-sections/Announcements'
import UpcomingSermons from '../pages-sections/UpcomingSermons'
import Events from '../pages-sections/Events'

import { general } from '../helper-files/images'
const { exterior, sanctuary01, paSystem } = general

const Home = () => {
  return (
    <div>
      <Banner imageTitlePairs={[
        { title: 'Welcome', image: exterior },
        { title: 'Welcome', image: sanctuary01 },
        { title: 'Welcome', image: paSystem },
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

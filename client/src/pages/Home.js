import React from 'react'

import Banner from '../components-reusable/Banner'
import Announcements from '../components/Announcements'
import UpcomingSermons from '../components/UpcomingSermons'
import Events from '../components/Events'

import { general } from '../images'
const { exterior, serviceTiming, paSystem } = general

const Home = () => {
  return (
    <div>
      <Banner imageTitlePairs={[
        { title: 'Welcome', image: exterior },
        { title: 'Welcome', image: serviceTiming },
        { title: 'Welcome', image: paSystem },
      ]} />
      <div className='home'>
        <UpcomingSermons />
        <Events />
        <Announcements />
      </div>
    </div>
  )
}

export default Home

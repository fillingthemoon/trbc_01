import React from 'react'

import Banner from '../components/Banner'

import { general } from '../images'
const { exterior, churchWide, serviceTiming } = general

const Home = () => {
  return (
    <div>
      <Banner imageTitlePairs={[
        { title: 'Welcome!', image: exterior },
        { title: 'Welcome!', image: churchWide },
        { title: 'Welcome!', image: serviceTiming },
      ]} />
    </div>
  )
}

export default Home

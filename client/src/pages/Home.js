import React from 'react'

import Banner from '../components/Banner'

import { general } from '../images'
const { exterior, churchWide, serviceTiming } = general

const Home = () => {
  return (
    <div>
      <Banner imageTitlePairs={[
        { title: 'Thomson Road Baptist Church', image: exterior },
        { title: 'Thomson Road Baptist Church', image: churchWide },
        { title: 'Thomson Road Baptist Church', image: serviceTiming },
      ]} />
    </div>
  )
}

export default Home

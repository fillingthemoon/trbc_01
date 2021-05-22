import React from 'react'

import Banner from '../components/Banner'

import { general } from '../images'
const { exterior, churchWide } = general

const Home = () => {
  return (
    <div>
      <Banner imageTitlePairs={[
        { title: 'Thomson Road Baptist Church', image: exterior },
        { title: 'Thomson Road Baptist Church', image: churchWide },
      ]} />
    </div>
  )
}

export default Home

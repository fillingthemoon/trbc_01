import React, { useState } from 'react'
import Banner from '../components/Banner'
import SectionsTemplate from '../page_templates/SectionsTemplate'

import { general } from '../images'
const { exterior } = general

import missionsData from '../data/missions'

const Outreach = () => {
  return (
    <div>
      <Banner imageTitlePairs={[{ title: 'Missions', image: exterior }]} />
      <SectionsTemplate data={missionsData} displayType='card' />
    </div>
  )
}

export default Outreach

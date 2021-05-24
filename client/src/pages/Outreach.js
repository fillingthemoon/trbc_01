import React from 'react'
import Banner from '../components-reusable/Banner'
import SectionsTemplate from '../page-templates/SectionsTemplate'

import { general } from '../images'
const { churchWide } = general

import outreachData from '../data/outreach'

const Outreach = () => {
  return (
    <div>
      <Banner imageTitlePairs={[{ title: 'Outreach', image: churchWide }]} />
      <SectionsTemplate data={outreachData} displayType='card' />
    </div>
  )
}

export default Outreach

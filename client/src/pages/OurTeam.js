import React from 'react'

import Banner from '../components/Banner'

import SectionsTemplate from '../page_templates/SectionsTemplate'

import { general } from '../images'
const { exterior } = general

import ourTeamData from '../data/our-team'

const OurTeam = () => {
  return (
    <>
      <Banner imageTitlePairs={[{ title: 'Our Team', image: exterior }]} />
      <SectionsTemplate data={ourTeamData} displayType='personProfile' />
    </>
  )
}

export default OurTeam

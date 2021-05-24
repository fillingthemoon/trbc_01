import React from 'react'
import Banner from '../components/Banner'

import AlternatingImageTextTemplate from '../page_templates/AlternatingImageTextTemplate'

import { general } from '../images'
const { exterior } = general

import ourHistoryData from '../data/our-history'

const OurHistory = () => {
  return (
    <>
      <Banner imageTitlePairs={[{ title: 'Our History', image: exterior }]} />
      <AlternatingImageTextTemplate pageContent={ourHistoryData} />
    </>
  )
}

export default OurHistory

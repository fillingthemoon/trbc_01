import React from 'react'
import Banner from '../components-reusable/Banner'

import AlternatingImageTextTemplate from '../page-templates/AlternatingImageTextTemplate'

import { general } from '../images'
const { exterior } = general

import ourHistoryData from '../data/our-history'

const OurHistory = () => {
  return (
    <>
      <Banner imageTitlePairs={[{ title: 'Our History', image: exterior }]} />
      <AlternatingImageTextTemplate data={ourHistoryData} rowType='1' imgTextType='1' colorScheme='1' />
    </>
  )
}

export default OurHistory

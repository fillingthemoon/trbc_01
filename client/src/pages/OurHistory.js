import React from 'react'
import Banner from '../components-reusable/Banner'

import AlternatingImageTextTemplate from '../page-templates/AlternatingImageTextTemplate'

import { general } from '../helper-files/images'
const { exterior } = general

import ourHistoryData from '../data/our-history'

const OurHistory = () => {
  return (
    <>
      <Banner imageTitlePairs={[{ title: 'Our History', image: exterior }]} />
      <AlternatingImageTextTemplate
        data={ourHistoryData}
        primaryColor={0}
        colorLayout={0}
        rowLengthType={0}
        rowLayout={1}
        imgTextLayout={0}
      />
    </>
  )
}

export default OurHistory

import React from 'react'
import Banner from '../components-reusable/Banner'

import AlternatingImageTextTemplate from '../page-templates/AlternatingImageTextTemplate'

import { general } from '../images'
const { exterior } = general

import discipleshipData from '../data/discipleship'

const Discipleship = () => {
  return (
    <>
      <Banner imageTitlePairs={[{ title: 'Discipleship', image: exterior }]} />
      <AlternatingImageTextTemplate
        data={discipleshipData}
        primaryColor={0}
        colorLayout={3}
        rowLengthType={0}
        rowLayout={1}
        imgTextLayout={0}
      />
    </>
  )
}

export default Discipleship

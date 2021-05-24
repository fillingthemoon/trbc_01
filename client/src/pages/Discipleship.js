import React from 'react'
import Banner from '../components/Banner'

import AlternatingImageTextTemplate from '../page_templates/AlternatingImageTextTemplate'

import { general } from '../images'
const { exterior } = general

import discipleshipData from '../data/discipleship'

const Discipleship = () => {
  return (
    <>
      <Banner imageTitlePairs={[{ title: 'Discipleship', image: exterior }]} />
      <AlternatingImageTextTemplate
        pageContent={discipleshipData}
      />
    </>
  )
}

export default Discipleship

import React from 'react'
import Banner from '../components/Banner'

import AlternatingImageTextTemplate2 from '../page_templates/AlternatingImageTextTemplate2'

import { general } from '../images'
const { exterior } = general

import discipleshipData from '../data/discipleship'

const Discipleship = () => {
  return (
    <>
      <Banner imageTitlePairs={[{ title: 'Discipleship', image: exterior }]} />
      <AlternatingImageTextTemplate2
        pageContent={discipleshipData}
      />
    </>
  )
}

export default Discipleship

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
      <AlternatingImageTextTemplate data={discipleshipData} rowType='2' imgTextType='1' colorScheme='3'/>
    </>
  )
}

export default Discipleship

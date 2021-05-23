import React, { useState } from 'react'
import Banner from '../components/Banner'
import SectionsTemplate from '../pageTemplates/SectionsTemplate'

import { general } from '../images'
const { churchWide } = general

const missionsData = [
  {
    sectionName: 'Missions',
    title: 'Myanmar',
    description:
      'The cell group of Chaohua worship began in October 2005, when Preacher Lin Xingcheng and Director Zheng Mei\'e each led a group.',
    image: churchWide
  },
  {
    sectionName: 'Missions',
    title: 'Bintan Island',
    description:
      'The cell group of Chaohua worship began in October 2005, when Preacher Lin Xingcheng and Director Zheng Mei\'e each led a group.',
    image: churchWide
  },
  {
    sectionName: 'Missions',
    title: 'Nepal',
    description:
      'The cell group of Chaohua worship began in October 2005, when Preacher Lin Xingcheng and Director Zheng Mei\'e each led a group.',
    image: churchWide
  },
  {
    sectionName: 'Missions',

    title: 'China',
    description:
      'The cell group of Chaohua worship began in October 2005, when Preacher Lin Xingcheng and Director Zheng Mei\'e each led a group.',
    image: churchWide
  },
  {
    sectionName: 'Missions',
    title: 'India',
    description:
      'The cell group of Chaohua worship began in October 2005, when Preacher Lin Xingcheng and Director Zheng Mei\'e each led a group.',
    image: churchWide,
  },
]

const Outreach = () => {
  const [event, setEvent] = useState('')
  return (
    <div>
      <Banner imageTitlePairs={[{ title: 'Missions', image: churchWide }]} />
      <SectionsTemplate data={missionsData} displayType='card' />
    </div>
  )
}

export default Outreach

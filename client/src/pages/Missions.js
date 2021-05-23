import React, { useState } from 'react'
import Banner from '../components/Banner'
import SectionsTemplate from '../pageTemplates/SectionsTemplate'

import { general } from '../images'
const { exterior } = general

const missionsData = [
  {
    sectionName: 'Missions',
    title: 'Myanmar',
    description:
      'The cell group of Chaohua worship began in October 2005, when Preacher Lin Xingcheng and Director Zheng Mei\'e each led a group.',
    image: exterior
  },
  {
    sectionName: 'Missions',
    title: 'Bintan Island',
    description:
      'The cell group of Chaohua worship began in October 2005, when Preacher Lin Xingcheng and Director Zheng Mei\'e each led a group.',
    image: exterior
  },
  {
    sectionName: 'Missions',
    title: 'Nepal',
    description:
      'The cell group of Chaohua worship began in October 2005, when Preacher Lin Xingcheng and Director Zheng Mei\'e each led a group.',
    image: exterior
  },
  {
    sectionName: 'Missions',

    title: 'China',
    description:
      'The cell group of Chaohua worship began in October 2005, when Preacher Lin Xingcheng and Director Zheng Mei\'e each led a group.',
    image: exterior
  },
  {
    sectionName: 'Missions',
    title: 'India',
    description:
      'The cell group of Chaohua worship began in October 2005, when Preacher Lin Xingcheng and Director Zheng Mei\'e each led a group.',
    image: exterior,
  },
]

const Outreach = () => {
  const [event, setEvent] = useState('')
  return (
    <div>
      <Banner imageTitlePairs={[{ title: 'Missions', image: exterior }]} />
      <SectionsTemplate data={missionsData} displayType='card' />
    </div>
  )
}

export default Outreach

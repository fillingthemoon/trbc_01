import React from 'react'

import Banner from '../components/Banner'

import SectionsTemplate from '../pageTemplates/SectionsTemplate'

import { general, ourTeam } from '../images'
const { exterior } = general
const {
  dongFan,
  ivanChow,
  jasmineLee,
  jennyAng,
  leonardLee,
  psLam,
  revAdrianLim,
  revChang,
  revJerryGoh,
  vincentLai,
  yeoChongNim,
} = ourTeam

const teamData = [
  {
    sectionName: 'Pastoral',
    staff: [
      {
        name: 'Rev. Adrian Lim',
        role: 'Senior Pastor',
        image: revAdrianLim,
      },
      {
        name: 'Rev. Andrew Chang',
        role: 'Interim Pastoral Advisor of \n Teochew/Chinese Congregation',
        image: revChang,
      }, {
        name: 'Rev. Dr. Jerry Goh',
        role: 'Pastor of English Congregation',
        image: revJerryGoh,
      }, {
        name: 'Ps. Lam Yuen Foong',
        role: 'Pastor of Sunset Congregation',
        image: psLam,
      }
    ],
  },

  {
    sectionName: 'Ministry',
    staff: [
      {
        name: 'Mr. Yeo Chong Nim',
        role: 'Outreach Ministry',
        image: yeoChongNim,
      },
      {
        name: 'Ms. Jenny Ang ',
        role: 'Children\'s Outreach Ministry',
        image: jennyAng,
      },
    ],
  },
  {
    sectionName: 'Administrative',
    staff: [
      {
        name: 'Mr. Leonard Lee',
        role: 'Administration Manager',
        image: leonardLee,
      },
      {
        name: 'Mr. Vincent Lai Seck Tong',
        role: 'Administrative Executive (Facilities & Maintenance)',
        image: vincentLai,
      },
      {
        name: 'Ms. Jasmine Lee',
        role: 'Administrative Executive',
        image: jasmineLee,
      },
      {
        name: 'Mr. Dong Fan',
        role: 'Administrative Executive ',
        image: dongFan,
      },
      {
        name: 'Mr. Ivan Chow',
        role: 'Church Caretaker',
        image: ivanChow,
      },
    ],
  },
]

const OurTeam = () => {
  return (
    <>
      <Banner imageTitlePairs={[{ title: 'Our Team', image: exterior }]} />
      <SectionsTemplate data={teamData} displayType='personProfile'/>
    </>
  )
}

export default OurTeam

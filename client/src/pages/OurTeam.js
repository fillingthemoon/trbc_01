import React from 'react'

import TitleText from '../components/TitleText'
import PersonProfile from '../components/PersonProfile'

import {
  Divider, Row, Col
} from 'antd'

import Banner from '../components/Banner'

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
    groupName: 'Pastoral',
    key: 'Pastoral',
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
    groupName: 'Ministry',
    key: 'Ministry',
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
    groupName: 'Administrative',
    key: 'Admin',
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

const TeamSection = ({ section }) => {
  const { groupName, staff } = section

  return (
    <div>
      <TitleText title={groupName} titleClassName='ot-title' underlineAlign='center' />
      <Row className='ot-people'>
        {staff.map((staff, i) =>
          <Col key={staff.name + i}>
            <PersonProfile {...staff} />
          </Col>
        )}
      </Row>
    </div>
  )
}

const OurTeam = () => {
  return (
    <>
      <Banner imageTitlePairs={[{ title: 'Our Team', image: exterior }]} />
      <div className='our-team'>
        {teamData.map((section, i) =>
          <>
            <TeamSection section={section} key={i} />
            {i !== teamData.length - 1 && <Divider />}
          </>
        )}
      </div>
    </>
  )
}

export default OurTeam

import React from 'react'
import { useSelector } from 'react-redux'

import Banner from '../components-reusable/Banner'

import { wordEnToCh } from '../helper-files/navBarPagesEnChWords'

import { general } from '../helper-files/images'
const { exterior } = general

import { Typography } from 'antd'
const { Link: AntdLink } = Typography

const FacilityBooking = () => {
  const language = useSelector(state => state.language)

  return (
    <div>
      <Banner imageTitlePairs={[{
        title: language === 'en' ? 'Facility Booking' : wordEnToCh['Facility Booking'],
        image: exterior
      }]} />
      <div style={{ padding: '50px' }}>
        Room booking system:
        <AntdLink href='https://www.trbc.org.sg/mrbs2/day.php?year=2021&month=05&day=26&area=8&room=23'>
          https://www.trbc.org.sg/mrbs2/day.php?year=2021&month=05&day=26&area=8&room=23
        </AntdLink>
      </div>
    </div>
  )
}

export default FacilityBooking

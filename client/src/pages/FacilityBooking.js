import React from 'react'

import Banner from '../components-reusable/Banner'

import { general } from '../helper-files/images'
const { exterior } = general

import { Typography } from 'antd'
const { Link: AntdLink } = Typography

const FacilityBooking = () => {
  return (
    <div>
      <Banner imageTitlePairs={[{ title: 'Facility Booking', image: exterior }]} />
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

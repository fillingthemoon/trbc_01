import React from 'react'
import { useSelector } from 'react-redux'
import ReactMarkdown from 'react-markdown'

import Banner from '../components-reusable/Banner'

import { getWord } from '../helper-files/translate'

import { general } from '../helper-files/images'
const { exterior } = general

const facilityBookingText = `
# Booking of Sanctuary for Weddings
Thank you for your interest in looking to book our church premises for your wedding. However, due to the current Covid-19 situation, we are suspending new wedding bookings until further notice. Kindly check this page periodically for new updates.
 
&nbsp;

# Room Booking for TRBC Members
Please contact the Church Office for booking of rooms (for TRBC members only).

`

const FacilityBooking = () => {
  const language = useSelector((state) => state.language)

  return (
    <div>
      <Banner
        imageTitlePairs={[
          {
            title: getWord('Facility Booking', language),
            image: exterior,
          },
        ]}
      />
      <div style={{ padding: '50px' }}>
        <ReactMarkdown>{facilityBookingText}</ReactMarkdown>
      </div>
    </div>
  )
}

export default FacilityBooking

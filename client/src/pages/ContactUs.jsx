import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Banner from '../components-reusable/Banner'

import { getWord } from '../helper-files/translate'

import { general } from '../helper-files/images'
const { exterior } = general

const ContactUs = () => {
  const dispatch = useDispatch()

  const discipleshipData = useSelector((state) => state.discipleship)
  const language = useSelector((state) => state.language)

  return (
    <>
      <Banner
        imageTitlePairs={[
          {
            title: getWord('Contact Us', language),
            image: exterior,
          },
        ]}
      />
    </>
  )
}

export default ContactUs

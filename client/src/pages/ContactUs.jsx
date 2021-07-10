import React from 'react'
import { useSelector } from 'react-redux'

import Banner from '../components-reusable/Banner'

import { getWord } from '../helper-files/translate'

import { general } from '../helper-files/images'
const { exterior } = general

import {
  colorLOrange,
} from '../helper-files/colors'

const ContactUs = () => {
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
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScgtxR8htjfGrAmdpbaSteFdQWvB52Cr99CrzkVMN9mqwd8Ww/viewform?embedded=true"
        width="100%"
        height="950"
        style={{ backgroundColor: colorLOrange, padding: '40px 0' }}
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </iframe>
    </>
  )
}

export default ContactUs

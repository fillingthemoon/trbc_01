import React from 'react'
import { useSelector } from 'react-redux'

import Services from '../pages-sections/Services'

import Banner from '../components-reusable/Banner'

import { getWord } from '../helper-files/translate'

import { general } from '../helper-files/images'
const { sanctuary01 } = general

const ImNew = () => {
  const language = useSelector((state) => state.language)

  return (
    <>
      <Banner
        imageTitlePairs={[
          {
            title: getWord('I\'m New', language),
            image: sanctuary01,
          },
        ]}
      />
      <Services />
    </>
  )
}

export default ImNew

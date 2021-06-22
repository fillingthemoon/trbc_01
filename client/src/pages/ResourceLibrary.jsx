import React from 'react'
import { useSelector } from 'react-redux'
import Banner from '../components-reusable/Banner'

import { getWord } from '../helper-files/translate'

import { general } from '../helper-files/images'
const { resourceLibrary } = general

const ResourceLibrary = () => {

  const language = useSelector((state) => state.language)

  return (
    <>
      <Banner
        imageTitlePairs={[
          {
            title: getWord('Resource Library', language),
            image: resourceLibrary,
          },
        ]}
      />

      <div className="">
      </div>
    </>
  )
}

export default ResourceLibrary

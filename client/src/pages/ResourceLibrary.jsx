import React from 'react'
import { useSelector } from 'react-redux'
import Banner from '../components-reusable/Banner'

import { getWord } from '../helper-files/translate'

import { general, resourceLibrary } from '../helper-files/images'
const { libraryStairs } = general
const { trbcYoutube } = resourceLibrary

const resourceLibraryData = [
  {
    title: 'TRBC Youtube Channel',
    text: 'Come join us for our online services on Youtube!',
    url: 'https://www.youtube.com/c/SingaporeThomsonRoadBaptistChurch',
    imgSrc: trbcYoutube,
  },
]

const ResourceLibrary = () => {

  const language = useSelector((state) => state.language)

  return (
    <>
      <Banner
        imageTitlePairs={[
          {
            title: getWord('Resource Library', language),
            image: libraryStairs,
          },
        ]}
      />
      <div className="resource-library-container">

      </div>
    </>
  )
}

export default ResourceLibrary

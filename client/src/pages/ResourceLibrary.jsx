import React from 'react'
import { useSelector } from 'react-redux'
import Banner from '../components-reusable/Banner'

import ResourceLibraryCard from '../components-reusable/ResourceLibraryCard'
import { getWord } from '../helper-files/translate'

import { general, resourceLibrary } from '../helper-files/images'
const { libraryStairs, mountain } = general
const { trbcYoutube } = resourceLibrary

const resourceLibraryData = [
  {
    title: 'TRBC Youtube Channel',
    url: 'https://www.youtube.com/c/SingaporeThomsonRoadBaptistChurch',
    imgSrc: trbcYoutube,
  },
  {
    title: 'How to know Jesus',
    url: 'http://www.gty.org/resources/articles/A335',
    imgSrc: mountain,
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
        <div className="external-resources">
          {resourceLibraryData.map((resourceLibraryItem, i) => (
            <ResourceLibraryCard
              key={i}
              resourceLibraryItem={resourceLibraryItem}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default ResourceLibrary

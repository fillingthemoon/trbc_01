import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components-reusable/Banner'

import ResourceLibraryCard from '../components-reusable/ResourceLibraryCard'
import { getResourceLibrary } from '../reducers/resourceLibraryReducer'
import { getWord } from '../helper-files/translate'

import { general } from '../helper-files/images'
const { libraryStairs } = general

const ResourceLibrary = () => {
  const dispatch = useDispatch()

  const resourceLibraryData = useSelector((state) => state.resourceLibrary)
  const language = useSelector((state) => state.language)

  useEffect(() => {
    dispatch(getResourceLibrary())
  }, [language])

  if (resourceLibraryData.length <= 0) {
    return null
  }

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

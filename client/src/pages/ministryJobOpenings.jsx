import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Banner from '../components-reusable/Banner'
import SectionsTemplate from '../page-templates/SectionsTemplate'

import { getWord } from '../helper-files/translate'

import { ministryJobOpenings } from '../helper-files/images'
const { desk } = ministryJobOpenings

import { getMinistryJobOpenings } from '../reducers/ministryJobOpeningsReducer'

const MinistryJobOpenings = () => {
  const dispatch = useDispatch()

  const ministryJobOpeningsData = useSelector(
    (state) => state.ministryJobOpenings
  )
  const language = useSelector((state) => state.language)

  useEffect(() => {
    dispatch(getMinistryJobOpenings())
  }, [language])

  if (ministryJobOpeningsData.length <= 0) {
    return null
  }

  return (
    <div>
      <Banner
        imageTitlePairs={[
          {
            title: getWord('Ministry/Job Openings', language),
            image: desk,
          },
        ]}
      />
      <div className="">
        <SectionsTemplate data={ministryJobOpeningsData} displayType="card" />
      </div>
    </div>
  )
}

export default MinistryJobOpenings

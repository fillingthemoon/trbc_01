import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Banner from '../components-reusable/Banner'
import SectionsTemplate from '../page-templates/SectionsTemplate'

import { getWord } from '../helper-files/translate'

import { general } from '../helper-files/images'
const { gathering } = general

import { getOutreach } from '../reducers/outreachReducer'

const Outreach = () => {
  const dispatch = useDispatch()

  const outreachData = useSelector((state) => state.outreach)
  const language = useSelector((state) => state.language)

  useEffect(() => {
    dispatch(getOutreach())
  }, [language])

  if (outreachData.length <= 0) {
    return null
  }

  return (
    <div>
      <Banner
        imageTitlePairs={[
          {
            title: getWord('Outreach', language),
            image: gathering,
          },
        ]}
      />
      <SectionsTemplate data={outreachData} displayType="card" />
    </div>
  )
}

export default Outreach

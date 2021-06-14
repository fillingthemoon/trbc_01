import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Banner from '../components-reusable/Banner'
import SectionsTemplate from '../page-templates/SectionsTemplate'

import { getWord } from '../helper-files/translate'

import { general } from '../helper-files/images'
const { gathering } = general

import { getChurchWide } from '../reducers/churchWideReducer'

const ChurchWide = () => {
  const dispatch = useDispatch()

  const churchWideData = useSelector(state => state.churchWide)
  const language = useSelector(state => state.language)

  useEffect(() => {
    dispatch(getChurchWide())
  }, [language])

  if (churchWideData.length <= 0) { return null }

  return (
    <div>
      <Banner imageTitlePairs={[{
        title: getWord('Church Wide', language),
        image: gathering
      }]} />
      <SectionsTemplate data={churchWideData} displayType='card' />
    </div>
  )
}

export default ChurchWide

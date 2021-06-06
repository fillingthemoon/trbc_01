import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Banner from '../components-reusable/Banner'
import SectionsTemplate from '../page-templates/SectionsTemplate'

import { general } from '../helper-files/images'
const { exterior } = general

import { getMissions } from '../reducers/missionsReducer'

const Outreach = () => {
  const dispatch = useDispatch()

  const missionsData = useSelector(state => state.missions)
  const language = useSelector(state => state.language)

  useEffect(() => {
    dispatch(getMissions())
  }, [language])

  if (missionsData.length <= 0) { return null }

  return (
    <div>
      <Banner imageTitlePairs={[{
        title: language === 'en' ? 'Missions' : '任务',
        image: exterior
      }]} />
      <SectionsTemplate data={missionsData} displayType='card' />
    </div>
  )
}

export default Outreach

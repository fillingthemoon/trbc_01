import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Banner from '../components-reusable/Banner'

import SectionsTemplate from '../page-templates/SectionsTemplate'

import { general } from '../helper-files/images'
const { exterior } = general

import { getOurTeam } from '../reducers/ourTeamReducer'

const OurTeam = () => {
  const dispatch = useDispatch()

  const ourTeamData = useSelector(state => state.ourTeam)
  const language = useSelector(state => state.language)

  useEffect(() => {
    dispatch(getOurTeam())
  }, [language])

  if (ourTeamData.length <= 0) { return null }

  return (
    <>
      <Banner imageTitlePairs={[{
        title: language === 'en' ? 'Our Team' : '我们的队伍',
        image: exterior
      }]} />
      <SectionsTemplate data={ourTeamData} displayType='personProfile' />
    </>
  )
}

export default OurTeam

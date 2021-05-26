import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Banner from '../components-reusable/Banner'
import SectionsTemplate from '../page-templates/SectionsTemplate'

import { general } from '../helper-files/images'
const { churchWide } = general

import { getOutreach } from '../reducers/outreachReducer'

const Outreach = () => {
  const dispatch = useDispatch()

  const outreachData = useSelector(state => state.outreach)

  useEffect(() => {
    dispatch(getOutreach())
  }, [])

  if (!outreachData) { return null }

  return (
    <div>
      <Banner imageTitlePairs={[{ title: 'Outreach', image: churchWide }]} />
      <SectionsTemplate data={outreachData} displayType='card' />
    </div>
  )
}

export default Outreach

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Banner from '../components-reusable/Banner'

import AlternatingImageTextTemplate from '../page-templates/AlternatingImageTextTemplate'

import { general } from '../helper-files/images'
const { exterior } = general

import { getOurHistory } from '../reducers/ourHistoryReducer'

const OurHistory = () => {
  const dispatch = useDispatch()

  const ourHistoryData = useSelector(state => state.ourHistory)

  useEffect(() => {
    dispatch(getOurHistory())
  }, [])

  if (ourHistoryData.length <= 0) { return null }

  return (
    <>
      <Banner imageTitlePairs={[{ title: 'Our History', image: exterior }]} />
      <AlternatingImageTextTemplate
        data={ourHistoryData}
        primaryColor={3}
        colorLayout={0}
        rowLengthType={0}
        rowLayout={5}
        imgTextLayout={0}
        divider={true}
      />
    </>
  )
}

export default OurHistory

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AlternatingImageTextTemplate from '../page-templates/AlternatingImageTextTemplate'
import Banner from '../components-reusable/Banner'
import ConnectForm from '../components-reusable/ConnectForm'

import { general } from '../helper-files/images'
const { churchWide } = general

import { getImNew } from '../reducers/imNewReducer'

const ImNew = () => {
  const dispatch = useDispatch()

  const imNewData = useSelector(state => state.imNew)

  useEffect(() => {
    dispatch(getImNew())
  }, [])

  if (!imNewData) { return null }

  return (
    <>
      <Banner imageTitlePairs={[{ title: 'I\'m New', image: churchWide }]} />
      <AlternatingImageTextTemplate data={imNewData}
        primaryColor={2}
        colorLayout={3}
        rowLengthType={0}
        rowLayout={1}
        imgTextLayout={0}
      />
      <ConnectForm />
    </>
  )
}

export default ImNew

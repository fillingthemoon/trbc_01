import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AlternatingImageTextTemplate from '../page-templates/AlternatingImageTextTemplate'
import Banner from '../components-reusable/Banner'
import ConnectForm from '../components-reusable/ConnectForm'

import { getWord } from '../helper-files/translate'

import { general } from '../helper-files/images'
const { gathering } = general

import { getImNew } from '../reducers/imNewReducer'

const ImNew = () => {
  const dispatch = useDispatch()

  const imNewData = useSelector((state) => state.imNew)
  const language = useSelector((state) => state.language)

  useEffect(() => {
    dispatch(getImNew())
  }, [language])

  if (imNewData.length <= 0) {
    return null
  }

  return (
    <>
      <Banner
        imageTitlePairs={[
          {
            title: getWord('I\'m New', language),
            image: gathering,
          },
        ]}
      />
      <AlternatingImageTextTemplate
        data={imNewData}
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

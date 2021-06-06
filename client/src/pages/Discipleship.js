import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Banner from '../components-reusable/Banner'

import { wordEnToCh } from '../helper-files/navBarPagesEnChWords'

import AlternatingImageTextTemplate from '../page-templates/AlternatingImageTextTemplate'

import { general } from '../helper-files/images'
const { exterior } = general

import { getDiscipleship } from '../reducers/discipleshipReducer'

const Discipleship = () => {
  const dispatch = useDispatch()

  const discipleshipData = useSelector(state => state.discipleship)
  const language = useSelector(state => state.language)

  useEffect(() => {
    dispatch(getDiscipleship())
  }, [language])

  if (discipleshipData.length <= 0) { return null }

  return (
    <>
      <Banner imageTitlePairs={[{
        title: language === 'en' ? 'Discipleship' : wordEnToCh['Discipleship'],
        image: exterior
      }]} />
      <AlternatingImageTextTemplate
        data={discipleshipData}
        primaryColor={0}
        colorLayout={0}
        rowLengthType={0}
        rowLayout={2}
        imgTextLayout={0}
      />
    </>
  )
}

export default Discipleship

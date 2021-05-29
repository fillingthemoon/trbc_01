import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Banner from '../components-reusable/Banner'
import ServicesNavBar from '../components/ServicesNavBar'

import { general } from '../helper-files/images'
const { exterior } = general

import AlternatingImageTextTemplate from '../page-templates/AlternatingImageTextTemplate'

import { getServices } from '../reducers/servicesReducer'

const Services = () => {
  const [currService, setCurrService] = useState('tc')
  const [currServiceData, setCurrServiceData] = useState([])

  const dispatch = useDispatch()

  const servicesData = useSelector(state => state.services)

  useEffect(() => {
    dispatch(getServices())
  }, [])

  useEffect(() => {
    const newData = servicesData.filter(serviceData => serviceData.service.substring(0, 2) === currService)
    setCurrServiceData(newData)
  }, [servicesData, currService])

  if (servicesData.length <= 0) { return null }

  return (
    <>
      <Banner imageTitlePairs={[{ title: 'Services', image: exterior }]} />
      <ServicesNavBar currService={currService} setCurrService={setCurrService} />
      <AlternatingImageTextTemplate
        data={currServiceData}
        primaryColor={2}
        colorLayout={3}
        rowLengthType={0}
        rowLayout={1}
        imgTextLayout={0}
      />
    </>
  )
}

export default Services
import React, { useState, useEffect } from 'react'

import Banner from '../components-reusable/Banner'
import ServicesNavBar from '../components/ServicesNavBar'

import { general } from '../helper-files/images'
const { exterior } = general

import servicesData from '../data/services'

import AlternatingImageTextTemplate from '../page-templates/AlternatingImageTextTemplate'

const Services = () => {
  const [currService, setCurrService] = useState('tc')
  const [currServiceData, setCurrServiceData] = useState([])

  useEffect(() => {
    const newData = servicesData.filter(serviceData => serviceData.service.substring(0, 2) === currService)
    setCurrServiceData(newData)
  }, [currService])

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
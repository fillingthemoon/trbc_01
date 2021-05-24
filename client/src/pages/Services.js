import React, { useState, useEffect } from 'react'

import Banner from '../components-reusable/Banner'
import ServicesNavBar from '../components/ServicesNavBar'

import { general } from '../images'
const { exterior } = general

import servicesData from '../data/services'

import AlternatingImageTextTemplate from '../page-templates/AlternatingImageTextTemplate'

const Services = () => {
  const [currService, setCurrService] = useState('tc')
  const [currServiceData, setCurrServiceData] = useState([])

  useEffect(() => {
    const newData = servicesData.filter(serviceData => serviceData.key.substring(0, 2) === currService)
    setCurrServiceData(newData)
  }, [currService])

  return (
    <div>
      <Banner imageTitlePairs={[{ title: 'Services', image: exterior }]} />
      <ServicesNavBar currService={currService} setCurrService={setCurrService} />
      <AlternatingImageTextTemplate data={currServiceData} rowType='3' imgTextType='1'/>
    </div>
  )
}

export default Services
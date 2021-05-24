import React, { useState, useEffect } from 'react'

import Banner from '../components/Banner'
import ServicePage from '../page_templates/ServicePage'
import ServicesNavBar from '../components/ServicesNavBar'

import { general } from '../images'

import servicesData from '../data/services'

const { exterior } = general

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
      <div className='services'>
        <ServicesNavBar currService={currService} setCurrService={setCurrService} />
        <ServicePage currService={currService} currServiceData={currServiceData} />
      </div>
    </div>
  )
}

export default Services
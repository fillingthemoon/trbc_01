import React, { useState, useEffect } from 'react'
import Banner from '../components/Banner'
import ServicePage from '../components/ServicePage'

import { general } from '../images'

import { Menu, Typography } from 'antd'

import servicesData from '../data/EventByServiceData'

const { churchWide } = general
const { Title } = Typography

const ServicesNavBar = (props) => {
  const {
    currService, setCurrService
  } = props

  return (
    <Menu
      mode="horizontal"
      selectedKeys={currService}
      onClick={({ key }) => setCurrService(key)}
      style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}
    >
      <Menu.Item key="tc">
        <Title level={4}>Teo Chew/Chinese Service</Title>
      </Menu.Item>
      <Menu.Item key="en">
        <Title level={4}>English Service</Title>
      </Menu.Item>
      <Menu.Item key="ss">
        <Title level={4}>Sunset Service (Eng & Chi)</Title>
      </Menu.Item>
    </Menu>
  )
}

const Services = () => {
  const [currService, setCurrService] = useState('tc')
  const [currServiceData, setCurrServiceData] = useState([])

  useEffect(() => {
    const newData = servicesData.filter(serviceData => serviceData.key.substring(0, 2) === currService)
    setCurrServiceData(newData)
  }, [currService])

  return (
    <div>
      <Banner imageTitlePairs={[{ title: 'Services', image: churchWide }]} />
      <div className='services'>
        <ServicesNavBar currService={currService} setCurrService={setCurrService} />
        <ServicePage currService={currService} currServiceData={currServiceData} />
      </div>
    </div>
  )
}

export default Services
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Banner from '../components/Banner'
import ServicePage from '../page_templates/ServicePage'

import { general } from '../images'

import { Menu, Typography } from 'antd'

import servicesData from '../data/EventByServiceData'

const { exterior } = general
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
      style={{ display: 'flex', width: '100%', justifyContent: 'space-between', border: 'none' }}
    >
      <Menu.Item key="tc">
        <Link to='/services/tc'>Teo Chew/Chinese Service</Link>
      </Menu.Item>
      <Menu.Item key="en">
        <Link to='/services/en'>English Service</Link>
      </Menu.Item>
      <Menu.Item key="ss">
        <Link to='/services/ss'>Sunset Service (English/Mandarin)</Link>
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
      <Banner imageTitlePairs={[{ title: 'Services', image: exterior }]} />
      <div className='services'>
        <ServicesNavBar currService={currService} setCurrService={setCurrService} />
        <ServicePage currService={currService} currServiceData={currServiceData} />
      </div>
    </div>
  )
}

export default Services
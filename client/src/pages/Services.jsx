import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Banner from '../components-reusable/Banner'
import ServicesNavBar from '../components/ServicesNavBar'
import TitleText from '../components-reusable/TitleText'
import ServiceSectionsTemplate from '../page-templates/ServiceSectionsTemplate'

import { getWord } from '../helper-files/translate'

import { general } from '../helper-files/images'
const { sanctuary01 } = general

import { getServices } from '../reducers/servicesReducer'

import { Col } from 'antd'

const titleUnderlineStyle = {
  display: 'flex',
  justifyContent: 'center',
}

const threeElementsData = [
  {
    title: 'Pellentesque',
    text: 'Donec in arcu lorem.',
  },
  {
    title: 'Porta metus',
    text: 'Nunc leo ipsum, pellentesque porta metus id.',
  },
  {
    title: 'Vestibulum imperdiet',
    text: 'Phasellus a magna vel ligula sagittis posuere vel in eros.',
  },
]

const Services = () => {
  const [currService, setCurrService] = useState('tc')
  const [currServiceData, setCurrServiceData] = useState([])

  const dispatch = useDispatch()

  const servicesData = useSelector((state) => state.services)
  const language = useSelector((state) => state.language)

  useEffect(() => {
    dispatch(getServices())
  }, [language])

  useEffect(() => {
    const newData = servicesData.filter(
      (serviceData) => serviceData.serviceAcronym === currService
    )
    setCurrServiceData(newData)
  }, [servicesData, currService])

  if (servicesData.length <= 0) {
    return null
  }

  return (
    <>
      <Banner
        imageTitlePairs={[
          {
            title: getWord('Services', language),
            image: sanctuary01,
          },
        ]}
      />
      <div className="services">
        <Col className="service-details">
          <TitleText
            titleUnderlineStyle={titleUnderlineStyle}
            title={getWord('Service Details', language)}
            titleStyle={{ textAlign: 'center', fontSize: '2.5rem' }}
            underlineAlign="center"
          />
          <ServicesNavBar
            currService={currService}
            setCurrService={setCurrService}
          />
          <ServiceSectionsTemplate serviceData={currServiceData} />
        </Col>
      </div>
    </>
  )
}

export default Services

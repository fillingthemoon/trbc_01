import React from 'react'

import ServiceCard from '../components-reusable/ServiceCard'

import { Row } from 'antd'

const ServiceSectionsTemplate = ({ serviceData }) => {
  return (
    <Row justify='center' style={{ padding: '50px 0', display: 'flex', justifyContent: 'space-evenly' }}>
      {serviceData.map((serviceItem, i) =>
        <ServiceCard key={i} serviceItem={serviceItem} />
      )}
    </Row>
  )
}

export default ServiceSectionsTemplate

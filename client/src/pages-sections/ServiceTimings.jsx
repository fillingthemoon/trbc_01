import React from 'react'
import { useSelector } from 'react-redux'

import TitleText from '../components-reusable/TitleText'
import serviceTimingsData from './service-timings-data'

import { getWord } from '../helper-files/translate'

import { Table } from 'antd'

const styles = {
  titleUnderline: {
    display: 'flex',
    justifyContent: 'center',
  },
  tableContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}

let dataSource = []
Object.keys(serviceTimingsData).forEach((service, i) => {
  serviceTimingsData[service]['en']['main'].forEach((mainService, j) => {
    const mainFields = serviceTimingsData[service]['en']['main'][j]
    dataSource.push({
      key: `${i}_${j}`,
      mainName: mainFields['name'],
      location: mainFields['location'],
      time: mainFields['time'],
    })
  })
})

console.log(dataSource)

const columns = [
  {
    title: 'Service',
    dataIndex: 'mainName',
    key: 'service',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
  },
]

const ServiceTimings = () => {
  const language = useSelector((state) => state.language)

  return (
    <div className="service-timings-container">
      <TitleText
        titleUnderlineStyle={styles.titleUnderline}
        title={getWord('Service Timings', language)}
        underlineAlign="center"
      />
      <div style={styles.tableContainer}>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          className="table-container"
        />
      </div>
    </div>
  )
}

export default ServiceTimings

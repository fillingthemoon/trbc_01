import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import TitleText from '../components-reusable/TitleText'
import serviceTimingsData from './service-timings-data'

import { getWord } from '../helper-files/translate'
import { colorLOrange, colorPrimaryOrange } from '../helper-files/colors'

import { Table, Button } from 'antd'

const styles = {
  titleUnderline: {
    display: 'flex',
    justifyContent: 'center',
  },
  tableContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    margin: '1.2rem 0',
    backgroundColor: colorLOrange,
    color: colorPrimaryOrange,
    fontSize: '1.2rem',
    borderRadius: '10px',
    border: 'none',
    height: '45px',
    fontWeight: '500',
    letterSpacing: '2px',
  },
  notif: {
    textAlign: 'center',
    padding: '0 10px'
  }
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
        title={getWord('Sunday Worship & Weekday Fellowship', language)}
        underlineAlign="center"
      />
      <div style={styles.tableContainer}>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          className="table"
        />
        <Button style={styles.button}>
          <Link to="/im-new">Find out more</Link>
        </Button>
        <span style={styles.notif}>
          Please note that there may be combined services on certain Sundays.
        </span>
        <span style={styles.notif}>
          Please contact our Church Office (6256 2277) to confirm service
          timings if you&apos;re visiting us for the first time.
        </span>
      </div>
    </div>
  )
}

export default ServiceTimings

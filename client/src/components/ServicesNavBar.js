import React from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import { Menu } from 'antd'

const menuItemStyle = {
  fontSize: '1.3rem',
  fontWeight: '200',
  textAlign: 'center',
}

const ServicesNavBar = (props) => {
  const {
    currService, setCurrService
  } = props

  const isBigScreen = useMediaQuery({ query: '(min-width: 950px)' })

  return (
    <Menu
      mode={isBigScreen ? 'horizontal' : 'vertical'}
      selectedKeys={currService}
      onClick={({ key }) => setCurrService(key)}
      style={{
        display: 'flex',
        flexDirection: isBigScreen ? 'row' : 'column',
        width: '100%',
        justifyContent: 'space-evenly',
        border: 'none'
      }}
    >
      <Menu.Item key='tc' style={menuItemStyle}>
        <Link to='/services/tc'>Teo Chew/Chinese Service</Link>
      </Menu.Item>
      <Menu.Item key='en' style={menuItemStyle}>
        <Link to='/services/en'>English Service</Link>
      </Menu.Item>
      <Menu.Item key='ss' style={menuItemStyle}>
        <Link to='/services/ss'>Sunset Service (English/Mandarin)</Link>
      </Menu.Item>
    </Menu>
  )
}

export default ServicesNavBar
import React from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import { Menu } from 'antd'

const menuItemStyle = {
  fontSize: '1.3rem',
  fontWeight: '300',
  textAlign: 'center',
  border: 'none',
}

const ServicesNavBar = (props) => {
  const { currService, setCurrService } = props

  const isBigScreen = useMediaQuery({ query: '(min-width: 950px)' })

  return (
    <Menu
      mode={isBigScreen ? 'horizontal' : 'vertical'}
      onClick={({ key }) => setCurrService(key)}
      selectedKeys={currService}
      style={{
        display: 'flex',
        flexDirection: isBigScreen ? 'row' : 'column',
        width: '100%',
        justifyContent: 'space-evenly',
        border: 'none',
        margin: '50px 0',
      }}
    >
      <Menu.Item key='tc' style={menuItemStyle}>
        <Link replace to='/services/'>Teo Chew/Chinese Service</Link>
      </Menu.Item>
      <Menu.Item key='en' style={menuItemStyle}>
        <Link replace to='/services/'>English Service</Link>
      </Menu.Item>
      <Menu.Item key='ss' style={menuItemStyle}>
        <Link replace to='/services/'>Sunset Service (English/Mandarin)</Link>
      </Menu.Item>
    </Menu>
  )
}

export default ServicesNavBar
import React from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import { Menu } from 'antd'
import { useSelector } from 'react-redux'
import { getWord } from '../helper-files/translate'

const menuItemStyle = {
  flex: '1',
  fontSize: '1.3rem',
  fontWeight: '400',
  textAlign: 'center',
}

const ServicesNavBar = (props) => {
  const { currService, setCurrService } = props

  const language = useSelector((state) => state.language)

  const isBigScreen = useMediaQuery({ query: '(min-width: 950px)' })

  const href = window.location.href.split('/')
  const pageUrl = href[4]

  return (
    <Menu
      mode={isBigScreen ? 'horizontal' : 'vertical'}
      onClick={({ key }) => setCurrService(key)}
      selectedKeys={currService}
      style={{
        display: 'flex',
        flexDirection: isBigScreen ? 'row' : 'column',
        width: '100%',
      }}
    >
      <Menu.Item key="en" style={menuItemStyle}>
        <Link replace to={pageUrl}>
          {getWord('English Service', language)}
        </Link>
      </Menu.Item>
      <Menu.Item key="tc" style={menuItemStyle}>
        <Link replace to={pageUrl}>
          {getWord('Teo Chew/Chinese Service', language)}
        </Link>
      </Menu.Item>
      <Menu.Item key="ss" style={menuItemStyle}>
        <Link replace to={pageUrl}>
          {getWord('Sunset Service (English/Mandarin)', language)}
        </Link>
      </Menu.Item>
    </Menu>
  )
}

export default ServicesNavBar

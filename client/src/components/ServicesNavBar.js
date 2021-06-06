import React from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import { Menu } from 'antd'
import { useSelector } from 'react-redux'

const menuItemStyle = {
  flex: '1',
  fontSize: '1.3rem',
  fontWeight: '400',
  textAlign: 'center',
}

const ServicesNavBar = (props) => {
  const { currService, setCurrService } = props

  const language = useSelector(state => state.language)

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
      }}
    >
      <Menu.Item key='tc' style={menuItemStyle}>
        <Link replace to='/services/'>
          {language === 'en'
            ? 'Teo Chew/Chinese Service'
            : '潮华华语崇拜'
          }
        </Link>
      </Menu.Item>
      <Menu.Item key='en' style={menuItemStyle}>
        <Link replace to='/services/'>
          {language === 'en'
            ? 'English Service'
            : '主日崇拜'
          }
        </Link>
      </Menu.Item>
      <Menu.Item key='ss' style={menuItemStyle}>
        <Link replace to='/services/'>
          {language === 'en'
            ? 'Sunset Service (English/Mandarin)'
            : '夕阳崇拜'
          }
        </Link>
      </Menu.Item>
    </Menu>
  )
}

export default ServicesNavBar
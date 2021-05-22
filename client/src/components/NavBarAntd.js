import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Menu, Dropdown, Button } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

import { useMediaQuery } from 'react-responsive'

const { SubMenu } = Menu

const NavBarAntd = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1370px)' })
  const [current, setCurrent] = useState('home')
  const [language, setLanguage] = useState('ENGLISH')

  const changeLanguage = () => {
    if (language === 'ENGLISH') {
      return setLanguage('中文')
    }
    return setLanguage('ENGLISH')
  }
  const trbcImage = (
    <img
      style={{ maxHeight: '100px', maxWidth: '150px' }}
      src={require('../imgs/logo.png')}
      alt=""
    />
  )

  const menu = (orientation) => (
    <Menu
      mode={orientation}
      onClick={(e) => {
        setCurrent(e.key)
      }}
      selectedKeys={current}
      style={{ border: 'None', padding: '10px' }}
    >
      <Menu.Item key="home" title="Home">
        <Link to="/trbc_00/">Home</Link>
      </Menu.Item>

      <SubMenu key="aboutUs" title="About Us">
        {/* Need find way to change font */}
        <Menu.Item key="aboutUs1">
          <Link to="/trbc_00/vision">Vision & Mission</Link>
        </Menu.Item>
        <Menu.Item key="aboutUs2">
          <Link to="/trbc_00/ourhistory">Our History</Link>
        </Menu.Item>
        <Menu.Item key="aboutUs3">
          <Link to="/trbc_00/ourteam">Our Team</Link>
        </Menu.Item>
        <Menu.Item key="aboutUs4">
          <Link to="/trbc_00/statement">Statement of Faith</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="joinUs" title="Join Us">
        {/* Need find way to change font */}
        <Menu.Item key="services">
          <Link to="/trbc_00/services">Services</Link>
        </Menu.Item>


        <SubMenu
          key="tc"
          title="Teo Chew/Chinese Congregation"
        >
          {/* Need find way to change font */}
          <Menu.Item key="tc/sundayschool">
            <Link to="/trbc_00/services/tc-main">Main</Link>
          </Menu.Item>
          <Menu.Item key="tc/prayermeeting">
            <Link to="/trbc_00/services/tc-prayermeeting">
              Prayer Meetings
            </Link>
          </Menu.Item>
          <Menu.Item key="tc/connectgroups">
            <Link to="/trbc_00/services/tc-cellgroup">Cell Groups</Link>
          </Menu.Item>
          <Menu.Item key="tc/youth">
            <Link to="/trbc_00/services/tc-youth">Youth</Link>
          </Menu.Item>
          <Menu.Item key="tc/children">
            <Link to="/trbc_00/services/tc-children">Children</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sunset"
          title="Sunset Congregation"
        >
          {/* Need find way to change font */}
          <Menu.Item key="s/sundayschool">
            <Link to="/trbc_00/services/ss-main">Main</Link>
          </Menu.Item>
          <Menu.Item key="s/prayermeeting">
            <Link to="/trbc_00/services/ss-prayermeeting">
              Prayer Meetings
            </Link>
          </Menu.Item>
          <Menu.Item key="s/connectgroups">
            <Link to="/trbc_00/services/ss-cellgroup">Cell Groups</Link>
          </Menu.Item>
          <Menu.Item key="s/youth">
            <Link to="/trbc_00/services/ss-youth">Youth</Link>
          </Menu.Item>
          <Menu.Item key="s/children">
            <Link to="/trbc_00/services/ss-children">Children</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="english"
          title="English Congregation"
        >
          {/* Need find way to change font */}
          <Menu.Item key="e/sundayschool">
            <Link to="/trbc_00/services/e-main">Main</Link>
          </Menu.Item>
          <Menu.Item key="e/prayermeeting">
            <Link to="/trbc_00/services/e-prayermeeting">
              Prayer Meetings
            </Link>
          </Menu.Item>
          <Menu.Item key="e/connectgroups">
            <Link to="/trbc_00/services/e-cellgroup">Cell Groups</Link>
          </Menu.Item>
          <Menu.Item key="e/youth">
            <Link to="/trbc_00/services/e-youth">Youth</Link>
          </Menu.Item>
          <Menu.Item key="e/children">
            <Link to="/trbc_00/services/e-children">Children</Link>
          </Menu.Item>
        </SubMenu>
      </SubMenu>
      <Menu.Item key="imNew">
        <Link to="/trbc_00/imnew">{'I\'m New'}</Link>
      </Menu.Item>
      <Menu.Item key="outreach">
        <Link to="/trbc_00/outreach">Outreach</Link>
      </Menu.Item>
      <Menu.Item key="missions">
        <Link to="/trbc_00/missions">Missions</Link>
      </Menu.Item>
      <Menu.Item key="discipleship">
        <Link to="/trbc_00/discipleship">Discipleship</Link>
      </Menu.Item>
      <Menu.Item key="facilities">
        <Link to="/trbc_00/facilitybookings">Facility Bookings</Link>
      </Menu.Item>

      <SubMenu key="admin" title="Resources">
        {/* Need find way to change font */}
        <Menu.Item key="admin1">
          <Link to="/trbc_00/resources">Resources</Link>
        </Menu.Item>
        {/* <Menu.Item key="aboutUs2">
            <Link to="/trbc_00/admin">Admin</Link>
          </Menu.Item> */}
      </SubMenu>
      <Menu.Item key="language" disabled>
        <Button
          onClick={changeLanguage}
          style={{
            backgroundColor: '#ffe7ba',
            color: '#fa8c16',
            borderRadius: '5px',
            borderStyle: 'none',
            width: '90px',
          }}
        >
          {language}
        </Button>
      </Menu.Item>
    </Menu>
  )

  const dropDown = () => (
    <Dropdown
      overlay={() => menu('vertical')}
      trigger={['click']}
    >
      <Button
        icon={<MenuOutlined style={{ fontSize: '25px' }} />}
        style={{ border: 'none' }}
      />
    </Dropdown>
  )

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: '55px',
        maxHeight: '80px',
      }}
    >
      <Link to="/trbc_00/">{trbcImage}</Link>
      {/* {console.log(windowSize)} */}
      {isBigScreen ? menu('horizontal') : dropDown()}
    </div>
  )
}
export default NavBarAntd

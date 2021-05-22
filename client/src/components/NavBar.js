import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Menu, Dropdown, Button } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

import { useMediaQuery } from 'react-responsive'

import trbcLogo from '../imgs/logo.png'

const { SubMenu } = Menu

const NavBar = () => {
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
      src={trbcLogo}
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
        <Link to="/">Home</Link>
      </Menu.Item>

      <SubMenu key="aboutUs" title="About Us">
        {/* Need find way to change font */}
        <Menu.Item key="aboutUs1">
          <Link to="/vision">Vision & Mission</Link>
        </Menu.Item>
        <Menu.Item key="aboutUs2">
          <Link to="/ourhistory">Our History</Link>
        </Menu.Item>
        <Menu.Item key="aboutUs3">
          <Link to="/ourteam">Our Team</Link>
        </Menu.Item>
        <Menu.Item key="aboutUs4">
          <Link to="/statement">Statement of Faith</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="joinUs" title="Join Us">
        {/* Need find way to change font */}
        <Menu.Item key="services">
          <Link to="/services">Services</Link>
        </Menu.Item>


        <SubMenu
          key="tc"
          title="Teo Chew/Chinese Congregation"
        >
          {/* Need find way to change font */}
          <Menu.Item key="tc/sundayschool">
            <Link to="/services/tc-main">Main</Link>
          </Menu.Item>
          <Menu.Item key="tc/prayermeeting">
            <Link to="/services/tc-prayermeeting">
              Prayer Meetings
            </Link>
          </Menu.Item>
          <Menu.Item key="tc/connectgroups">
            <Link to="/services/tc-cellgroup">Cell Groups</Link>
          </Menu.Item>
          <Menu.Item key="tc/youth">
            <Link to="/services/tc-youth">Youth</Link>
          </Menu.Item>
          <Menu.Item key="tc/children">
            <Link to="/services/tc-children">Children</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sunset"
          title="Sunset Congregation"
        >
          {/* Need find way to change font */}
          <Menu.Item key="s/sundayschool">
            <Link to="/services/ss-main">Main</Link>
          </Menu.Item>
          <Menu.Item key="s/prayermeeting">
            <Link to="/services/ss-prayermeeting">
              Prayer Meetings
            </Link>
          </Menu.Item>
          <Menu.Item key="s/connectgroups">
            <Link to="/services/ss-cellgroup">Cell Groups</Link>
          </Menu.Item>
          <Menu.Item key="s/youth">
            <Link to="/services/ss-youth">Youth</Link>
          </Menu.Item>
          <Menu.Item key="s/children">
            <Link to="/services/ss-children">Children</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="english"
          title="English Congregation"
        >
          {/* Need find way to change font */}
          <Menu.Item key="e/sundayschool">
            <Link to="/services/e-main">Main</Link>
          </Menu.Item>
          <Menu.Item key="e/prayermeeting">
            <Link to="/services/e-prayermeeting">
              Prayer Meetings
            </Link>
          </Menu.Item>
          <Menu.Item key="e/connectgroups">
            <Link to="/services/e-cellgroup">Cell Groups</Link>
          </Menu.Item>
          <Menu.Item key="e/youth">
            <Link to="/services/e-youth">Youth</Link>
          </Menu.Item>
          <Menu.Item key="e/children">
            <Link to="/services/e-children">Children</Link>
          </Menu.Item>
        </SubMenu>
      </SubMenu>
      <Menu.Item key="imNew">
        <Link to="/imnew">{'I\'m New'}</Link>
      </Menu.Item>
      <Menu.Item key="outreach">
        <Link to="/outreach">Outreach</Link>
      </Menu.Item>
      <Menu.Item key="missions">
        <Link to="/missions">Missions</Link>
      </Menu.Item>
      <Menu.Item key="discipleship">
        <Link to="/discipleship">Discipleship</Link>
      </Menu.Item>
      <Menu.Item key="facilities">
        <Link to="/facilitybookings">Facility Bookings</Link>
      </Menu.Item>

      <SubMenu key="admin" title="Resources">
        {/* Need find way to change font */}
        <Menu.Item key="admin1">
          <Link to="/resources">Resources</Link>
        </Menu.Item>
        {/* <Menu.Item key="aboutUs2">
            <Link to="/admin">Admin</Link>
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
      <Link to="/">{trbcImage}</Link>
      {/* {console.log(windowSize)} */}
      {isBigScreen ? menu('horizontal') : dropDown()}
    </div>
  )
}
export default NavBar

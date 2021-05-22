import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import { Menu, Dropdown, Button, Layout } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

const { Header } = Layout
const { SubMenu } = Menu

import trbcLogo from '../imgs/logo.png'

const NavBar = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1370px)' })
  const [current, setCurrent] = useState('home')
  const [language, setLanguage] = useState('ENGLISH')

  const href = window.location.href.split('/')
  const pageUrl = href[href.length - 1]
  console.log(pageUrl, current)

  const menu = (orientation) => (
    <Menu
      mode={orientation}
      // onClick={({ key }) => { setCurrent(key) }}
      // selectedKeys={pageUrl}
      style={{ border: 'None', padding: '10px' }}
    >
      <Menu.Item key='home' title='Home'>
        <Link replace to='/home'>Home</Link>
      </Menu.Item>

      <SubMenu key='about-us' title='About Us'>
        {/* Need find way to change font */}
        <Menu.Item key='vision'>
          <Link replace to='/vision'>Vision & Mission</Link>
        </Menu.Item>
        <Menu.Item key='our-history'>
          <Link replace to='/our-history'>Our History</Link>
        </Menu.Item>
        <Menu.Item key='our-team'>
          <Link replace to='/our-team'>Our Team</Link>
        </Menu.Item>
        <Menu.Item key='statement'>
          <Link replace to='/statement'>Statement of Faith</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key='join-us' title='Join Us'>
        {/* Need find way to change font */}
        <Menu.Item key='services'>
          <Link replace to='/services'>Services</Link>
        </Menu.Item>

        <SubMenu key='tc' title='Teo Chew/Chinese Congregation'>

          {/* Need find way to change font */}
          <Menu.Item key='tc-main'>
            <Link replace to='/services/tc-main'>Main</Link>
          </Menu.Item>
          <Menu.Item key='tc-prayermeeting'>
            <Link replace to='/services/tc-prayermeeting'>
              Prayer Meetings
            </Link>
          </Menu.Item>
          <Menu.Item key='tc-cellgroup'>
            <Link replace to='/services/tc-cellgroup'>Cell Groups</Link>
          </Menu.Item>
          <Menu.Item key='tc-youth'>
            <Link replace to='/services/tc-youth'>Youth</Link>
          </Menu.Item>
          <Menu.Item key='tc-children'>
            <Link replace to='/services/tc-children'>Children</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key='sunset'
          title='Sunset Congregation'
        >
          {/* Need find way to change font */}
          <Menu.Item key='ss-main'>
            <Link replace to='/services/ss-main'>Main</Link>
          </Menu.Item>
          <Menu.Item key='ss-prayermeeting'>
            <Link replace to='/services/ss-prayermeeting'>
              Prayer Meetings
            </Link>
          </Menu.Item>
          <Menu.Item key='ss-cellgroup'>
            <Link replace to='/services/ss-cellgroup'>Cell Groups</Link>
          </Menu.Item>
          <Menu.Item key='ss-youth'>
            <Link replace to='/services/ss-youth'>Youth</Link>
          </Menu.Item>
          <Menu.Item key='ss-children'>
            <Link replace to='/services/ss-children'>Children</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key='english'
          title='English Congregation'
        >
          {/* Need find way to change font */}
          <Menu.Item key='e-main'>
            <Link replace to='/services/e-main'>Main</Link>
          </Menu.Item>
          <Menu.Item key='e-prayermeeting'>
            <Link replace to='/services/e-prayermeeting'>
              Prayer Meetings
            </Link>
          </Menu.Item>
          <Menu.Item key='e-cellgroup'>
            <Link replace to='/services/e-cellgroup'>Cell Groups</Link>
          </Menu.Item>
          <Menu.Item key='e-youth'>
            <Link replace to='/services/e-youth'>Youth</Link>
          </Menu.Item>
          <Menu.Item key='e-children'>
            <Link replace to='/services/e-children'>Children</Link>
          </Menu.Item>
        </SubMenu>
      </SubMenu>
      <Menu.Item key='im-new'>
        <Link replace to='/im-new'>{'I\'m New'}</Link>
      </Menu.Item>
      <Menu.Item key='outreach'>
        <Link replace to='/outreach'>Outreach</Link>
      </Menu.Item>
      <Menu.Item key='missions'>
        <Link replace to='/missions'>Missions</Link>
      </Menu.Item>
      <Menu.Item key='discipleship'>
        <Link replace to='/discipleship'>Discipleship</Link>
      </Menu.Item>
      <Menu.Item key='facility-bookings'>
        <Link replace to='/facility-bookings'>Facility Bookings</Link>
      </Menu.Item>

      <SubMenu key='admin' title='Resources'>
        {/* Need find way to change font */}
        <Menu.Item key='admin1'>
          <Link replace to='/resources'>Resources</Link>
        </Menu.Item>
        {/* <Menu.Item key='aboutUs2'>
            <Link replace to='/admin'>Admin</Link>
          </Menu.Item> */}
      </SubMenu>
      <Menu.Item key='language' disabled>
        <Button
          onClick={() => language === 'ENGLISH' ? setLanguage('ENGLISH') : setLanguage('中文')}
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
    <Header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: '55px',
        maxHeight: '80px',
      }}
    >
      <Link replace to='/'>{
        <img
          style={{ maxHeight: '100px', maxWidth: '150px' }}
          src={trbcLogo}
          alt=''
        />
      }</Link>
      {isBigScreen ? menu('horizontal') : dropDown()}
    </Header>
  )
}
export default NavBar

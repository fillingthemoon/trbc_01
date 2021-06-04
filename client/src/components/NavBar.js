import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLanguage } from '../reducers/languageReducer'

import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import { general } from '../helper-files/images'
const { trbcLogo } = general

import { Menu, Dropdown, Button, Layout } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
const { Header } = Layout
const { SubMenu } = Menu

import {
  colorPrimaryOrange,
  colorLOrange,
} from '../helper-files/colors'

const NavBar = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1050px)' })
  const [current, setCurrent] = useState('home')

  const language = useSelector(state => state.language)
  const dispatch = useDispatch()

  const href = window.location.href.split('/')
  const pageUrl = href[4]

  const menu = (orientation) => (
    <Menu
      mode={orientation}
      onClick={({ key }) => { setCurrent(key) }}
      selectedKeys={pageUrl}
      style={{ border: 'None' }}
      subMenuOpenDelay={0}
    >
      <Menu.Item key='home' title='Home'>
        <Link replace to='/home'>Home</Link>
      </Menu.Item>
      <SubMenu key='about-us' title='About Us'>
        <Menu.Item key='mission-vision'>
          <Link replace to='/mission-vision'>Mission & Vision</Link>
        </Menu.Item>
        <Menu.Item key='our-history'>
          <Link replace to='/our-history'>Our History</Link>
        </Menu.Item>
        <Menu.Item key='our-team'>
          <Link replace to='/our-team'>Our Team</Link>
        </Menu.Item>
        <Menu.Item key='statement-of-faith'>
          <Link replace to='/statement-of-faith'>Statement of Faith</Link>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key='services'>
        <Link replace to='/services'>Services</Link>
      </Menu.Item>
      <Menu.Item key='im-new'>
        <Link replace to='/im-new'>{'I\'m New'}</Link>
      </Menu.Item>
      <SubMenu key='ministries' title='Ministries'>
        <Menu.Item key='outreach'>
          <Link replace to='/outreach'>Outreach</Link>
        </Menu.Item>
        <Menu.Item key='missions'>
          <Link replace to='/missions'>Missions</Link>
        </Menu.Item>
        <Menu.Item key='discipleship'>
          <Link replace to='/discipleship'>Discipleship</Link>
        </Menu.Item>
        {/* <Menu.Item key='cec'>
          <Link replace to='/cec'>{'Children\'s Enrichment Camp'}</Link>
        </Menu.Item> */}
      </SubMenu>
      <SubMenu key='resources' title='Resources'>
        <Menu.Item key='resource-library'>
          <Link replace to='/resource-library'>Resource Library</Link>
        </Menu.Item>
        <Menu.Item key='facility-booking'>
          <Link replace to='/facility-booking'>Facility Booking</Link>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key='admin'>
        <Link replace to='/admin'>Admin</Link>
      </Menu.Item>

      <Menu.Item key='language' disabled>
        <Button
          onClick={() => language === 'en'
            ? dispatch(setLanguage('ch'))
            : dispatch(setLanguage('en'))
          }
          style={{
            backgroundColor: colorLOrange,
            color: colorPrimaryOrange,
            borderRadius: '10px',
            border: 'none',
            width: '100px',
            height: '40px',
            fontWeight: '600',
            letterSpacing: '2px',
          }}
        >
          {language === 'en' ? '中文' : 'ENGLISH'}
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
        padding: '50px 30px',
      }}
    >
      <Link replace to='/home'>
        {<img
          style={{ maxHeight: '100px', maxWidth: '150px' }}
          src={trbcLogo}
          alt=''
        />}
      </Link>
      {isBigScreen ? menu('horizontal') : dropDown()}
    </Header>
  )
}
export default NavBar

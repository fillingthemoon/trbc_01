import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLanguage } from '../reducers/languageReducer'

import { getWord } from '../helper-files/navBarPagesEnChWords'

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
      <Menu.Item key='home' title={getWord('Home', language)}>
        <Link replace to='/home'>{getWord('Home', language)}</Link>
      </Menu.Item>
      <SubMenu key='about-us' title={getWord('About Us', language)}>
        <Menu.Item key='mission-vision'>
          <Link replace to='/mission-vision'>{getWord('Mission & Vision', language)}</Link>
        </Menu.Item>
        <Menu.Item key='our-history'>
          <Link replace to='/our-history'>{getWord('Our History', language)}</Link>
        </Menu.Item>
        <Menu.Item key='our-team'>
          <Link replace to='/our-team'>{getWord('Our Team', language)}</Link>
        </Menu.Item>
        <Menu.Item key='statement-of-faith'>
          <Link replace to='/statement-of-faith'>{getWord('Statement of Faith', language)}</Link>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key='services'>
        <Link replace to='/services'>{getWord('Services', language)}</Link>
      </Menu.Item>
      <Menu.Item key='im-new'>
        <Link replace to='/im-new'>{getWord('I\'m New', language)}</Link>
      </Menu.Item>
      <SubMenu key='ministries' title={getWord('Ministries', language)}>
        <Menu.Item key='outreach'>
          <Link replace to='/outreach'>{getWord('Outreach', language)}</Link>
        </Menu.Item>
        <Menu.Item key='missions'>
          <Link replace to='/missions'>{getWord('Missions', language)}</Link>
        </Menu.Item>
        <Menu.Item key='discipleship'>
          <Link replace to='/discipleship'>{getWord('Discipleship', language)}</Link>
        </Menu.Item>
        {/* <Menu.Item key='cec'>
          <Link replace to='/cec'>{'Children\'s Enrichment Camp'}</Link>
        </Menu.Item> */}
      </SubMenu>
      <SubMenu key='resources' title={getWord('Resources', language)}>
        <Menu.Item key='resource-library'>
          <Link replace to='/resource-library'>{getWord('Resource Library', language)}</Link>
        </Menu.Item>
        <Menu.Item key='facility-booking'>
          <Link replace to='/facility-booking'>{getWord('Facility Booking', language)}</Link>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key='admin'>
        <Link replace to='/admin'>{getWord('Admin', language)}</Link>
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

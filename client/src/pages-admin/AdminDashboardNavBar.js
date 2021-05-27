import React from 'react'
import { Link } from 'react-router-dom'

import {
  colorWhite,
} from '../helper-files/colors'

import { UserOutlined } from '@ant-design/icons'
import { HiViewGrid } from 'react-icons/hi'

import { Layout, Button, Menu, Dropdown } from 'antd'
const { Header } = Layout

const loggedInUserMenu = (handleLogout, loggedInUser) => {

  return (
    <Menu
      className='logged-in-user-menu'
      orientation='vertical'
      style={{ border: 'None' }}
      subMenuOpenDelay={0}
    >
      <Menu.Item disabled>
        {loggedInUser.username}
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item onClick={handleLogout}>
        Log Out
      </Menu.Item>
    </Menu>
  )
}

const AdminDashboardNavBar = (props) => {
  const {
    handleLogout,
    loggedInUser,
  } = props

  return (
    <Header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0px -2px 5px 0 rgba(0,0,0,0.2)',
        backgroundColor: colorWhite,
      }}
    >
      <Link replace to='/admin'>
        <Button
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            padding: '10px',
            width: '130px',
            border: 'none',
            lineHeight: 0,
          }}
          icon={<HiViewGrid style={{ fontSize: '1.5rem' }} />}
        >
          Dashboard
        </Button>
      </Link>
      <Dropdown
        overlay={() => loggedInUserMenu(handleLogout, loggedInUser)}
        trigger={['click']}
      >
        <Button
          icon={<UserOutlined style={{ fontSize: '1.5rem' }} />}
          style={{ border: 'none' }}
        />
      </Dropdown>
    </Header>
  )
}

export default AdminDashboardNavBar
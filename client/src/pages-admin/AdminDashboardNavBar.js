import React from 'react'
import { Link } from 'react-router-dom'

import { UserOutlined } from '@ant-design/icons'

import {
  colorWhite,
} from '../helper-files/colors'

import { Layout, Button, Menu, Dropdown, Divider } from 'antd'
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
      <Divider style={{ margin: '5px 0' }} />
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
      <Button
        style={{ border: 'none', lineHeight: 0, }}
      >Admin Home
        <Link replace to='/admin'></Link>
      </Button>
      <Dropdown
        overlay={() => loggedInUserMenu(handleLogout, loggedInUser)}
        trigger={['click']}
      >
        <Button
          icon={<UserOutlined style={{ fontSize: '25px' }} />}
          style={{ border: 'none' }}
        />
      </Dropdown>
    </Header>
  )
}

export default AdminDashboardNavBar
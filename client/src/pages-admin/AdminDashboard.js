import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { logUserOut } from '../reducers/loggedInUserReducer'
import { useSelector } from 'react-redux'

import Notification from '../components-reusable/Notification'

import {
  colorLOrange,
  colorPrimaryOrange,
  colorDGray,
  colorWhite,
} from '../helper-files/colors'

import { Layout, Button, Menu, Dropdown } from 'antd'
const { Header, Content, Sider } = Layout
const { SubMenu } = Menu

import { UserOutlined } from '@ant-design/icons'

const loggedInUserMenu = (handleLogout) => {

  return (
    <Menu
      className='logged-in-user-menu'
      orientation='vertical'
      style={{ border: 'None' }}
      subMenuOpenDelay={0}
    >
      <Menu.Item>
        <Button
          onClick={handleLogout}
          style={{ border: 'none', lineHeight: 0 }}
        >
          Log Out
        </Button>
      </Menu.Item>
    </Menu>
  )
}

const AdminDashboard = (props) => {
  const {
    loggedInUser
  } = props

  const notification = useSelector(state => state.notification)

  const dispatch = useDispatch()

  const handleLogout = () => {
    window.localStorage.removeItem('loggedInAdminUser')
    dispatch(logUserOut())
  }

  return (
    <Layout className='admin-dashboard'>
      <Notification notification={notification} />
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
          overlay={() => loggedInUserMenu(handleLogout)}
          trigger={['click']}
        >
          <Button
            icon={<UserOutlined style={{ fontSize: '25px' }} />}
            style={{ border: 'none' }}
          />
        </Dropdown>
      </Header>

      <Content>

      </Content>
    </Layout>
  )
}

export default AdminDashboard
import React from 'react'
import { useDispatch } from 'react-redux'

import { logUserOut } from '../reducers/loggedInUserReducer'
import { useSelector } from 'react-redux'

import Notification from '../components-reusable/Notification'
import AdminDashboardNavBar from '../pages-admin/AdminDashboardNavBar'
import AdminDashboardContent from '../pages-admin/AdminDashboardContent'

import { Layout } from 'antd'
const { Content } = Layout

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
      <AdminDashboardNavBar handleLogout={handleLogout} loggedInUser={loggedInUser} />

      <Content style={{ padding: '0 50px 50px 50px' }}>
        <AdminDashboardContent />
      </Content>
    </Layout>
  )
}

export default AdminDashboard
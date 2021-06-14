import React from 'react'

import { useSelector } from 'react-redux'

import Notification from '../components-reusable/Notification'
import AdminDashboardNavBar from '../pages-admin/AdminDashboardNavBar'
import AdminDashboardContent from '../pages-admin/AdminDashboardContent'

import { Layout, Spin } from 'antd'
const { Content } = Layout

const AdminDashboard = (props) => {
  const {
    loggedInUser
  } = props

  const notification = useSelector(state => state.notification)
  const languageSpinner = useSelector(state => state.languageSpinner)

  return (
    <Layout className='admin-dashboard'>
      <Spin tip='Loading, please wait...' spinning={languageSpinner}>
        <Notification notification={notification} />
        <AdminDashboardNavBar loggedInUser={loggedInUser} />

        <Content style={{ padding: '0 50px 50px 50px' }}>
          <AdminDashboardContent />
        </Content>
      </Spin>
    </Layout>
  )
}

export default AdminDashboard
import React from 'react'
import { useSelector } from 'react-redux'

import AdminLoginPage from '../AdminLoginPage'
import Notification from '../../components-reusable/Notification'
import AdminDashboardNavBar from '../AdminDashboardNavBar'
import EditableTable from './EditableTable'
import TitleText from '../../components-reusable/TitleText'

import { convertName } from '../../helper-files/helperFunctions'

import { Layout } from 'antd'
const { Content } = Layout

const titleUnderlineStyle = {
  display: 'flex',
  justifyContent: 'center',
}

const EditSectionPage = ({ editPageSectionName }) => {
  const loggedInUser = useSelector((state) => state.loggedInUser)
  const notification = useSelector((state) => state.notification)

  if (!loggedInUser) {
    return <AdminLoginPage />
  }

  if (!editPageSectionName) {
    return null
  }

  return (
    <Layout>
      <Notification notification={notification} />
      <AdminDashboardNavBar loggedInUser={loggedInUser} />

      <Content style={{ padding: '0 50px 50px 50px' }}>
        <TitleText
          titleUnderlineStyle={titleUnderlineStyle}
          titleStyle={{ textAlign: 'center', fontSize: '2rem' }}
          title={convertName('dashed', 'proper', editPageSectionName)}
          underlineAlign="center"
        />
        <EditableTable editPageSectionName={editPageSectionName} />
      </Content>
    </Layout>
  )
}

export default EditSectionPage

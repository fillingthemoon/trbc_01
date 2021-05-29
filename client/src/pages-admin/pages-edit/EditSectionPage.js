import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import AdminLoginPage from '../AdminLoginPage'
import Notification from '../../components-reusable/Notification'
import AdminDashboardNavBar from '../AdminDashboardNavBar'

import { setNotification } from '../../reducers/notificationReducer'

const EditSectionPage = (props) => {
  const {
    editSection
  } = props

  const loggedInUser = useSelector(state => state.loggedInUser)
  const notification = useSelector(state => state.notification)

  if (!loggedInUser) {
    return <AdminLoginPage />
  }

  return (
    <div>
      <Notification notification={notification} />
      <AdminDashboardNavBar loggedInUser={loggedInUser} />
      {editSection}
    </div>
  )
}

export default EditSectionPage
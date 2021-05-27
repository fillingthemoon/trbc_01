import React from 'react'

// import { useSelector } from '../reducers/loggedInUserReducer'
import { useSelector } from 'react-redux'

import Notification from '../components-reusable/Notification'

import Banner from '../components-reusable/Banner'
import LoginForm from './LoginForm'
import AdminDashboard from './AdminDashboard'

import { general } from '../helper-files/images'
const { exterior } = general

const Admin = () => {
  const notification = useSelector(state => state.notification)
  const loggedInUser = useSelector(state => state.loggedInUser)

  return (
    <div>
      <Banner imageTitlePairs={[{ title: 'Admin', image: exterior }]} />
      <Notification notification={notification} />
      <div className='admin'>
        {!loggedInUser
          ? <LoginForm />
          : <AdminDashboard loggedInUser={loggedInUser} />
        }
      </div>
    </div>
  )
}

export default Admin

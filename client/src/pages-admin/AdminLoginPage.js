import React from 'react'

import { useSelector } from 'react-redux'

import Banner from '../components-reusable/Banner'
import LoginForm from './LoginForm'

import Notification from '../components-reusable/Notification'

import { general } from '../helper-files/images'
const { exterior } = general

const AdminLoginPage = () => {
  const notification = useSelector(state => state.notification)

  return (
    <div>
      <Banner imageTitlePairs={[{ title: 'Admin', image: exterior }]} />
      <Notification notification={notification} />
      <div className='admin-login'>
        <LoginForm />
      </div>
    </div>
  )
}

export default AdminLoginPage
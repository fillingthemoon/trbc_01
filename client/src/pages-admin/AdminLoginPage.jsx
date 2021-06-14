import React from 'react'

import { useSelector } from 'react-redux'

import Banner from '../components-reusable/Banner'
import LoginForm from './LoginForm'

import { getWord } from '../helper-files/translate'

import Notification from '../components-reusable/Notification'

import { general } from '../helper-files/images'
const { admin } = general

const AdminLoginPage = () => {
  const notification = useSelector((state) => state.notification)
  const language = useSelector((state) => state.language)

  return (
    <div>
      <Banner
        imageTitlePairs={[
          {
            title: getWord('Admin', language),
            image: admin,
          },
        ]}
      />
      <Notification notification={notification} />
      <div className="admin-login">
        <LoginForm />
      </div>
    </div>
  )
}

export default AdminLoginPage

import React from 'react'

import { useSelector } from 'react-redux'

import AdminLoginPage from './AdminLoginPage'
import AdminDashboard from './AdminDashboard'

const Admin = () => {
  const loggedInUser = useSelector(state => state.loggedInUser)

  return (
    <div>
      {!loggedInUser
        ? <AdminLoginPage />
        : <AdminDashboard loggedInUser={loggedInUser} />
      }
    </div>
  )
}

export default Admin

import React from 'react'

import { useDispatch } from 'react-redux'

import { logUserOut } from '../reducers/loggedInUserReducer'

import { Button } from 'antd'

const AdminDashboard = (props) => {
  const {
    loggedInUser
  } = props

  const dispatch = useDispatch()

  const handleLogout = () => {
    window.localStorage.removeItem('loggedInAdminUser')
    dispatch(logUserOut())
  }

  return (
    <div>

      <div className='logout-section'>
        <b>{loggedInUser.username}</b>
        <Button className='logout-btn' onClick={handleLogout}>logout</Button>
      </div>
    </div>
  )
}

export default AdminDashboard
import React, { useState, useEffect } from 'react'

import TileText from '../components-reusable/TitleText'

import { useDispatch } from 'react-redux'

import { logUserIn, stayLoggedIn } from '../reducers/loggedInUserReducer'

import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  // Stay logged in
  useEffect(() => {
    const loggedInUserJSON = window.localStorage.getItem('loggedInAdminUser')
    if (loggedInUserJSON) {
      const loggedInUser = JSON.parse(loggedInUserJSON)
      dispatch(stayLoggedIn(loggedInUser))
    }
  }, [])

  // Handle log in
  const handleLogin = () => {
    dispatch(logUserIn(username, password))

    setUsername('')
    setPassword('')
  }

  return (
    <Form
      onFinish={handleLogin}
      className='login-form'
    >
      <Form.Item><TileText title={'Admin Portal'} /></Form.Item>
      <Form.Item
        name='username'
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input
          prefix={<UserOutlined />}
          placeholder="Username"
          className='input-username'
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
          rules={[{ required: true, message: 'Please input your Username!' }]}
        />
      </Form.Item>
      <Form.Item
        name='password'
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined />}
          placeholder="Password"
          className='input-password'
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button
          className='login-btn'
          type="primary"
          htmlType='submit'
        >Log In</Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
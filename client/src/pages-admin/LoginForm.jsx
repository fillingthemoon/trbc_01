import React, { useEffect } from 'react'

import TileText from '../components-reusable/TitleText'

import { getWord } from '../helper-files/translate'

import { useDispatch, useSelector } from 'react-redux'

import { logUserIn, stayLoggedIn } from '../reducers/loggedInUserReducer'

import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const LoginForm = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const language = useSelector((state) => state.language)

  // Stay logged in
  useEffect(() => {
    const loggedInUserJSON = window.localStorage.getItem('loggedInAdminUser')
    if (loggedInUserJSON) {
      const loggedInUser = JSON.parse(loggedInUserJSON)
      dispatch(stayLoggedIn(loggedInUser))
    }
  }, [])

  // Handle log in
  const handleLogin = (values) => {
    const username = values.username
    const password = values.password

    dispatch(logUserIn(username, password))

    form.resetFields()
  }

  return (
    <Form form={form} onFinish={handleLogin} className="login-form">
      <Form.Item>
        <TileText title={getWord('Admin Portal', language)} />
      </Form.Item>
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined />}
          placeholder="Password"
          type="password"
        />
      </Form.Item>
      <Form.Item>
        <Button style={{ width: '100%' }} type="primary" htmlType="submit">
          Log In
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm

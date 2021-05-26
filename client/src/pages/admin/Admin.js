import React, { useState } from 'react'

import Banner from '../../components-reusable/Banner'

import TileText from '../../components-reusable/TitleText'

import { general } from '../../helper-files/images'
const { exterior } = general

import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const Admin = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()

    setUsername('')
    setPassword('')
  }

  return (
    <div>
      <Banner imageTitlePairs={[{ title: 'Admin', image: exterior }]} />
      <div className='admin'>
        <Form
          onFinish={handleLogin}
          className='login-form'
        >
          <Form.Item><TileText title={'Log In Here'} /></Form.Item>
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
      </div>
    </div>
  )
}

export default Admin

import React from 'react'
import { useSelector } from 'react-redux'

import TitleText from '../components-reusable/TitleText'

import { Button, Form, Input } from 'antd'

import { getWord } from '../helper-files/translate'
import { colorLOrange } from '../helper-files/colors'

const styles = {
  connectForm: {
    backgroundColor: colorLOrange,
    margin: '0',
    padding: '50px 20px',
    width: '100vw',
  },
}

const layout = {
  labelCol: {
    span: 9,
  },
  wrapperCol: {
    span: 7,
  },
}

const tailLayout = {
  wrapperCol: {
    offset: 9,
    span: 7,
  },
}

const ConnectForm = () => {
  const language = useSelector((state) => state.language)

  return (
    <div style={styles.connectForm}>
      <TitleText
        titleUnderlineStyle={{ display: 'flex', justifyContent: 'center' }}
        title={getWord('Connect With Us', language)}
        underlineAlign="center"
      />
      ˇ
      <Form {...layout} name="basic" initialValues={{ remember: true }}>
        <Form.Item
          label="Name"
          name="Name"
          rules={[{ required: true, message: 'Please input your name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="Email"
          rules={[{ required: true, message: 'Please input your email' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Phone" name="phone">
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'Your message']}
          label="How can we help you?"
          rules={[{ required: true, message: 'Please input your enquiry' }]}
        >
          <Input.TextArea style={{ height: '200px' }} />
        </Form.Item>
        <Form.Item {...tailLayout} style={{ margin: '0' }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default ConnectForm

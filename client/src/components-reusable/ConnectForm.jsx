import React from 'react'

import {
  Button, Card, Form, Input, Select
} from 'antd'
const { Option } = Select

import {
  colorLOrange,
} from '../helper-files/colors'

const ConnectForm = () => {

  return (
    <div
      style={{
        backgroundColor: colorLOrange,
        margin: 'auto',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        padding: '50px',
      }}
    >
      <Card title="Connect with us" style={{ minWidth: 300 }}>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            label="Name"
            name="Name"
            rules={[
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="Email"
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              {
                message: 'Please input your Phone Number!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Interest"
            name="interest"
            rules={[
              {
                message: 'Please input your Phone Number!',
              },
            ]}
          >
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <Option value="service">Join a Service</Option>
              <Option value="event">Attending an Event</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>
          <Form.Item name={['user', 'Your message']} label="How can we help you?">
            <Input.TextArea />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default ConnectForm
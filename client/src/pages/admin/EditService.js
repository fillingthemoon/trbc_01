import React, { useEffect, useState, useReducer } from 'react'
import Banner from '../../components-reusable/Banner'

import {
  Card,
  Upload,
  Typography,
  Table,
  Image,
  Space,
  Button,
  Modal,
  Form,
  Input,
} from 'antd'
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  UploadOutlined,
} from '@ant-design/icons'

import { general } from '../../images'
const { churchWide } = general

import axios from 'axios'

function EditService() {
  const { Title } = Typography

  const columns = [
    {
      title: 'title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'congregation',
      dataIndex: 'congregation',
      key: 'congregation',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'image',
      dataIndex: 'image',
      key: 'image',
    },
    {
      title: 'time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'location',
      dataIndex: 'location',
      key: 'location',
    },

    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <button
            className='edit-delete-link'
            onClick={() => {
              console.log('Record here', record)
              setIsModalVisible(true)
              setRecordToEdit(record)

            }}
          >
            Edit/Delete
          </button>
        </Space>
      ),
    },
  ]
  const [data, setData] = useState()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [record, setRecordToEdit] = useState({})

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const handleChange = (event) => {
    Object.entries(record).forEach((i) => {
      record[event.target.name] = event.target.value
      setRecordToEdit(record)
    })
  }

  //API calls
  useEffect(() => {
    try {
      axios.get('http://localhost:8080/service').then((res) => {
        console.log(res.data)
        setData(res.data)
      })
    } catch (err) {
      console.log(err)
    }
  }, [])

  const addRecord = () => {
    axios.post('http://localhost:8080/service', {
      title: 'Fill in here',
      congregation: 'Fill in here',
      description: 'Fill in here',
      image: 'Fill in here',
      time: 'Fill in here',
      location: 'Fill in here',

    })
  }
  const saveRecord = () => {
    console.log(record.body)
    axios.put('http://localhost:8080/service', record)
  }
  const deleteRecord = () => {
    console.log('Record here 2', record)
    axios.delete('http://localhost:8080/service', { data: record })
  }

  return (
    <>
      <Banner imageTitlePairs={[{ title: 'Edit Service Page', image: churchWide }]} />

      <div className="main-container">
        <br />
        <Title style={{ textAlign: 'center' }}>Edit Service Page</Title>
        <hr className="thick-line"></hr>
        <br />
        <br />

        <Table columns={columns} dataSource={data} />
        <Button
          key="Add"
          onClick={() => {
            addRecord()
            window.location.reload()
          }}
        >
          Add Row
        </Button>
        <br />
        {/*Popup modal */}
        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button
              key="cancel"
              onClick={() => {
                handleCancel()
              }}
            >
              Cancel
            </Button>,
            <Button
              key="submit"
              type="primary"
              onClick={() => {
                saveRecord()

                setIsModalVisible(false)
                window.location.reload()
              }}
            >
              Save
            </Button>,
            <Button
              key="delete"
              type="primary"
              danger
              onClick={() => {
                console.log('record here 3', record)
                deleteRecord(record)
                window.location.reload()
              }}
            >
              Delete
            </Button>,
          ]}
        >
          <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="title"
              name="title"
              onChange={(e) => handleChange(e)}
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              {/*Need to change default*/}
              <Input
                name="title"
                defaultValue={record.title ? record.title : ''}
              />
            </Form.Item>
            <Form.Item
              label="Congregation"
              name="Congregation"
              onChange={(e) => handleChange(e)}
              rules={[
                {
                  required: true,
                  message: 'Please input the Congregation!',
                },
              ]}
            >
              {/*Need to change default*/}
              <Input
                name="congregation"
                defaultValue={record.congregation}
              />
            </Form.Item>
            <Form.Item
              label="Description"
              name="Description"
              onChange={(e) => handleChange(e)}
              rules={[
                {
                  required: true,
                  message: 'Please input the description!',
                },
              ]}
            >
              {/*Need to change default*/}
              <Input
                name="description"
                defaultValue={record.description}
              />
            </Form.Item>
            <Form.Item>
              <Upload
                name="logo"
                action="/upload.do"
                listType="picture"
                onChange={handleChange}
              >
                <Button icon={<UploadOutlined />}>
                  Click to upload new image
                </Button>
              </Upload>
            </Form.Item>
            <Form.Item
              label="time"
              name="time"
              onChange={(e) => handleChange(e)}
              rules={[
                {
                  required: true,
                  message: 'Please input the Time!',
                },
              ]}
            >
              {/*Need to change default*/}
              <Input
                name="time"
                defaultValue={record.time}
              />
            </Form.Item>
            <Form.Item
              label="location"
              name="location"
              onChange={(e) => handleChange(e)}
              rules={[
                {
                  required: true,
                  message: 'Please input the Location!',
                },
              ]}
            >
              {/*Need to change default*/}
              <Input
                name="location"
                defaultValue={record.location}
              />
            </Form.Item>

          </Form>
        </Modal>
      </div>
    </>
  )
}

export default EditService

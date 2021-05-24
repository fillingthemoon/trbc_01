import React, { useEffect, useState, useReducer } from 'react'
import Banner from '../../components-reusable/Banner'

import {
  message,
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

// Similiar to Our History Page

import axios from 'axios'

import { general } from '../../images'
const { churchWide } = general

const EditTeam = () => {
  const { Title } = Typography

  const columns = [
    {
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
    },
    {
      key: 'designation',
      title: 'Designation',
      dataIndex: 'designation',
    },
    {
      key: 'image',
      title: 'image',
      render: (text, record) => (
        <>
          <Image width={200} src={record.image} />
          {console.log(text)}
          {console.log(record.image)}
        </>

      )
    },
    {
      key: 'action',
      title: 'Action',
      render: (text, record) => (
        <Space size="middle">
          <button
            className='edit-delete-link'
            onClick={() => {
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
  const [imageToUpload, setImageToUpload] = useState()

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
      axios.get('http://localhost:8080/team').then((res) => {
        setData(res.data)
      })
    } catch (err) {
      console.log(err)
    }
  }, [])

  const addRecord = () => {
    axios.post('http://localhost:8080/team', {
      name: 'Fill name',
      designation: 'Fill Designation',
      image: 'Select Image',
    })
  }
  const saveRecord = () => {
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    }
    axios.put('http://localhost:8080/team', record)
  }
  const deleteRecord = () => {
    axios.delete('http://localhost:8080/team', { data: record })
  }

  const onCreateImage = (event) => {
    const MAX_IMAGE_SIZE = 1000000

    let reader = new FileReader()
    reader.onload = (e) => {
      console.log(e.target)
      console.log('length: ', e.target.result.includes('data:image/jpeg'))
      if (!e.target.result.includes('data:image/jpeg')) {
        return alert('Wrong file type - JPG only.')
      }
      if (e.target.result.length > MAX_IMAGE_SIZE) {
        return alert('Image is loo large.')
      }

      setImageToUpload(e.target.result)

      record['image'] = e.target.result
      setRecordToEdit(record)
      console.log(record)
    }
    reader.readAsDataURL(event.target.files[0])
  }

  return (
    <>
      <Banner imageTitlePairs={[{ title: 'Edit Team Page', image: churchWide }]} />

      <div className="main-container">
        <br />
        <Title style={{ textAlign: 'center' }}>Edit Team Page</Title>
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
              }}
            >
              Save
            </Button>,
            <Button
              key="delete"
              type="primary"
              danger
              onClick={() => {
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
              label="Name"
              name="Name"
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
                name="name"
                defaultValue={record.name ? record.name : ''}
              />
            </Form.Item>
            <Form.Item
              label="Designation"
              name="Designation"
              onChange={(e) => handleChange(e)}
              rules={[
                {
                  required: true,
                  message: 'Please input the designation!',
                },
              ]}
            >
              {/*Need to change default*/}
              <Input
                name="designation"
                defaultValue={record.designation ? record.designation : ''}
              />
            </Form.Item>
            <Form.Item>
              <input
                type="file"
                name="image"
                onChange={(e) => {
                  onCreateImage(e)
                }}
              />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  )
}

export default EditTeam

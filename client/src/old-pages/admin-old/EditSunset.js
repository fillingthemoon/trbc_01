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
// Similiar to Our History Page

import axios from 'axios'

import { general } from '../../helper-files/images'
const { churchWide } = general

const EditSunset = () => {
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
      title: 'description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'image',
      key: 'image',
      render: (text, record) => (
        <>
          <Image
            width={200}
            src={record.image}
            fallback="data:image/png;base64,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"
          />
        </>
      ),
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

  //API calls

  useEffect(() => {
    try {
      axios.get('http://localhost:8080/service').then((res) => {
        console.log(res.data)
        var resultArray = []
        res.data.forEach((i) => {
          if (i.congregation === 'Sunset') {
            resultArray.push(i)
          }
        })
        setData(resultArray)
      })
    } catch (err) {
      console.log(err)
    }
  }, [])

  const addRecord = () => {
    axios.post('http://localhost:8080/service', {
      title: 'Fill in here',
      congregation: 'Sunset',
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
    axios.delete('http://localhost:8080/service', { data: record })
  }

  return (
    <>
      <Banner imageTitlePairs={[{ title: 'Edit Sunset Service Page', image: churchWide }]} />

      <div className="main-container">
        <br />
        <Title style={{ textAlign: 'center' }}>Edit Sunset Service Page</Title>
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
                  message: 'Please input the title',
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
                defaultValue={record.description ? record.description : ''}
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
                defaultValue={record.time ? record.time : ''}
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
                defaultValue={record.location ? record.location : ''}
              />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  )
}

export default EditSunset

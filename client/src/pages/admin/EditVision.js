import React, { useEffect, useState, useReducer } from 'react'
import Banner from '../../components/Banner'

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
import churchWide from '../../imgs/church-wide.jpg'
import axios from 'axios'

function EditVision() {
  const { Title } = Typography

  const columns = [

    {
      key: 'image',
      title: 'image',
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
      key: 'vision',
      title: 'vision',
      dataIndex: 'vision',
    },
    {
      key: 'mission',
      title: 'mission',
      dataIndex: 'mission',
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
      axios.get('http://localhost:8080/vision').then((res) => {

        setData(res.data)
      })
    } catch (err) {
      console.log(err)
    }
  }, [])

  const addRecord = () => {
    axios.post('http://localhost:8080/vision', {
      vision: 'Fill in here',
      mission: 'Fill in here',
      image: 'Fill in here',

    })
  }
  const saveRecord = () => {
    console.log(record.body)
    axios.put('http://localhost:8080/vision', record)
  }
  const deleteRecord = () => {
    axios.delete('http://localhost:8080/vision', { data: record })
  }

  return (
    <>
      <Banner imageTitlePairs={[{ title: 'Edit Vision Page', image: churchWide }]} />

      <div className="main-container">
        <br />
        <Title style={{ textAlign: 'center' }}>Edit Vision Page</Title>
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
              label="vision"
              name="vision"
              onChange={(e) => handleChange(e)}
              rules={[
                {
                  required: true,
                  message: 'Please input the vision!',
                },
              ]}
            >
              {/*Need to change default*/}
              <Input
                name="vision"
                defaultValue={record.vision ? record.vision : ''}
              />
            </Form.Item>
            <Form.Item
              label="mission"
              name="mission"
              onChange={(e) => handleChange(e)}
              rules={[
                {
                  required: true,
                  message: 'Please input the mission!',
                },
              ]}
            >
              {/*Need to change default*/}
              <Input
                name="mission"
                defaultValue={record.mission ? record.mission : ''}
              />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  )
}

export default EditVision

import React, { useEffect, useState } from 'react'
import Banner from '../../components-reusable/Banner'

import {

  Typography,
  Table,
  Image,
  Space,
  Button,
  Modal,
  Form,
  Input,
} from 'antd'

import axios from 'axios'

import { general } from '../../helper-files/images'
const { churchWide } = general

const EditStatement = () => {
  const { Title } = Typography

  const columns = [
    {
      title: 'Statement',
      dataIndex: 'statement',
      key: 'statement',
    },
    {
      title: 'statement Order',
      dataIndex: 'statementOrder',
      key: 'statementOrder',
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
      axios.get('http://localhost:8080/statement').then((res) => {
        console.log(res.data)
        setData(res.data)
      })
    } catch (err) {
      console.log(err)
    }
  }, [])

  const addRecord = () => {
    axios.post('http://localhost:8080/statement', {
      statement: 'Fill in here',
      statementOrder: 'Fill in here',


    })
  }
  const saveRecord = () => {
    console.log(record.body)
    axios.put('http://localhost:8080/statement', record)
  }
  const deleteRecord = () => {
    console.log('Record here 2', record)
    axios.delete('http://localhost:8080/statement', { data: record })
  }

  return (
    <>
      <Banner imageTitlePairs={[{ title: 'Edit Statement Page', image: churchWide }]} />

      <div className="main-container">
        <br />
        <Title style={{ textAlign: 'center' }}>Edit Statement Page</Title>
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
              label="statement"
              name="statement"
              onChange={(e) => handleChange(e)}
              rules={[
                {
                  required: true,
                  message: 'Please input statement!',
                },
              ]}
            >
              {/*Need to change default*/}
              <Input
                name="statement"
                defaultValue={record.statement ? record.statement : ''}
              />
            </Form.Item>

            <Form.Item
              label="statementOrder"
              name="statementOrder"
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
                name="statementOrder"
                defaultValue={record.statementOrder}
              />
            </Form.Item>

          </Form>
        </Modal>
      </div>
    </>
  )
}

export default EditStatement

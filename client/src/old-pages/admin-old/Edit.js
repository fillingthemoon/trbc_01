import React, { useEffect, useState, useReducer } from 'react'
import Banner from '../../components-reusable/Banner'

import {
  Card,
  Upload,
  Typography,
  Row,
  Col,
  Table,
  Image,
  Space,
  Button,
  Modal,
  Form,
  Input,
  Radio,
} from 'antd'

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  UploadOutlined,
} from '@ant-design/icons'

import axios from 'axios'

import { general } from '../images'
const { churchWide } = general

const Edit = (props) => {
  console.log(props.location.state)

  const { Title } = Typography
  const [pageName, setPageName] = useState(props.location.state)
  const [data, setData] = useState()
  const dataToColumns = {
    Team: {
      key: 'Team',
      fields: ['name', 'designation', 'image'],
    },
    Outreach: {
      key: 'Outreach',
      fields: ['title', 'description', 'image'],
    },
    Resources: {
      key: 'Resources',
      fields: ['title', 'description', 'file'],
    },
  }
  const specialFields = ['image']
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = (e) => {
    console.log(e)
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const [record, setRecordToEdit] = useState({})
  useEffect(() => {
    try {
      axios
        .get(`http://localhost:8080/${pageName.toLowerCase()}`)
        .then((res) => {
          setData(res.data)
        })
    } catch (err) {
      console.log(err)
    }
  }, [])

  const columns = dataToColumns[pageName].fields.map((i) => {
    if (i === 'image') {
      return {
        title: i,
        dataIndex: i,
        key: i,
        render: (i) => (
          <>
            <Image src={i} />
          </>
        ),
      }
    }
    return {
      title: i,
      dataIndex: i,
      key: i,
    }
  })

  columns.push({
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a
          onClick={() => {
            showModal()
            setRecordToEdit(record)
          }}
        >
          Edit
        </a>
        <a>Delete</a>
      </Space>
    ),
  })
  const [form] = Form.useForm()

  const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value,
    }
  }
  const handleChange = (event) => {
    console.log(record)
    Object.entries(record).forEach((i) => {
      if (i[0] === event.target.name) {
        record[event.target.name] = event.target.value
        setRecordToEdit(record)
      }
    })

    setFormData({
      name: event.target.name,
      value: event.target.value,
    })
  }

  const [formData, setFormData] = useReducer(formReducer, {})
  const onFinish = () => {
    console.log(record)
    setIsModalVisible(false)
  }
  const saveRecord = () => {
    axios.put(`http://localhost:8080/${pageName.toLowerCase()}`, record)
  }
  const addRecord = () => {
    axios.post(`http://localhost:8080/${pageName.toLowerCase()}`, {
      name: 'Fill name',
      designation: 'Fill Designation',
      image: '',
    })
  }
  const renderRecord = (record) => {
    return (
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{ modifier: 'public' }}
      >
        {Object.entries(record).map((i) => {
          if (i[0] === 'image') {
            return (
              <Form.Item>
                <Upload name="logo" action="/upload.do" listType="picture">
                  <Button icon={<UploadOutlined />}>
                    Click to upload new image
                  </Button>
                </Upload>
              </Form.Item>
            )
          } else if (i[0] !== '_id' && i[0] !== '__v') {
            return (
              <Form.Item>
                <Input
                  type="textarea"
                  name={i[0]}
                  defaultValue={i[1]}
                  onChange={handleChange}
                />
              </Form.Item>
            )
          }
        })}
      </Form>
    )
  }

  return (
    <>
      <Banner imageTitlePairs={[{ title: 'Edit Home Page', image: churchWide }]} />

      <div className="main-container">
        <br />
        <Title style={{ textAlign: 'center' }}>Edit {pageName} Page</Title>
        <hr className="thick-line"></hr>
        <br />
        <br />
        {pageName}

        <Table columns={columns} dataSource={data} />
        <Button
          key="Add"
          onClick={() => {
            addRecord()
            window.location.reload()
            // setData()
          }}
        >
          Add
        </Button>
        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="cancel" onClick={handleCancel}>
              Cancel
            </Button>,
            <Button
              key="submit"
              type="primary"
              onClick={() => {
                onFinish()
                saveRecord()
              }}
            >
              Save
            </Button>,
          ]}
        >
          {record !== null ? renderRecord(record) : null}
        </Modal>
      </div>
    </>
  )
}

export default Edit

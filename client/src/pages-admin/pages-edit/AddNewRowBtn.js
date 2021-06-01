import React, { useState } from 'react'

import {
  Input,
  InputNumber,
  Form,
  Button,
  Modal,
} from 'antd'

const { TextArea } = Input

const FormField = ({ title }) => {
  const inputNode = () => {
    if (title === 'text') {
      return <TextArea style={{ minWidth: '500px' }} />
    } else {
      return <TextArea style={{ minWidth: '150px' }} />
    }
  }

  // Return either the Form inputs or cell content
  return (
    (<Form.Item
      name={title}
      rules={[{ required: true, message: `Please input "${title}"!` }]}
    >
      {inputNode()}
    </Form.Item>)
  )
}

const AddNewRowBtn = ({ section }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add New Row
      </Button>
      <Modal
        title="Add New Row"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[]}
      >
        <Form>
          {[1, 2, 3].map((x, i) =>
            <FormField key={i} />
          )}
          <Button key="submit" type="primary" onClick={handleOk}>
            Submit
          </Button>
        </Form>
      </Modal>
    </>
  )
}

export default AddNewRowBtn
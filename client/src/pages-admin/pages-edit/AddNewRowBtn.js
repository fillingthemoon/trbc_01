import React, { useState } from 'react'

import { flattenNestedObject, convertName } from '../../helper-files/helperFunctions'

import {
  Input,
  Form,
  Button,
  Modal,
} from 'antd'

const { TextArea } = Input

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 17,
  },
}

const FormField = ({ title, flattenedSection }) => {
  const inputNode = () => {
    return <TextArea />
  }

  // Return either the Form inputs or cell content
  return (
    (<Form.Item
      name={title}
      label={convertName('camel', 'proper', title)}
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

  const hiddenFormFields = ['id', 'itemId', 'page', 'pageSection']
  const flattenedSection = flattenNestedObject(section[0])
  const formFields = Object.keys(flattenedSection)
    .filter(formField => !hiddenFormFields.includes(formField))

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
        <Form {...layout}>
          {formFields.map((formField, i) =>
            <FormField key={i} title={formField} flattenedSection={flattenedSection} />
          )}
          <Form.Item wrapperCol={{ offset: 6 }} >
            <Button key="submit" type="primary" onClick={handleOk}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default AddNewRowBtn
import React, { useState } from 'react'

import { flattenNestedObject, convertName } from '../../helper-files/helperFunctions'

import {
  Input,
  Form,
  Button,
  Modal,
  Row,
  Col,
} from 'antd'

const { TextArea } = Input

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

  const hiddenFormFields = [
    'id',
    // 'itemId', 'page', 'pageSection',
    // 'pageEn', 'pageSectionEn', 'pageCh', 'pageSectionCh'
  ]
  const flattenedSection = flattenNestedObject(section[0])
  const formFields = Object.keys(flattenedSection)
    .filter(formField => !hiddenFormFields.includes(formField))

  const formFieldsOtherLanguage = formFields.map(formField => {
    if (formField.slice(-2) === 'En') {
      return `${formField.substring(0, formField.length - 2)}Ch`
    } else if (formField.slice(-2) === 'Ch') {
      return `${formField.substring(0, formField.length - 2)}En`
    } else {
      return formField
    }
  })

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
        width='60%'
      >
        <Form>
          <Row gutter={30}>
            <Col span={12}>
              {formFields.map((formField, i) =>
                <FormField key={i} title={formField} flattenedSection={flattenedSection} />
              )}
            </Col>
            <Col span={12}>
              {formFieldsOtherLanguage.map((formField, i) =>
                <FormField key={i} title={formField} flattenedSection={flattenedSection} />
              )}
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
              <Button key="submit" type="primary" onClick={handleOk}>
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  )
}

export default AddNewRowBtn
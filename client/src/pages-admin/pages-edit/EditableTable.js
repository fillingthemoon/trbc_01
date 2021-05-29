import React from 'react'

import {
  Table,
  Input,
  InputNumber,
  Popconfirm,
  Form,
  Typography,
} from 'antd'

const EditableTable = ({ section }) => {
  const [form] = Form.useForm()

  // const columns =

  const fields = section.map(sectionItem => {
    // Iterate through each field in the section item
    return Object.keys(sectionItem).map((field, i) =>
      !(typeof sectionItem[field] === 'object' && sectionItem[field] !== null)
        ? field
        // Iterate through each subfield if the field is a JavaScript object
        : Object.keys(sectionItem[field]).map((subField, j) =>
          subField
        )
    )
  })[0]

  console.log(fields)

  return (
    // <Form form={form}>
    // </Form>
    <div>
      {/* Iterate through each section item */}
    </div>
  )
}

export default EditableTable
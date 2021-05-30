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
  })[0].flat()

  const columns = fields.map(field => {
    return {
      title: field,
      dataIndex: field,
      editable: true,
    }
  })
    .concat([
      {
        title: 'operation',
        dataIndex: 'operation',
        render: (_, record) => {
          const editable = isEditing(record);
          return editable ? (
            <span>
              <a
                href="javascript:;"
                onClick={() => save(record.key)}
                style={{
                  marginRight: 8,
                }}
              >
                Save
              </a>
              <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                <a>Cancel</a>
              </Popconfirm>
            </span>
          ) : (
            <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
              Edit
            </Typography.Link>
          );
        },
      }
    ])

  console.log(fields)

  return (
    <Form form={form} component={false}>
      <Table
      // components={{
      //   body: {
      //     cell: EditableCell,
      //   },
      // }}
      // bordered
      // dataSource={data}
      // columns={mergedColumns}
      // rowClassName="editable-row"
      // pagination={{
      //   onChange: cancel,
      // }}
      />
    </Form>
  )
}

export default EditableTable
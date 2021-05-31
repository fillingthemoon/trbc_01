import React, { useState, useEffect } from 'react'

import {
  Table,
  Input,
  InputNumber,
  Popconfirm,
  Form,
  Typography,
} from 'antd'

const EditableCell = ({ editing, dataIndex, title, inputType, record, index, children, ...restProps }) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />
  return (
    <td {...restProps}>
      {editing
        ? (<Form.Item name={dataIndex} style={{ margin: 0 }} rules={[
          {
            required: true,
            message: `Please Input ${title}!`,
          },
        ]}
        >
          {inputNode}
        </Form.Item>)
        : (children)
      }
    </td>
  )
}

const EditableTable = ({ section }) => {
  const [form] = Form.useForm()
  const [data, setData] = useState([])
  const [editingKey, setEditingKey] = useState('')

  useEffect(() => {
    const sectionData = section.map((sectionItem, i) => {
      return {
        key: i,
        item_id: sectionItem.item_id,
        page: sectionItem.page,
        sectionName: sectionItem.sectionName,
        title: sectionItem.title,
        text: sectionItem.text,
        imgSrc: sectionItem.imgSrc,
        id: sectionItem.id,
      }
    })

    setData(sectionData)
  }, [])

  const isEditing = (record) => record.key === editingKey

  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    })
    setEditingKey(record.key)
  }

  const cancel = () => {
    setEditingKey([])
  }

  const save = async (key) => {
    try {
      const row = await form.validateFields()
      const newData = [...data]
      const index = newData.findIndex((item) => key === item.key)

      if (index > -1) {
        const item = newData[index]
        newData.splice(index, 1, { ...item, ...row })
        setData(newData)
        setEditingKey('')
      } else {
        newData.push(row)
        setData(newData)
        setEditingKey('')
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo)
    }
  }


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
          const editable = isEditing(record)
          return editable ? (
            <span>
              <a
                href="javascript:;"
                onClick={() => save(record.key)}
                style={{ marginRight: 8, }}
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
          )
        },
      }
    ])

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    }
  })

  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
        scroll={{ x: 2000 }}
      />
    </Form>
  )
}

export default EditableTable
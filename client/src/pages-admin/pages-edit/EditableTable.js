import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { setNotification } from '../../reducers/notificationReducer'

import { flattenNestedObject } from '../../helper-files/helperFunctions'

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

  const dispatch = useDispatch()

  useEffect(() => {
    const sectionData = section.map((sectionItem, i) => {

      return {
        key: i,
        ...flattenNestedObject(sectionItem),
      }
    })

    setData(sectionData)
  }, [])

  const isEditing = (record) => record.key === editingKey

  const edit = (record) => {
    form.setFieldsValue({ ...record })
    setEditingKey(record.key)
  }

  const cancel = () => { setEditingKey('') }

  const checkForUneditableColumns = (row, index) => {
    const uneditableColumns = ['itemId']

    uneditableColumns.forEach(col => {
      // console.log(data[index][col], row[col])

      if (typeof data[index][col] === 'number') {
        row[col] = Number(row[col])
      }
      if (data[index][col] !== row[col]) {
        const errorMsg = `You are not authorised to edit the column ${col}`
        dispatch(setNotification('error', errorMsg, 3))
        throw errorMsg
      }
    })
  }

  const save = async (key) => {
    try {
      const row = await form.validateFields()
      const newData = [...data]

      const index = newData.findIndex((item) => key === item.key)

      checkForUneditableColumns(row, index)

      if (index >= 0) {
        const item = newData[index]
        newData.splice(index, 1, { ...item, ...row })
        setData(newData)
        setEditingKey('')
      } else {
        newData.push(row)
        setData(newData)
        setEditingKey('')
      }
    } catch (error) {
      console.log('Validation Failed:', error)
    }
  }

  const fieldsToExclude = ['page', 'sectionName', 'id']
  const fields = Object.keys(flattenNestedObject(section[0]))
    .filter(field => !fieldsToExclude.includes(field))

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
              <a onClick={() => save(record.key)} style={{ marginRight: 8 }}>
                Save
              </a>
              <Popconfirm title="Are you sure?" onConfirm={cancel}>
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
        pagination={false}
        scroll={{ x: 2000 }}
      />
    </Form>
  )
}

export default EditableTable
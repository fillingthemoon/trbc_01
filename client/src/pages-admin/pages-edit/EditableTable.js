import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { setNotification } from '../../reducers/notificationReducer'

import { flattenNestedObject } from '../../helper-files/helperFunctions'

import {
  Table,
  Input,
  InputNumber,
  Form,
  Typography,
  Image,
} from 'antd'

const { TextArea } = Input

const cellImgStyle = {
  maxWidth: '500px',
  maxHeight: '150px',
  objectFit: 'scale-down',
}

const EditableCell = ({ editing, dataIndex, title, inputType, record, index, children, ...restProps }) => {
  const inputNode = () => {
    if (title === 'imgSrc') {
      return <Image src={record.imgSrc.props.src} style={cellImgStyle} />
    } else if (inputType === 'number') {
      return <InputNumber />
    } else {
      return <TextArea style={{ minWidth: '150px' }} />
    }
  }

  return (
    <td {...restProps}>
      {editing
        ? (<Form.Item
          name={dataIndex}
          rules={[{ required: true, message: `Please input "${title}"!` },]}
        >
          {inputNode()}
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

      return Object.keys(sectionItem).includes('imgSrc')
        ? {
          ...flattenNestedObject(sectionItem),
          key: i,
          imgSrc: <Image src={sectionItem.imgSrc} style={cellImgStyle} />,
        }
        : {
          ...flattenNestedObject(sectionItem),
          key: i,
        }
    })

    setData(sectionData)
  }, [])

  const isEditing = (record) => record.id === editingKey

  const edit = (record) => {
    form.setFieldsValue({ ...record })
    setEditingKey(record.id)
  }

  const cancel = () => { setEditingKey('') }

  const save = async (id) => {
    try {
      const row = await form.validateFields()
      const newData = [...data]

      const index = newData.findIndex((item) => id === item.id)

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

  const deleteRow = (record) => {
    const newData = data.filter((item) => item.id !== record.id)
    console.log(newData)
  }

  const hiddenFields = ['id']
  const fields = Object.keys(flattenNestedObject(section[0]))
    .filter(field => !hiddenFields.includes(field))

  const uneditableColumns = ['itemId', 'page', 'sectionName', 'id']
  const columns = fields.map(field => {
    return {
      title: field,
      dataIndex: field,
      editable: !uneditableColumns.includes(field),
    }
  })
    .concat([
      {
        title: 'editing',
        dataIndex: 'operation',
        render: (_, record) => {
          const editable = isEditing(record)
          return editable ? (
            <span>
              <a onClick={() => save(record.id)} style={{ marginRight: 8 }}>
                Save
              </a>
              <a onClick={cancel}>Cancel</a>
            </span>
          ) : (
            <>
              <Typography.Link
                disabled={editingKey !== ''}
                onClick={() => edit(record)}
                style={{ display: 'block' }}
              >
                Edit
              </Typography.Link>
              <Typography.Link
                disabled={editingKey !== ''}
                onClick={() => deleteRow(record)}
                style={{ display: 'block' }}>
                Delete
              </Typography.Link>
            </>
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
        scroll={{ x: mergedColumns.length * 200 }}
      />
    </Form>
  )
}

export default EditableTable
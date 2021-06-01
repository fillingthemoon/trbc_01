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
  Popconfirm,
  Image,
  Button,
} from 'antd'

const { TextArea } = Input

const cellImgStyle = {
  maxWidth: '500px',
  maxHeight: '150px',
  objectFit: 'scale-down',
}

// Component for Editable Cell
const EditableCell = ({ editing, dataIndex, title, inputType, record, index, children, ...restProps }) => {
  const inputNode = () => {
    if (title === 'imgDisplay') {
      return <Image src={record.imgSrc} style={cellImgStyle} />
    } else if (inputType === 'number') {
      return <InputNumber />
    } else if (title === 'text') {
      return <TextArea style={{ minWidth: '500px' }} />
    } else {
      return <TextArea style={{ minWidth: '150px' }} />
    }
  }

  // Return either the Form inputs or cell content
  return (
    <td {...restProps} style={title === 'imgSrc' ? { maxWidth: '300px' } : null}>
      {editing // Variable for whether the current record is being edited
        ?
        (<Form.Item
          name={dataIndex}
          rules={[{ required: true, message: `Please input "${title}"!` }]}
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
  // Variable for the record currently being edited
  const [editingId, setEditingId] = useState('')

  const dispatch = useDispatch()

  // Sets the table's data
  useEffect(() => {
    const sectionData = section.map((sectionItem, i) => {

      return Object.keys(sectionItem).includes('imgSrc')
        ? {
          ...flattenNestedObject(sectionItem),
          key: i,
          imgDisplay: <Image src={sectionItem.imgSrc} style={cellImgStyle}></Image>
        }
        : {
          ...flattenNestedObject(sectionItem),
          key: i,
        }
    })

    setData(sectionData)
  }, [])

  const isEditing = (record) => record.id === editingId

  const edit = (record) => {
    form.setFieldsValue({ ...record })
    setEditingId(record.id)
  }

  const cancel = () => { setEditingId('') }

  const save = async (record) => {
    try {
      const row = await form.validateFields()
      const newData = [...data]

      const index = newData.findIndex((item) => item.id === record.id)

      if (index >= 0) {
        const item = newData[index]
        newData.splice(index, 1, { ...item, ...row })
        setData(newData)
        setEditingId('')
      } else {
        newData.push(row)
        setData(newData)
        setEditingId('')
      }
    } catch (error) {
      console.log('Validation Failed:', error)
    }
  }

  const deleteRow = (record) => {
    const newData = data.filter((item) => item.id !== record.id)
    setData(newData)
  }

  const hiddenFields = ['id']
  const fields = Object.keys(flattenNestedObject(section[0]))
    .filter(field => !hiddenFields.includes(field))
  // Add image display column if imgSrc exists
  if (Object.keys(flattenNestedObject(section[0])).includes('imgSrc')) {
    fields.push('imgDisplay')
  }

  const uneditableColumns = ['itemId', 'page', 'sectionName', 'id', 'imgDisplay']
  const columns = fields.map(field => {
    return {
      title: field,
      dataIndex: field,
      editable: !uneditableColumns.includes(field),
    }
  })
    // Add the 'editing' column
    .concat([
      {
        title: 'editing',
        dataIndex: 'operation',
        render: (_, record) => {
          const editable = isEditing(record)
          // Checks if the current record is being edited
          return editable ? (
            <>
              <Typography.Link style={{ marginRight: 8 }}>
                <Popconfirm title="Are you sure you want to save this record?" onConfirm={() => save(record)}>
                  Save
                </Popconfirm>
              </Typography.Link>
              <a onClick={cancel}>Cancel</a>
            </>
          ) : (
            <>
              <Typography.Link
                disabled={editingId !== ''}
                onClick={() => edit(record)}
                style={{ display: 'block' }}
              >
                Edit
              </Typography.Link>
              <Typography.Link
                disabled={editingId !== ''}
                style={{ display: 'block' }}>
                <Popconfirm title="Are you sure you want to delete this record?" onConfirm={() => deleteRow(record)}>
                  Delete
                </Popconfirm>
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
        editing: isEditing(record), // Checks if the current record is being edited
        dataIndex: col.dataIndex,
        title: col.title,
        inputType: 'text',
        record,
      }),
    }
  })

  return (
    <Form form={form} component={false}>
      <Button>
        Add New Row
      </Button>
      <Table
        components={{ body: { cell: EditableCell } }}
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
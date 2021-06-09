import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import EditableCell from './EditableCell'
import AddNewRow from './AddNewRow'

import { updateUpcomingSermon, deleteUpcomingSermon } from '../../reducers/upcomingSermonsReducer'

import { convertName, flattenNestedObject, nestFlattenedObjectUpdate } from '../../helper-files/helperFunctions'

import {
  Table,
  Form,
  Typography,
  Popconfirm,
  Image,
} from 'antd'

const cellImgStyle = {
  maxWidth: '500px',
  maxHeight: '150px',
  objectFit: 'scale-down',
}

const EditableTable = ({ editSection }) => {
  const [form] = Form.useForm()
  const [tableData, setTableData] = useState([])
  const [editingId, setEditingId] = useState('') // Variable for the record currently being edited

  const dispatch = useDispatch()
  const language = useSelector(state => state.language)

  // Sets the table's data
  useEffect(() => {
    const sectionData = editSection.map((sectionItem, i) => {
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
    setTableData(sectionData)
  }, [])

  if (editSection.length <= 0) {
    return null
  }

  const isEditing = (record) => record.id === editingId

  const edit = (record) => {
    form.setFieldsValue({ ...record })
    setEditingId(record.id)
  }

  const cancel = () => { setEditingId('') }

  const save = async (record) => {
    try {
      const row = await form.validateFields()
      const newData = [...tableData]

      const index = newData.findIndex((item) => item.id === record.id)

      if (index >= 0) {
        const item = newData[index]
        newData.splice(index, 1, { ...item, ...row })
        setTableData(newData)
        setEditingId('')
      } else {
        newData.push(row)
        setTableData(newData)
        setEditingId('')
      }

      // Get page and pageSection in row object before calling nestFlattenedObjectUpdate
      const pageLang = `page${convertName('dashed', 'proper', language)}`
      const pageSectionLang = `pageSection${convertName('dashed', 'proper', language)}`
      row[pageLang] = record[pageLang]
      row[pageSectionLang] = record[pageSectionLang]

      const nestedRow = nestFlattenedObjectUpdate(row, language)
      dispatch(updateUpcomingSermon(record.id, nestedRow))
    } catch (error) {
      console.log('Validation Failed:', error)
    }
  }

  const deleteRow = (record) => {
    const newData = tableData.filter((item) => item.id !== record.id)
    setTableData(newData)

    dispatch(deleteUpcomingSermon(record.id))
  }

  const hiddenFields = ['id',]
  const fields = Object.keys(flattenNestedObject(editSection[0]))
    .filter(field => !hiddenFields.includes(field))

  // Add image display column if imgSrc exists
  if (Object.keys(flattenNestedObject(editSection[0])).includes('imgSrc')) {
    fields.push('imgDisplay')
  }

  const uneditableColumns = [
    'id', 'itemId', 'page', 'pageSection',
    'pageEn', 'pageSectionEn', 'pageCh', 'pageSectionCh',
    'imgDisplay'
  ]
  const columns = fields.map(field => {
    return {
      // title and dataIndex are the same thing in this case
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
    <>
      <AddNewRow section={editSection} />
      <Form form={form} component={false}>
        <Table
          components={{ body: { cell: EditableCell } }}
          bordered
          dataSource={tableData}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={false}
          scroll={{ x: mergedColumns.length * 200 }}
        />
      </Form>
    </>
  )
}

export default EditableTable
import React from 'react'

import { Input, Form, Image } from 'antd'

const { TextArea } = Input

const cellImgStyle = {
  maxWidth: '500px',
  maxHeight: '150px',
  objectFit: 'scale-down',
}

// Component for Editable Cell
const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = () => {
    if (title === 'imgDisplay') {
      return <Image src={record.imgSrc} style={cellImgStyle} />
    } else if (['text', 'keyResponsibilities', 'requirements'].includes(title)) {
      // Allow for additional width space for these fields
      return <TextArea style={{ minWidth: '500px', minHeight: '200px' }} />
    } else {
      return <TextArea style={{ minWidth: '150px', minHeight: '200px' }} />
    }
  }

  // Return either the Form inputs or cell content
  return (
    <td
      {...restProps}
      style={title === 'imgSrc' ? { maxWidth: '300px' } : null}
    >
      {editing ? ( // Variable for whether the current record is being edited
        <Form.Item
          name={dataIndex}
          rules={[{ required: true, message: `Please input "${title}"!` }]}
        >
          {inputNode()}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  )
}

export default EditableCell

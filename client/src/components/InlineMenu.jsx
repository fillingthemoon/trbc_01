import React, { useState } from 'react'
import { Select, Col, Row } from 'antd'
const { Option } = Select

function InlineMenu() {
  const booksToShow = []
  const books = ['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy']
  books.forEach((i) => {
    booksToShow.push(<Option key={i}>{i}</Option>)
  })
  const congregationToShow = []
  const congregation = ['Sunset', 'English', 'Teochew/Chinese']
  congregation.forEach((i) => {
    congregationToShow.push(<Option key={i}>{i}</Option>)
  })
  const resourcesToShow = []
  const resources = ['Talk', 'Article']
  resources.forEach((i) => {
    resourcesToShow.push(<Option key={i}>{i}</Option>)
  })
  const [selection, setSelection] = useState([])

  const addSelection = (e) => {
    e.forEach((i) => {
      if (!selection.includes(i)) {
        var temp = selection
        temp.push(i)
        setSelection(temp)
      }
    })
  }

  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col>
          <h5 style={{ textAlign: 'left' }}>Book</h5>
          <Select
            mode="multiple"
            allowClear
            style={{ width: '168px' }}
            placeholder="Select book"
            defaultValue={[]}
            onChange={(e) => addSelection(e)}
          >
            {booksToShow}
          </Select>
        </Col>

        <Col>
          <h5 style={{ textAlign: 'left' }}>Congregation</h5>
          <Select
            mode="multiple"
            allowClear
            style={{ width: '168px' }}
            placeholder="Select congregation"
            defaultValue={[]}
            onChange={(e) => addSelection(e)}
          >
            {congregationToShow}
          </Select>
        </Col>

        <Col>
          <h5 style={{ textAlign: 'left' }}>Resource Type</h5>
          <Select
            mode="multiple"
            allowClear
            style={{ width: '168px' }}
            placeholder="Select resource"
            defaultValue={[]}
            onChange={(e) => addSelection(e)}
          >
            {resourcesToShow}
          </Select>
        </Col>
      </Row>
    </>
  )
}
export default InlineMenu

import React from 'react'
import { List, Card, Row, Col, Input, Collapse } from 'antd'
import InlineMenu from '../components/InlineMenu'
import Banner from '../components-reusable/Banner'

import { general } from '../helper-files/images'
const { churchWide } = general

const ResourceLibrary = () => {
  const { Search } = Input
  const { Panel } = Collapse

  const data = [
    {
      title: 'Title 1',
    },
    {
      title: 'Title 2',
    },
    {
      title: 'Title 3',
    },
    {
      title: 'Title 4',
    },
  ]
  const onSearch = (value) => console.log(value)

  return (
    <>
      <Banner imageTitlePairs={[{ title: 'Resource Library', image: churchWide }]} />

      <div className="main-container">
        <br />
        <br />
        <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '80%' }}>
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
            size={'large'}
          />
          <Collapse  >
            <Panel header="Filters" key="1">

              <InlineMenu />
            </Panel>

          </Collapse>
        </div>
        <br />
        <hr className="thick-line"></hr>
        <br />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Row
            gutter={24}
            style={{ display: 'flex', justifyContent: 'center' }}
          >

            <Col>
              <List
                mode="inline"
                grid={{
                  gutter: 16,
                  xs: 1,
                  sm: 2,
                  md: 4,
                  lg: 4,
                }}
                dataSource={data}
                renderItem={(item) => (
                  <List.Item>
                    <Card title={item.title}>Card content</Card>
                  </List.Item>
                )}
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default ResourceLibrary

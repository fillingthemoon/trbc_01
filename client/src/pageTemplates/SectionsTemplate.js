import React from 'react'

import TitleText from '../components/TitleText'
import PersonProfile from '../components/PersonProfile'
import CardItem from '../components/CardItem'

import {
  Divider, Row, Col
} from 'antd'

const sectionTitleStyle = {
  margin: 'auto',
  textAlign: 'center',
  inlineSize: 'min-content',
}

const Section = ({ section, displayType }) => {
  const { sectionName, ...rest } = section

  const items = section[Object.keys(rest)]

  return (
    <div>
      <TitleText title={sectionName} titleStyle={sectionTitleStyle} underlineAlign='center' />
      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        {items.map((item, i) =>
          <Col key={i} style={{ display: 'flex' }}>
            {(() => {
              switch (displayType) {
                case ('personProfile'):
                  return <PersonProfile {...item} />
                case ('card'): {
                  const info = Object.keys(item)
                  return <CardItem item={item} />
                }
              }
            })()}
          </Col>
        )}
      </Row>
    </div>
  )
}

const SectionsTemplate = ({ data, displayType }) => {

  let sections = {}
  for (let i = 0; i < data.length; i++) {
    const sectionName = data[i]['sectionName']
    if (!(Object.keys(sections).includes(sectionName))) {
      sections[sectionName] = [data[i]]
    } else {
      sections[sectionName].push(data[i])
    }
  }

  let reorganisedData = []
  for (let i = 0; i < Object.keys(sections).length; i++) {
    const sectionName = Object.keys(sections)[i]
    const newObj = {
      sectionName: sectionName,
      items: sections[sectionName],
    }
    reorganisedData.push(newObj)
  }

  return (
    <div style={{ padding: '50px 0' }}>
      {reorganisedData.map((section, i) =>
        <div key={i}>
          <Section section={section} displayType={displayType} />
          {i !== reorganisedData.length - 1 && <Divider style={{ margin: '50px 0' }} />}
        </div>
      )}
    </div>
  )
}

export default SectionsTemplate

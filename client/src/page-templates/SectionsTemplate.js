import React from 'react'

import TitleText from '../components-reusable/TitleText'
import PersonProfile from '../components-reusable/PersonProfile'
import ItemDisplay from '../components-reusable/ItemDisplay'
import SectionDivider from '../components-reusable/SectionDivider'

import {
  Row, Col
} from 'antd'

import { convertName } from '../helper-files/helperFunctions'

const titleUnderlineStyle = {
  display: 'flex',
  justifyContent: 'center',
}

const Section = ({ section, displayType }) => {
  const { sectionName, ...rest } = section

  const items = section[Object.keys(rest)]

  return (
    <div>
      <TitleText
        titleUnderlineStyle={titleUnderlineStyle}
        title={convertName('dashed', 'proper', sectionName)}
        titleStyle={{ textAlign: 'center', margin: '30px 0 0 0' }}
        underlineAlign='center'
      />
      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        {items.map((item, i) =>
          <Col key={i} style={{ display: 'flex' }}>
            {(() => {
              switch (displayType) {
                case ('personProfile'):
                  return <PersonProfile {...item} />
                case ('card'): {
                  return <ItemDisplay item={item} />
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
    <div style={{ padding: '50px 5vw' }}>
      {reorganisedData.map((section, i) =>
        <div key={i}>
          <Section section={section} displayType={displayType} />
          {i !== reorganisedData.length - 1
            && <SectionDivider />}
        </div>
      )}
    </div>
  )
}

export default SectionsTemplate

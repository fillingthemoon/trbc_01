import React from 'react'
import { useSelector } from 'react-redux'

import TitleText from '../components-reusable/TitleText'
import PersonProfile from '../components-reusable/PersonProfile'
import ItemDisplay from '../components-reusable/ItemDisplay'
import SectionDivider from '../components-reusable/SectionDivider'

import { Row, Col } from 'antd'

import { convertName } from '../helper-files/helperFunctions'

const titleUnderlineStyle = {
  display: 'flex',
  justifyContent: 'center',
}

const Section = ({ section, displayType }) => {
  const { pageSection, ...rest } = section

  const items = section[Object.keys(rest)]

  return (
    <div>
      <TitleText
        titleUnderlineStyle={titleUnderlineStyle}
        title={convertName('dashed', 'proper', pageSection)}
        titleStyle={{ textAlign: 'center', margin: '30px 0 0 0' }}
        underlineAlign="center"
      />
      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        {items.map((item, i) => (
          <Col key={i} style={{ display: 'flex' }}>
            {(() => {
              switch (displayType) {
                case 'personProfile':
                  return <PersonProfile {...item} />
                case 'card': {
                  return <ItemDisplay item={item} />
                }
              }
            })()}
          </Col>
        ))}
      </Row>
    </div>
  )
}

const SectionsTemplate = ({ data, displayType }) => {
  const language = useSelector((state) => state.language)

  let sections = {}
  for (let i = 0; i < data.length; i++) {
    const pageSection =
      data[i][language === 'en' ? 'pageSectionEn' : 'pageSectionCh']
    if (!Object.keys(sections).includes(pageSection)) {
      sections[pageSection] = [data[i]]
    } else {
      sections[pageSection].push(data[i])
    }
  }

  let reorganisedData = []
  for (let i = 0; i < Object.keys(sections).length; i++) {
    const pageSection = Object.keys(sections)[i]
    const newObj = {
      pageSection: pageSection,
      items: sections[pageSection],
    }
    reorganisedData.push(newObj)
  }

  return (
    <div style={{ padding: '50px 5vw' }}>
      {reorganisedData.map((section, i) => (
        <div key={i}>
          <Section section={section} displayType={displayType} />
          {i !== reorganisedData.length - 1 && <SectionDivider />}
        </div>
      ))}
    </div>
  )
}

export default SectionsTemplate

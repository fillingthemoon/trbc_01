import React from 'react'

import TitleText from '../components/TitleText'
import PersonProfile from '../components/PersonProfile'

import {
  Divider, Row, Col, Card
} from 'antd'

const { Meta } = Card

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
      <Row className='ot-people'>
        {items.map((item, i) =>
          <Col key={i}>
            {(() => {
              switch (displayType) {
                case ('personProfile'):
                  return <PersonProfile {...item} />
                case ('card'): {
                  const info = Object.keys(item)
                  return (
                    <Card
                      cover={
                        <img
                          alt="img"
                          src={item[info[2]]}
                        />
                      }
                    >
                      <Meta title={item[info[0]]} description={item[info[1]]} />
                    </Card>
                  )
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

  return (
    <div className='our-team'>
      {data.map((section, i) =>
        <div key={i}>
          <Section section={section} displayType={displayType} />
          {i !== data.length - 1 && <Divider />}
        </div>
      )}
    </div>
  )
}

export default SectionsTemplate

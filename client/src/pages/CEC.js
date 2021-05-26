import React from 'react'

import Banner from '../components-reusable/Banner'
import TitleText from '../components-reusable/TitleText'

import { splitLines, formatParagraph } from '../helper-files/helperFunctions'

import { general } from '../helper-files/images'
const { exterior } = general

import { Typography } from 'antd'
const { Paragraph } = Typography

import cecData from '../data/cec'

const CEC = () => {

  return (
    <div>
      <Banner imageTitlePairs={[{ title: 'Children\'s Enrichment Camp (CEC)', image: exterior }]} />
      <div style={{ padding: '50px 200px' }}>
        {cecData.map((item, i) =>
          <div key={i}>
            <TitleText
              title={item.title}
              titleStyle={{ marginTop: '60px' }}
              text={
                splitLines(item.text).map((paragraph, j) =>
                  <Paragraph key={j}>
                    {formatParagraph(paragraph)}
                  </Paragraph>
                )
              }
              textStyle={{ fontSize: '1rem', fontWeight: 300 }}
            />
          </div>
        )}
      </div>
    </div >
  )
}

export default CEC
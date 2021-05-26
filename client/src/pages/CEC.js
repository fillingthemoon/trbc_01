import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Banner from '../components-reusable/Banner'
import TitleText from '../components-reusable/TitleText'

import { splitLines, formatParagraph } from '../helper-files/helperFunctions'

import { general } from '../helper-files/images'
const { exterior } = general

import { Typography } from 'antd'
const { Paragraph } = Typography

import { getCec } from '../reducers/cecReducer'

const CEC = () => {
  const dispatch = useDispatch()

  const cecData = useSelector(state => state.cec)

  useEffect(() => {
    dispatch(getCec())
  }, [])

  if (!cecData) { return null }

  return (
    <div>
      <Banner imageTitlePairs={[{ title: 'Children\'s Enrichment Camp (CEC)', image: exterior }]} />
      <div style={{ padding: '20px 10%' }}>
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
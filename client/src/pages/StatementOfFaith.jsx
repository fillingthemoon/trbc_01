import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Banner from '../components-reusable/Banner'
import TitleText from '../components-reusable/TitleText'

import { splitLines, formatParagraph, formatText } from '../helper-files/helperFunctions'
import { getWord } from '../helper-files/translate'

import { general } from '../helper-files/images'
const { statementOfFaith } = general

import { getStatementOfFaith } from '../reducers/statementOfFaithReducer'

import { Typography } from 'antd'
const { Paragraph } = Typography

const statementStyle = {
  maxWidth: '800px',
  fontSize: '1rem',
  lineHeight: '30px',
  fontWeight: 250,
  textAlign: 'justify',
  margin: '0',
}

const StatementOfFaith = () => {
  const dispatch = useDispatch()

  const statementOfFaithData = useSelector((state) => state.statementOfFaith)
  const language = useSelector((state) => state.language)

  useEffect(() => {
    dispatch(getStatementOfFaith())
  }, [language])

  if (statementOfFaithData.length <= 0) {
    return null
  }

  return (
    <div>
      <Banner
        imageTitlePairs={[
          {
            title: getWord('Statement of Faith', language),
            image: statementOfFaith,
          },
        ]}
      />
      <div className="all-statement-container">
        {statementOfFaithData.map((statement, i) => (
          <div key={i} style={{ padding: '30px' }}>
            <TitleText
              title={statement.title}
              underlineAlign="center"
              titleUnderlineStyle={{
                display: 'flex',
                justifyContent: 'center',
              }}
            ></TitleText>
            {splitLines(statement.text).map((paragraph, i) => (
              <Paragraph key={i} style={statementStyle}>
                {formatText(formatParagraph(paragraph))}
              </Paragraph>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatementOfFaith

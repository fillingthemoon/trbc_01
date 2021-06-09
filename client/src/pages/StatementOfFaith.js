import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Banner from '../components-reusable/Banner'
import TitleText from '../components-reusable/TitleText'

import { getWord } from '../helper-files/translate'

import { general } from '../helper-files/images'
const { statementOfFaith } = general

import { getStatementOfFaith } from '../reducers/statementOfFaithReducer'

const statementStyle = {
  maxWidth: '800px',
  fontSize: '1rem',
  lineHeight: '30px',
  fontWeight: 250,
  textAlign: 'justify',
}

const StatementOfFaith = () => {
  const dispatch = useDispatch()

  const statementOfFaithData = useSelector(state => state.statementOfFaith)
  const language = useSelector(state => state.language)

  useEffect(() => {
    dispatch(getStatementOfFaith())
  }, [language])

  if (statementOfFaithData.length <= 0) { return null }

  return (
    <div>
      <Banner imageTitlePairs={[{
        title: getWord('Statement of Faith', language),
        image: statementOfFaith
      }]} />
      <div className='all-statement-container'>
        {statementOfFaithData.map((statement, i) =>
          <div key={i} style={{ padding: '30px' }}>
            <TitleText
              title={statement.title}
              underlineAlign='center'
              text={statement.text}
              textStyle={statementStyle}
              titleUnderlineStyle={{ display: 'flex', justifyContent: 'center' }}
            ></TitleText>
          </div>
        )}
      </div>
    </div>
  )
}

export default StatementOfFaith
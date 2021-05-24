import React from 'react'
import Banner from '../components-reusable/Banner'
import TitleText from '../components-reusable/TitleText'

import { general } from '../images'
const { exterior } = general

import statementOfFaithData from '../data/statement-of-faith'

const statementStyle = {
  maxWidth: '800px',
  fontSize: '1rem',
  lineHeight: '30px',
  fontWeight: 250,
  textAlign: 'justify',
}

const StatementOfFaith = () => {
  return (
    <div>
      <Banner imageTitlePairs={[{ title: 'Statement of Faith', image: exterior }]} />
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
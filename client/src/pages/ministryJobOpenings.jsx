import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Banner from '../components-reusable/Banner'
import TitleText from '../components-reusable/TitleText'

import { getWord } from '../helper-files/translate'

import { general } from '../helper-files/images'
const { desk } = general

import { getStatementOfFaith } from '../reducers/statementOfFaithReducer'

const StatementOfFaith = () => {
  const dispatch = useDispatch()

  // const statementOfFaithData = useSelector((state) => state.statementOfFaith)
  const language = useSelector((state) => state.language)

  // useEffect(() => {
  //   dispatch(getStatementOfFaith())
  // }, [language])

  // if (statementOfFaithData.length <= 0) {
  //   return null
  // }

  return (
    <div>
      <Banner
        imageTitlePairs={[
          {
            title: getWord('Ministry/Job Openings', language),
            image: desk,
          },
        ]}
      />
      <div className="">
        {/* {statementOfFaithData.map((statement, i) => (
          <div key={i} style={{ padding: '30px' }}>
            <TitleText
              title={statement.title}
              underlineAlign="center"
              text={statement.text}
              textStyle={statementStyle}
              titleUnderlineStyle={{
                display: 'flex',
                justifyContent: 'center',
              }}
            ></TitleText>
          </div>
        ))} */}
      </div>
    </div>
  )
}

export default StatementOfFaith

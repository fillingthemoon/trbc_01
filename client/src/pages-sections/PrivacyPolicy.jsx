import React from 'react'
import { useSelector } from 'react-redux'

import Banner from '../components-reusable/Banner'
import TitleText from '../components-reusable/TitleText'

import { splitLines, formatParagraph } from '../helper-files/helperFunctions'
import { getWord } from '../helper-files/translate'

import { general } from '../helper-files/images'
const { lock } = general

import { Typography } from 'antd'
const { Paragraph } = Typography

const statementStyle = {
  maxWidth: '800px',
  fontSize: '1rem',
  lineHeight: '30px',
  fontWeight: 250,
  textAlign: 'justify',
}

const StatementOfFaith = () => {
  const language = useSelector((state) => state.language)

  return (
    <div>
      <Banner
        imageTitlePairs={[
          {
            title: getWord('Privacy Policy', language),
            image: lock,
          },
        ]}
      />
      <div className="">
      </div>
    </div>
  )
}

export default StatementOfFaith

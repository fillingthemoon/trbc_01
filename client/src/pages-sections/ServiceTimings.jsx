import React from 'react'
import { useSelector } from 'react-redux'

import TitleText from '../components-reusable/TitleText'
import serviceTimingsData from './serviceTimingsData'

import { getWord } from '../helper-files/translate'

const titleUnderlineStyle = {
  display: 'flex',
  justifyContent: 'center',
}

console.log(serviceTimingsData)

const ServiceTimings = () => {
  const language = useSelector((state) => state.language)

  return (
    <div className="service-timings-container">
      <TitleText
        titleUnderlineStyle={titleUnderlineStyle}
        title={getWord(
          'Service Timings',
          language
        )}
        underlineAlign="center"
      />
    </div>
  )
}

export default ServiceTimings

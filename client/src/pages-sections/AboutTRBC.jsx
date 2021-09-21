import React from 'react'
import { useSelector } from 'react-redux'

import TitleText from '../components-reusable/TitleText'

import { getWord } from '../helper-files/translate'

const styles = {
  card: {
    margin: '60px 0',
  },
  titleUnderline: {
    display: 'flex',
    justifyContent: 'center',
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  aboutTRBCText: {
    textAlign: 'center',
    padding: '0 10px',
    width: '800px',
    fontSize: '1rem',
  },
}

const ServiceTimings = () => {
  const language = useSelector((state) => state.language)

  return (
    <div className="about-trbc-container" style={styles.card}>
      <TitleText
        titleUnderlineStyle={styles.titleUnderline}
        title={getWord('About TRBC', language)}
        underlineAlign="center"
      />
      <div style={styles.textContainer}>
        <span style={styles.aboutTRBCText}>
          {'We\'re a Baptist church with more than 80 years of history located in Novena, along Thomson Road, Singapore. In 1937, we started out as a Teochew church. Whether you are looking for a church for your family, or interested to know more about Christianity, we welcome you to join us as part of God\'s family @TRBC.'}
        </span>
      </div>
    </div>
  )
}

export default ServiceTimings

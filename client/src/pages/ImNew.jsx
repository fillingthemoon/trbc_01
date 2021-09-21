import React from 'react'
import { useSelector } from 'react-redux'
import ReactMarkdown from 'react-markdown'

import Services from '../pages-sections/Services'

import Banner from '../components-reusable/Banner'
import TitleText from '../components-reusable/TitleText'
import SectionDivider from '../components-reusable/SectionDivider'

import { getWord } from '../helper-files/translate'

import { general } from '../helper-files/images'
const { sanctuary01 } = general

import {
  colorLOrange,
} from '../helper-files/colors'

const titleUnderlineStyle = {
  display: 'flex',
  justifyContent: 'center',
}

const yourFirstVisitMd = `
Thinking of visiting TRBC? Here are some commonly asked questions our visitors have.

&nbsp;

# What are your services like?
Our Sunday worship services (8:30am, 10:30am, 5:00pm) are a time of praising God through songs and being taught from the Bible through our pastors.

Before or after the worship services, we also have Sunday school classes where we gather in small classes either online or in-person, to learn from the Bible. 

We hope that your heart will be drawn closer to Him through each service and gathering in TRBC.

&nbsp;

# Is your church family friendly?
We have children, youth and senior fellowship groups in TRBC. Whether you have young children or senior family members, we hope your first visit to TRBC will be friendly and enjoyable for your whole family.

&nbsp;

# How do I get to TRBC?
We are located at 45 Thomson Road, accessible by car via Suffolk Walk.

Limited parking is available.

From Novena MRT, it is a 10 minute unsheltered walking distance. From Newton MRT, it is a 15 minute unsheltered walking distance.
`

const YourFirstVisit = () => {
  const language = useSelector((state) => state.language)

  return (
    <div className="your-first-visit-container">
      <TitleText
        titleUnderlineStyle={titleUnderlineStyle}
        title={getWord('Your First Visit', language)}
        titleStyle={{ textAlign: 'center', fontSize: '2.5rem' }}
        underlineAlign="center"
      />
      <ReactMarkdown>{yourFirstVisitMd}</ReactMarkdown>
    </div>
  )
}

const ImNew = () => {
  const language = useSelector((state) => state.language)

  return (
    <>
      <Banner
        imageTitlePairs={[
          {
            title: getWord('I\'m New', language),
            image: sanctuary01,
          },
        ]}
      />
      <div className="im-new-container">
        <Services />
        <SectionDivider />
        <YourFirstVisit />
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScgtxR8htjfGrAmdpbaSteFdQWvB52Cr99CrzkVMN9mqwd8Ww/viewform?embedded=true"
          width="100%"
          height="950"
          style={{ backgroundColor: colorLOrange, padding: '40px 0' }}
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </div>
    </>
  )
}

export default ImNew

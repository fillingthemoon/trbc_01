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
Welcome to Thomson Road Baptist Church and this being your first visit, allow us to give you an orientation of our building. We have two blocks consisting of the main building where most of our activities are held and an educational block which houses our **kindergarten ministry**.

The main building consist of five floors, our main ministries are located on the first three floors and the second floor of the educational block.

The first floor is where our **multi-purpose hall** is located and on Sundays we usually will have a Tea Fellowship after the service in this place.

Our **main sanctuary** is on the 2nd floor.

Our **classrooms, library, choir room and Church Office** are located on the 3rd floor.

You can find the **restrooms** located on all floors.

Please do not hesitate to ask any of us to assist you in finding your way when you visit us.
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

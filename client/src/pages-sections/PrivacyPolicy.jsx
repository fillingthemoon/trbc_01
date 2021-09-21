import React from 'react'
import { useSelector } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import Banner from '../components-reusable/Banner'

import { getWord } from '../helper-files/translate'

import { general } from '../helper-files/images'
const { lock } = general

const markdown = `
# Dear members, friends and visitors,

&nbsp;

Thank you for your visit to our website! As the Singapore government has enacted the Personal Data Protection Act, we would like to inform you of a few things as you visit us both online and offline, in our many places of worship. 

This document serves as TRBC’s data protection policies and practices document. We have prepared this document to let you know of our personal data privacy policies, and how we are managing your personal information. We will update the date stamp if there have been changes made.

&nbsp;

Please note that our data protection and privacy policy applies only to your visits to our physical and virtual locations as listed below: 

1. Our physical location – 45 Thomson Road, Singapore 307584,

2. Our virtual locations 

a. http://www.trbc.org.sg, or

b. online on Facebook for TRBC at https://www.facebook.com/pages/category/Baptist-Church/Singapore-Thomson-Road-Baptist-Church-150243898368612/

c. online on Facebook for TRBC's Childrens' Enrichment Camp (CEC) at https://www.facebook.com/groups/cec.trbc/   

&nbsp;

If you have any feedback or complaints, please direct them to the TRBC Data Protection Officers (DPOs) at privacy@trbc.org.sg or call +65-62562277.

&nbsp;

This document was last updated on 15 Sep 2021.

`

const PrivacyPolicy = () => {
  const language = useSelector((state) => state.language)

  return (
    <div>
      <Banner
        imageTitlePairs={[
          {
            title: getWord('TRBC Data Protection and Privacy Policy', language),
            image: lock,
          },
        ]}
      />
      <div className="privacy-policy-container">
        <ReactMarkdown remarkPlugins={[gfm]}>{markdown}</ReactMarkdown>
      </div>
    </div>
  )
}

export default PrivacyPolicy

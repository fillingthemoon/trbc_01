import React from 'react'

import AlternatingImageTextTemplate from '../page_templates/AlternatingImageTextTemplate'
import Banner from '../components/Banner'
import ConnectForm from '../components/ConnectForm'

import { general } from '../images'
const { churchWide } = general

import imNewData from '../data/im-new'

const ImNew = () => {
  return (
    <>
      <Banner imageTitlePairs={[{ title: 'I\'m New', image: churchWide }]} />
      <AlternatingImageTextTemplate
        pageContent={imNewData}
      />
      <ConnectForm />
    </>
  )
}

export default ImNew

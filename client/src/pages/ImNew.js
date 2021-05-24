import React from 'react'

import AlternatingImageTextTemplate from '../page-templates/AlternatingImageTextTemplate'
import Banner from '../components-reusable/Banner'
import ConnectForm from '../components-reusable/ConnectForm'

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

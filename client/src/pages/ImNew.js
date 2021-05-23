import React from 'react'

import AlternatingImageTextTemplate from '../pageTemplates/AlternatingImageTextTemplate'
import Banner from '../components/Banner'
import ConnectForm from '../components/ConnectForm'

import {
  Button, Image, Row, Col, Card, Form, Input, Select,
} from 'antd'

import { general, aboutUs } from '../images'
const { churchWide } = general
const {
  aboutUs1,
  aboutUs2,
  aboutUs3,
} = aboutUs

const pageContent = [
  {
    imageSource: aboutUs1,
    contentTitle: 'The best place to start? Join us for a worship service.',
    contentText:
      `If you’re new to the area, new to church, or just looking for a
      new start, our Sunday morning worship services offer you the
      opportunity to build your faith in God and connect with new
      people.`,
    linkPath: './services',
    linkText: 'View Services',
  },
  {
    imageSource: aboutUs2,
    contentTitle: 'What makes church special is not just the event, but also the relationships we build that help us stay faithful to God.',
    contentText:
      `What makes church special is not just the event, but also the
      relationships we build that help us stay faithful to God.
      
      Whether you’re a single professional, a college student or a
      parent of a special needs child, we have a ministry that we’d love
      for you to be a part of. Check out our ministries page to find a
      small group that you can get connected with.`,
    linkPath: './services',
    linkText: 'View Ministries',
  },
  {
    imageSource: aboutUs3,
    contentTitle: 'Get involved in one of our doing good projects.',
    contentText:
      `A theme we embrace at the Bay Area Christian Church is “God and
      Good.” We believe it’s important that as Christians we are
      constantly working to do good in the lives of the people in our
      community, regardless of religious affiliation.
      
      We’re proud of our members who’ve embraced this call, and are
      inspired by the different “doing good” efforts they’ve championed.
      Check out our volunteer page to learn about how you can get
      involved.`,
    linkPath: './outreach',
    linkText: 'Learn More',
  }
]

const ImNew = () => {
  return (
    <>
      <Banner imageTitlePairs={[{ title: 'I\'m New', image: churchWide }]} />
      <AlternatingImageTextTemplate
        pageContent={pageContent}
      />
      <ConnectForm />
    </>
  )
}

export default ImNew

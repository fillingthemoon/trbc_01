import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Banner from '../components-reusable/Banner'
import SectionsTemplate from '../page-templates/SectionsTemplate'
import { colorPrimaryOrange, colorLOrange } from '../helper-files/colors'

import { getWord } from '../helper-files/translate'

import { ministryJobOpenings } from '../helper-files/images'
const { desk } = ministryJobOpenings

import { getMinistryJobOpenings } from '../reducers/ministryJobOpeningsReducer'

import { Typography } from 'antd'
const { Paragraph, Text } = Typography

const statementStyle = {
  fontSize: '1rem',
  lineHeight: '2rem',
  textAlign: 'justify',
  padding: '2rem 10%',
  color: colorPrimaryOrange,
  backgroundColor: colorLOrange,
}

export const InfoBanner = () => {
  const href = window.location.href.split('/')
  const pageUrl = href[href.length - 1]

  return (
    <div style={statementStyle}>
      <Paragraph style={{ margin: 0 }}>
        Interested applicants should send a cover letter and CV to&nbsp;
        <a href="mailto:hr@trbc.org.sg">hr@trbc.org.sg</a> with the subject
        Application for &quot;(name of position)&quot;. Alternatively, please
        send your physical application addressed to the same committee, to the
        church at 45 Thomson Road, Singapore 307584.
      </Paragraph>
      <br />
      <Paragraph style={{ margin: 0 }}>
        All applications will be treated with strict confidentiality.
      </Paragraph>

      {/* Show Go Back link only if on IndividualPage */}
      {pageUrl !== 'ministry-job-openings' && (
        <>
          <br />
          <Paragraph style={{ margin: 0 }}>
            <Link to="/ministry-job-openings">
              View all ministry/job openings.
            </Link>
          </Paragraph>
        </>
      )}
    </div>
  )
}

const MinistryJobOpenings = () => {
  const dispatch = useDispatch()

  const ministryJobOpeningsData = useSelector(
    (state) => state.ministryJobOpenings
  )
  const language = useSelector((state) => state.language)

  useEffect(() => {
    dispatch(getMinistryJobOpenings())
  }, [language])

  if (ministryJobOpeningsData.length <= 0) {
    return null
  }

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
      <InfoBanner />
      <div className="">
        <SectionsTemplate data={ministryJobOpeningsData} displayType="card" />
      </div>
    </div>
  )
}

export default MinistryJobOpenings

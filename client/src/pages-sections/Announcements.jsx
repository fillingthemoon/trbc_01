import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import TitleText from '../components-reusable/TitleText'

import { splitLines, formatParagraph } from '../helper-files/helperFunctions'
import { getWord } from '../helper-files/translate'

import { Row, Card, Typography } from 'antd'
const { Title, Paragraph } = Typography

import { getAnnouncements } from '../reducers/announcementsReducer'
import { convertName } from '../helper-files/helperFunctions'

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  margin: '20px',
  maxWidth: '550px',
}

const imgStyle = {
  maxHeight: '200px',
  objectFit: 'cover',
}

const AnnouncementCard = ({ announcement }) => {
  const {
    title,
    text,
    imgSrc,
  } = announcement

  return (
    <Card cover={<img alt="img" src={imgSrc} style={imgStyle} />}
      style={cardStyle}
    >
      <Title style={{ fontSize: '1.2rem', marginBottom: '20px' }}>{title}</Title>
      <div>
        {splitLines(text).map((paragraph, i) =>
          <Paragraph key={i} style={{ fontSize: '0.95rem', fontWeight: '300', margin: '0' }}>
            {formatParagraph(paragraph)}
          </Paragraph>
        )}
      </div>
    </Card>
  )
}

const titleUnderlineStyle = {
  display: 'flex',
  justifyContent: 'center',
}

const Announcements = () => {
  const dispatch = useDispatch()

  const announcementsData = useSelector(state => state.announcements)
  const language = useSelector(state => state.language)

  useEffect(() => {
    dispatch(getAnnouncements())
  }, [language])

  if (announcementsData.length <= 0) { return null }

  return (
    <div className='announcements-container'>
      <div>
        <TitleText
          titleUnderlineStyle={titleUnderlineStyle}
          title={getWord(convertName('dashed', 'proper', announcementsData[0].pageSection), language)}
          underlineAlign='center' />
        <Row justify='center'>
          {announcementsData.map((announcement, i) => (
            <AnnouncementCard key={i} announcement={announcement} />
          ))}
        </Row>
      </div>
    </div>
  )
}

export default Announcements
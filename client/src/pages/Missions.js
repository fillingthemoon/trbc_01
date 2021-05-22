import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Typography, Row, Col, Image } from 'antd'

import Banner from '../components/Banner'

import { general } from '../images'
const { churchWide } = general

const Outreach = () => {
  const { Title } = Typography

  const data = [
    {
      type: 'missions',
      key: 'Myanmar',
      summary:
        'The cell group of Chaohua worship began in October 2005, when Preacher Lin Xingcheng and Director Zheng Mei\'e each led a group.',
      writeup:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in arcu lorem. Proin posuere enim in fringilla iaculis. Etiam eu arcu ligula. Quisque in enim et ligula suscipit tempor et scelerisque magna. Nunc leo ipsum, pellentesque porta metus id, efficitur fringilla sem.',
      image: ''
    },
    {
      type: 'missions',
      key: 'Bintan Island',
      summary:
        'The cell group of Chaohua worship began in October 2005, when Preacher Lin Xingcheng and Director Zheng Mei\'e each led a group.',
      writeup:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in arcu lorem. Proin posuere enim in fringilla iaculis. Etiam eu arcu ligula. Quisque in enim et ligula suscipit tempor et scelerisque magna. Nunc leo ipsum, pellentesque porta metus id, efficitur fringilla sem.',
      image: ''
    },
    {
      type: 'missions',
      key: 'Nepal',
      summary:
        'The cell group of Chaohua worship began in October 2005, when Preacher Lin Xingcheng and Director Zheng Mei\'e each led a group.',
      writeup:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in arcu lorem. Proin posuere enim in fringilla iaculis. Etiam eu arcu ligula. Quisque in enim et ligula suscipit tempor et scelerisque magna. Nunc leo ipsum, pellentesque porta metus id, efficitur fringilla sem.',
      image: ''
    },
    {
      type: 'missions',

      key: 'China',
      summary:
        'The cell group of Chaohua worship began in October 2005, when Preacher Lin Xingcheng and Director Zheng Mei\'e each led a group.',
      writeup:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in arcu lorem. Proin posuere enim in fringilla iaculis. Etiam eu arcu ligula. Quisque in enim et ligula suscipit tempor et scelerisque magna. Nunc leo ipsum, pellentesque porta metus id, efficitur fringilla sem.',
      image: ''
    },
    {
      type: 'missions',
      key: 'India',
      summary:
        'The cell group of Chaohua worship began in October 2005, when Preacher Lin Xingcheng and Director Zheng Mei\'e each led a group.',
      writeup:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in arcu lorem. Proin posuere enim in fringilla iaculis. Etiam eu arcu ligula. Quisque in enim et ligula suscipit tempor et scelerisque magna. Nunc leo ipsum, pellentesque porta metus id, efficitur fringilla sem.',
      image: ''
    },
  ]

  const [event, setEvent] = useState('')
  console.log(event)
  return (
    <div>
      <Banner imageTitlePairs={[{ title: 'Missions', image: churchWide }]} />

      {/* Church-Wide content separated into two rows: Second Language Class, Interest Groups */}
      <div className="main-container">
        <br />
        <br />
        {/* Second Language Class */}
        <Title>Missions</Title>
        <hr className="thick-line"></hr>
        <br />
        <br />
        <Row gutter={[60, 60]}>
          {/* Use map function to reutn Columns of information according to data object above*/}
          {data.map((card) => {
            return (
              <Col xs={{ span: 12 }} lg={{ span: 8 }} key={card.key}>
                {/* Will link to Event page, passing card information as the state */}
                <Link
                  to={{ pathname: `mission/${card.key}`, state: card }}
                >
                  <Image
                    src="error"
                    fallback="data:image/png;base64,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"
                    onClick={() => setEvent(card.key)}
                  />
                </Link>
                <h2>
                  <strong>{card.key}</strong>
                </h2>
                <p>{card.summary}</p>
              </Col>
            )
          })}
        </Row>
        <br />
        <br />

      </div>
    </div>
  )
}

export default Outreach

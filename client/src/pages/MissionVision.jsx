import React from 'react'
import { useSelector } from 'react-redux'

import Banner from '../components-reusable/Banner'
import TitleText from '../components-reusable/TitleText'

import { getWord } from '../helper-files/translate'

import { Row, Col, Image } from 'antd'

import { general } from '../helper-files/images'
const { exterior, mountain, fallbackImg } = general

const MissionVision = () => {
  const language = useSelector((state) => state.language)

  return (
    <div>
      <Banner
        imageTitlePairs={[
          {
            title: getWord('Mission & Vision', language),
            image: exterior,
          },
        ]}
      />
      <Row justify="center" align="middle" id="mission-vision">
        {/* <Col className="mv-img-col">
          <Image className="mv-img" src={mountain} fallback={fallbackImg} />
        </Col> */}
        <Col className="mv-text-col">
          <TitleText
            className="mv-text-mission"
            title={language === 'en' ? 'Mission' : '使命'}
            text={
              language === 'en'
                ? 'To Be Disciples Moving as One Body in Christ, Bearing Fruit and Being the Salt and Light of the World.'
                : '成为在基督里同心合一、多结果子、作盐作光的门徒'
            }
            titleStyle={{ fontSize: '2rem', marginBottom: '30px' }}
            textStyle={{ fontSize: '1rem', margin: '0' }}
          />
          <TitleText
            className="mv-text-mission"
            title={language === 'en' ? 'Vision' : '异象'}
            text={
              language === 'en'
                ? 'One Church Growing Inwardly and Outwardly.'
                : '一个向内、向外成长的教会'
            }
            titleStyle={{ fontSize: '2rem', marginBottom: '3s0px' }}
            textStyle={{ fontSize: '1rem', margin: '0' }}
          />
        </Col>
      </Row>
    </div>
  )
}

export default MissionVision

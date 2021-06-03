import React from 'react'
import Banner from '../components-reusable/Banner'
import TitleText from '../components-reusable/TitleText'

import { Row, Col, Image } from 'antd'

import { general } from '../helper-files/images'
const { exterior, mountain, fallbackImg } = general

const MissionVision = () => {
  return (
    <div>
      <Banner imageTitlePairs={[{ title: 'Mission and Vision', image: exterior }]} />
      <Row justify='center' id='mission-vision'>
        <Col className='mv-img-col'>
          <Image
            className='mv-img'
            src={mountain}
            fallback={fallbackImg}
          />
        </Col>
        <Col className='mv-text-col'>
          <TitleText
            className='mv-text-mission'
            title='Mission'
            text={[
              'To Be Disciples Moving as One Body in Christ, Bearing Fruit and Being the Salt and Light of the World.',
              '成为在基督里同心合一、多结果子、作盐作光的门徒'
            ]}
            titleStyle={{ fontSize: '2rem', marginBottom: '30px' }}
            textStyle={{ fontSize: '1rem', margin: '0' }}
          />
          <TitleText
            className='mv-text-mission'
            title='Vision'
            text={[
              'One Church Growing Inwardly and Outwardly.',
              '一个向内、向外成长的教会'
            ]}
            titleStyle={{ fontSize: '2rem', marginBottom: '3s0px' }}
            textStyle={{ fontSize: '1rem', margin: '0' }}
          />
        </Col>
      </Row>
    </div>
  )
}

export default MissionVision

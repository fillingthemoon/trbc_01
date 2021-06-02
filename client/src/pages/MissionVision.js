import React from 'react'
import Banner from '../components-reusable/Banner'
import TitleText from '../components-reusable/TitleText'

import { Row, Col, Image } from 'antd'

import { general } from '../helper-files/images'
const { exterior, tempImg } = general

const MissionVision = () => {
  return (
    <div>
      <Banner imageTitlePairs={[{ title: 'Mission and Vision', image: exterior }]} />
      <div>
        <Row align='middle' justify='center' gutter={100}>
          <Col className='mv-img'>
            <Image
              src=""
              fallback={tempImg}
            />
          </Col>
          <Col className='mv-text'>
            <TitleText
              title='Mission'
              text={[
                'To Be Disciples Moving as One Body in Christ, Bearing Fruit and Being the Salt and Light of the World.',
                '成为在基督里同心合一、多结果子、作盐作光的门徒'
              ]}
              titleStyle={{ fontSize: '2rem' }}
              textStyle={{ fontSize: '1rem' }}
            />
            <TitleText
              title='Vision'
              text={[
                'One Church Growing Inwardly and Outwardly.',
                '一个向内、向外成长的教会'
              ]}
              titleStyle={{ fontSize: '2rem' }}
              textStyle={{ fontSize: '1rem' }}
            />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default MissionVision

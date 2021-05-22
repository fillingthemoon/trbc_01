import React from 'react'
import { Carousel, Image } from 'antd'
import { UserOutlined } from '@ant-design/icons'

import Banner from '../components/Banner'

const contentStyle = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '50%',
  height: '80%',
  // height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}

function Home() {
  return (
    <div>
      <Banner image={require('../imgs/exterior.jpg')} title={'Thomson Road Baptist Church'}/>

      {/* <Carousel autoplay>
        <div>
          <Image
            style={contentStyle}
            src={require('../imgs/home/cec2020.png')}
          />
        </div>
        <div>
          <Image
            style={contentStyle}
            src={require('../imgs/home/christmas_event2020.png')}
          />
        </div>
      </Carousel> */}
    </div>
  )
}

export default Home

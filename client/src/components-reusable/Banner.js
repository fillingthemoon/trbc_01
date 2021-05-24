import React from 'react'

import { Carousel } from 'antd'

import { Typography } from 'antd'
const { Title } = Typography

const Banner = ({ imageTitlePairs }) => {
  return (
    <Carousel autoplay autoplaySpeed={3000} adaptiveHeight={true} height='500px' accessibility>
      {imageTitlePairs.map(({ image, title }, i) =>
        <div className="banner-container" key={i}>
          <img className="banner-exterior" src={image} alt="" />
          <span className="banner-title">{title}</span>
        </div>
      )}
    </Carousel >
  )
}

export default Banner

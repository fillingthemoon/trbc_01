import React from 'react'

import { Carousel } from 'antd'

import { Row, Col, Image } from 'antd'

const Banner = ({ imageTitlePairs }) => {
  return (
    <Carousel autoplay autoplaySpeed={5000} adaptiveHeight={true}>
      {imageTitlePairs.map(({ image, title }, i) =>
        <div className="top-img-container" key={i}>
          <img className="top-img-exterior" src={image} alt="" />
          <span className="top-img-title">{title}</span>
        </div>
      )}
    </Carousel >
  )
}

export default Banner

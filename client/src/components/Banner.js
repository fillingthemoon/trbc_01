import React from 'react'

import { Carousel } from 'antd'

const Banner = ({ imageTitlePairs }) => {
  return (
    <Carousel autoplay autoplaySpeed={5000}>
      {imageTitlePairs.map(({ image, title }, i) =>
        <div className="top-img-container" key={i}>
          <img className="top-img-exterior" src={image} alt="" />
          <div className="top-img-title">{title}</div>
        </div>
      )}
    </Carousel >
  )
}

export default Banner

import React from 'react'

import { Carousel } from 'antd'

const Banner = ({ imageTitlePairs }) => {
  return (
    <Carousel autoplay autoplaySpeed={3000} adaptiveHeight={true} accessibility>
      {imageTitlePairs.map(({ image, title, titleFontSize }, i) => (
        <div className="banner-container" key={i}>
          <img
            className={
              image.includes('general/Home')
                ? 'banner-exterior'
                : 'banner-exterior-with-filter'
            }
            src={image}
            alt=""
          />
          <span style={{ fontSize: titleFontSize }} className="banner-title">
            {title}
          </span>
        </div>
      ))}
    </Carousel>
  )
}

export default Banner

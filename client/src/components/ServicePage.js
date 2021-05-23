import React from 'react'

const ServicePage = (props) => {
  const {
    currService,
    currServiceData
  } = props

  return (
    <div className='service-page-container'>
      <ul>
        {currServiceData.map((item, i) =>
          <div key={i}>
            <p>{item.congre}</p>
            <p>{item.title}</p>
            <p>{item.writeup}</p>
            <p>{item.time}</p>
            <p>{item.location}</p>
          </div>
        )}
      </ul>
    </div>
  )
}

export default ServicePage
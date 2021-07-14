import React from 'react'

import { Card, Typography } from 'antd'

const { Title } = Typography

const styles = {
  img: {
    maxWidth: '300px',
    objectFit: 'cover',
    padding: '2rem',
  },
  title: {
    fontSize: '1.5rem',
    textAlign: 'center',
  },
}

const ServiceCard = ({ resourceLibraryItem }) => {
  const { title, text, imgSrc, details } = resourceLibraryItem
  const { linkPath, linkText } = details

  return (
    // Technically, Services is on the I'm New page not the Services page, but this is an exception
    <a href={linkPath} target="_blank" rel="noreferrer">
      <Card
        cover={<img alt="img" src={imgSrc} style={styles.img} />}
        hoverable
        className="resource-library-card"
      >
        <Title style={styles.title}>{title}</Title>
      </Card>
    </a>
  )
}

export default ServiceCard

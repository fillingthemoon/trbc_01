import React from 'react'
import Banner from '../components/Banner'
import churchWide from '../imgs/church-wide.jpg'

import AlternatingImageTextTemplate from '../pageTemplates/AlternatingImageTextTemplate'

const pageContent = [
  {
    imageSource: require('../imgs/aboutus/1.jpg'),
    contentTitle: 'Pellentesque habitant morbi tristique.',
    contentText:
      `Pellentesque habitant morbi tristique senectus et netus et malesuada
      fames ac turpis egestas.Duis pretium facilisis tortor ullamcorper
      lacinia.Nunc elementum ante lacus, quis bibendum massa dignissim
      consequat.Etiam id lectus consectetur, commodo tortor id, laoreet
      ipsum.Fusce vestibulum dictum lacinia.Praesent ut urna vel erat
      ultrices viverra nec sit amet lacus.`,
  },
  {
    imageSource: require('../imgs/aboutus/2.jpg'),
    contentTitle: 'Pellentesque habitant morbi tristique.',
    contentText:
      `Pellentesque habitant morbi tristique senectus et netus et malesuada
      fames ac turpis egestas.Duis pretium facilisis tortor ullamcorper
      lacinia.Nunc elementum ante lacus, quis bibendum massa dignissim
      consequat.Etiam id lectus consectetur, commodo tortor id, laoreet
      ipsum.Fusce vestibulum dictum lacinia.Praesent ut urna vel erat
      ultrices viverra nec sit amet lacus.`,
  },
  {
    imageSource: require('../imgs/aboutus/3.jpg'),
    contentTitle: 'Pellentesque habitant morbi tristique.',
    contentText:
      `Pellentesque habitant morbi tristique senectus et netus et malesuada
      fames ac turpis egestas.Duis pretium facilisis tortor ullamcorper
      lacinia.Nunc elementum ante lacus, quis bibendum massa dignissim
      consequat.Etiam id lectus consectetur, commodo tortor id, laoreet
      ipsum.Fusce vestibulum dictum lacinia.Praesent ut urna vel erat
      ultrices viverra nec sit amet lacus.`,
  },
  {
    imageSource: require('../imgs/aboutus/4.jpg'),
    contentTitle: 'Pellentesque habitant morbi tristique.',
    contentText:
      `Pellentesque habitant morbi tristique senectus et netus et malesuada
      fames ac turpis egestas.Duis pretium facilisis tortor ullamcorper
      lacinia.Nunc elementum ante lacus, quis bibendum massa dignissim
      consequat.Etiam id lectus consectetur, commodo tortor id, laoreet
      ipsum.Fusce vestibulum dictum lacinia.Praesent ut urna vel erat
      ultrices viverra nec sit amet lacus.`,
  },
  {
    imageSource: require('../imgs/aboutus/5.jpg'),
    contentTitle: 'Pellentesque habitant morbi tristique.',
    contentText:
      `Pellentesque habitant morbi tristique senectus et netus et malesuada
      fames ac turpis egestas.Duis pretium facilisis tortor ullamcorper
      lacinia.Nunc elementum ante lacus, quis bibendum massa dignissim
      consequat.Etiam id lectus consectetur, commodo tortor id, laoreet
      ipsum.Fusce vestibulum dictum lacinia.Praesent ut urna vel erat
      ultrices viverra nec sit amet lacus.`,
  },
  {
    imageSource: require('../imgs/aboutus/6.jpg'),
    contentTitle: 'Pellentesque habitant morbi tristique.',
    contentText:
      `Pellentesque habitant morbi tristique senectus et netus et malesuada
      fames ac turpis egestas.Duis pretium facilisis tortor ullamcorper
      lacinia.Nunc elementum ante lacus, quis bibendum massa dignissim
      consequat.Etiam id lectus consectetur, commodo tortor id, laoreet
      ipsum.Fusce vestibulum dictum lacinia.Praesent ut urna vel erat
      ultrices viverra nec sit amet lacus.`,
  },
]

const Discipleship = () => {
  return (
    <div id="about-us-container">
      <Banner name="Discipleship" image={churchWide}></Banner>
      <AlternatingImageTextTemplate
        pageContent={pageContent}
      />
    </div>
  )
}

export default Discipleship

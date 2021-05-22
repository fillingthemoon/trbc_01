import React from 'react'
import Banner from '../components/Banner'
import churchWide from '../imgs/church-wide.jpg'

import AlternatingImageTextTemplate from '../pageTemplates/AlternatingImageTextTemplate'

import aboutUs1 from '../imgs/aboutus/1.jpg'
import aboutUs2 from '../imgs/aboutus/2.jpg'
import aboutUs3 from '../imgs/aboutus/3.jpg'
import aboutUs4 from '../imgs/aboutus/4.jpg'
import aboutUs5 from '../imgs/aboutus/5.jpg'
import aboutUs6 from '../imgs/aboutus/6.jpg'

const pageContent = [
  {
    imageSource: aboutUs1,
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
    imageSource: aboutUs2,
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
    imageSource: aboutUs3,
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
    imageSource: aboutUs4,
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
    imageSource: aboutUs5,
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
    imageSource: aboutUs6,
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
      <Banner imageTitlePairs={[{ title: 'Discipleship', image: churchWide }]} />
      <AlternatingImageTextTemplate
        pageContent={pageContent}
      />
    </div >
  )
}

export default Discipleship

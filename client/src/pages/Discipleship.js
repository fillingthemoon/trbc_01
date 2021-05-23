import React from 'react'
import Banner from '../components/Banner'

import AlternatingImageTextTemplate2 from '../pageTemplates/AlternatingImageTextTemplate2'

import { general, aboutUs } from '../images'
const { exterior } = general
const {
  aboutUs1,
  aboutUs2,
  aboutUs3,
  aboutUs4,
  aboutUs5,
  aboutUs6,
} = aboutUs

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
    <>
      <Banner imageTitlePairs={[{ title: 'Discipleship', image: exterior }]} />
      <AlternatingImageTextTemplate2
        pageContent={pageContent}
      />
    </>
  )
}

export default Discipleship

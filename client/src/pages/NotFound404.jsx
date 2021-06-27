import React from 'react'
import { useSelector } from 'react-redux'

import { Typography } from 'antd'
const { Title, Paragraph } = Typography

import { pageNotFoundIcon } from '../helper-files/icons'


const pageNotFoundData = {
  en: {
    title: 'Page not found',
    text: 'The link is broken or the page has been moved. Please explore other pages instead.',
  },
  ch: {
    title: '找不到网页',
    text: '链接已损坏或页面已移动。 请浏览其他页面。',
  },
}

const NotFound404 = () => {
  const language = useSelector((state) => state.language)

  return (
    <div className="page-not-found-404">
      {pageNotFoundIcon}
      <Title>
        {language === 'en'
          ? pageNotFoundData.en.title
          : pageNotFoundData.ch.title}
      </Title>
      <Paragraph>
        {language === 'en'
          ? pageNotFoundData.en.text
          : pageNotFoundData.ch.text}
      </Paragraph>
    </div>
  )
}

export default NotFound404

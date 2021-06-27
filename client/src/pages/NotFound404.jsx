import React from 'react'
import { useSelector } from 'react-redux'

import { Typography } from 'antd'
const { Title } = Typography

import { pageNotFoundIcon } from '../helper-files/icons'

const pageNotFoundData = {
  en: {
    title: 'Page not found',
    text: [
      'The link is broken or the page has been moved.',
      'Please explore other pages instead.',
    ],
  },
  ch: {
    title: '找不到网页',
    text: ['链接已损坏或页面已移动。', '请浏览其他页面。'],
  },
}

const NotFound404 = () => {
  const language = useSelector((state) => state.language)

  const title =
    language === 'en' ? pageNotFoundData.en.title : pageNotFoundData.ch.title

  const text =
    language === 'en' ? pageNotFoundData.en.text : pageNotFoundData.ch.text

  return (
    <div className="page-not-found-404">
      {pageNotFoundIcon}
      <Title>{title}</Title>
      {text.map((item, i) => (
        <span key={i}>{item}</span>
      ))}
    </div>
  )
}

export default NotFound404

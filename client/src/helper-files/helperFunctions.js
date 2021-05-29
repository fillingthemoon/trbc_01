import React from 'react'

import { Typography } from 'antd'
const { Link: AntdLink } = Typography

const splitLines = (text) => {
  const splitText = text.split('\n')
  const trimmedText = splitText.map(text =>
    text.trim()
  )
  return trimmedText
}

const formatParagraph = (paragraph) => {
  if (paragraph.substring(0, 8) === 'https://') {
    return <AntdLink href={paragraph} style={{ wordBreak: 'break-word' }} target='_blank'>{paragraph}</AntdLink>
  } else if (paragraph === '') {
    return <span>&nbsp;</span>
  } else if (paragraph.match('https://')) {
    const splitParagraph = paragraph.split(/(https:\/\/[\w.-]*[^.])/)
    return (
      splitParagraph.map((text, i) =>
        text.includes('https://')
          ? <AntdLink key={i} href={text} target='_blank'>{text}</AntdLink>
          : text
      )
    )
  } else {
    return paragraph
  }
}

const convertPageName = (pageName) => {
  const lowerCaseWords = ['of', 'to']

  const newPageName = pageName.split('-')
    .map(pageNameWord => {
      let firstLetter = pageNameWord[0]
      if (!lowerCaseWords.includes(pageNameWord)) {
        firstLetter = pageNameWord[0].toUpperCase()
      }
      return firstLetter.concat(pageNameWord.substring(1, pageNameWord.length))
    })
    .join(' ')

  return newPageName
}

const convertSectionName = (sectionName) => {
  const newSectionName = sectionName
    .split(' ')
    .join('-')
    .toLowerCase()
    .replace(/['())]/g, '')
    .replace(/[/]/, '-')

  return newSectionName
}

export {
  splitLines,
  formatParagraph,
  convertPageName,
  convertSectionName,
}
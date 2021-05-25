import React from 'react'
import { Link } from 'react-router-dom'

const splitLines = (text) => {
  const splitText = text.split('\n')
  const trimmedText = splitText.map(text =>
    text.trim()
  )
  return trimmedText
}

const formatParagraph = (paragraph) => {
  if (paragraph.substring(0, 8) === 'https://') {
    return <Link href={paragraph} style={{ wordBreak: 'break-word' }} target='_blank'>{paragraph}</Link>
  } else if (paragraph === '') {
    return <span>&nbsp;</span>
  } else {
    return paragraph
  }
}

export {
  splitLines,
  formatParagraph,
}
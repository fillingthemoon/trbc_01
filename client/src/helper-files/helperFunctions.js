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

const convertName = (fromType, toType, name) => {
  const lowerCaseWords = ['of', 'to']
  const apostropheWords = {
    'im': 'i\'m',
  }

  switch (fromType) {
    case ('proper'): {
      switch (toType) {
        case ('dashed'): {
          const dashedName = name
            .split(' ')
            .join('-')
            .toLowerCase()
            .replace(/['())]/g, '')
            .replace(/[/]/, '-')

          return dashedName
        }
        case ('camel'): {
          return null
        }
      }
      break
    }
    case ('dashed'): {
      switch (toType) {
        case ('proper'): {
          const properName = name.split('-')

            // check if each word contains apostrophe words
            .map(nameWord => {
              let newNameWord = nameWord
              Object.keys(apostropheWords).forEach(apostropheWord => {
                const myRegex = new RegExp(`\\b(${apostropheWord})\\b`, 'i')
                if (nameWord.match(myRegex)) {
                  newNameWord = apostropheWords[apostropheWord]
                }
              })
              return newNameWord
            })

            // Capitalise first letter of each word
            .map(nameWord => {
              let firstLetter = nameWord[0]
              if (!lowerCaseWords.includes(nameWord)) {
                firstLetter = nameWord[0].toUpperCase()
              }
              return firstLetter.concat(nameWord.substring(1, nameWord.length))
            })
            .join(' ')

          return properName
        }
        case ('camel'): {
          const camelname = name
            .split('-')

            // Except the first word, capitalise the first letter of each word
            .map((word, i) => {
              if (i > 0) {
                const camelCaseWord = `${word[0].toUpperCase()}${word.substring(1, word.length)}`
                return camelCaseWord
              } else {
                return word
              }
            })
            .join('')

          return camelname
        }
      }
      break
    }
    case ('camel'): {
      switch (toType) {
        case ('proper'): {
          return null
        }
        case ('dashed'): {
          return null
        }
      }
      break
    }
  }
}

export {
  splitLines,
  formatParagraph,
  convertName,
}
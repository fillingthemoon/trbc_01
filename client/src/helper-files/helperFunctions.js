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

// Unique for services
const pageSectionTranslate = (pageSection, toType) => {
  switch (pageSection) {
    case ('english-service'): {
      switch (toType) {
        case ('proper'):
        case ('service'): return 'English Service'
        case ('serviceAcronym'): return 'en'
      }
      break
    }
    case ('sunset-service-english-mandarin'): {
      switch (toType) {
        case ('proper'):
        case ('service'): return 'Sunset Service (English/Mandarin)'
        case ('serviceAcronym'): return 'ss'
      }
      break
    }
    case ('teo-chew-chinese-service'): {
      switch (toType) {
        case ('proper'):
        case ('service'): return 'Teo Chew/Chinese Service'
        case ('serviceAcronym'): return 'tc'
      }
      break
    }
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

          if (['english-service',
            'sunset-service-english-mandarin',
            'teo-chew-chinese-service'].includes(name)) {
            return pageSectionTranslate(name, toType)
          }

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
          return name
            .split(/([A-Z][a-z]+)/)
            .filter(word => word !== '')
            .map(nameWord => {
              let firstLetter = nameWord[0]
              if (!lowerCaseWords.includes(nameWord)) {
                firstLetter = nameWord[0].toUpperCase()
              }
              return firstLetter.concat(nameWord.substring(1, nameWord.length))
            })
            .join(' ')
        }
        case ('dashed'): {
          return null
        }
      }
      break
    }
  }
}

const flattenNestedObject = (nestedObject) => {
  const flattened = {}

  Object.keys(nestedObject).forEach(key => {
    if (typeof nestedObject[key] === 'object' && nestedObject[key] !== null) {
      Object.keys(nestedObject[key]).map(nestedKey => {
        flattened[nestedKey] = nestedObject[key][nestedKey]
      })
    } else {
      flattened[key] = nestedObject[key]
    }
  })

  return flattened
}

const nestFlattenedObjectCreate = (flattenedObject) => {
  // Should be kept updated with itemModel.js's details object fields
  const detailsFields = ['date', 'time', 'location', 'person', 'passage']

  const nestedFlattenedObject = { itemEn: {}, itemCh: {} }
  Object.keys(flattenedObject).forEach(field => {
    // If the field contains a -en or -ch at the back
    if (['en', 'ch'].includes(field.slice(-2))) {

      // Get the field name with -en or -ch at the back
      const fieldWithoutLang = field.substring(0, field.length - 3)

      // Get the capitalised version of 'en' and 'ch'; 'En' and 'Ch'
      const capitalisedLang = `${field.slice(-2)[0].toUpperCase()}${field.slice(-2)[1]}`

      // If the field is a 'detail'
      if (detailsFields.includes(fieldWithoutLang)) {

        // If the 'details' key-value pair is not already in nestedFlattenedObject, then create it.
        if (!Object.keys(nestedFlattenedObject[`item${capitalisedLang}`]).includes('details')) {
          nestedFlattenedObject[`item${capitalisedLang}`]['details'] = { [fieldWithoutLang]: flattenedObject[field] }
        } else {
          nestedFlattenedObject[`item${capitalisedLang}`]['details'][fieldWithoutLang] = flattenedObject[field]
        }
      } else {
        nestedFlattenedObject[`item${capitalisedLang}`][fieldWithoutLang] = flattenedObject[field]
      }
    } else {
      nestedFlattenedObject[field] = flattenedObject[field]
    }
  })

  nestedFlattenedObject

  return nestedFlattenedObject
}

const nestFlattenedObjectUpdate = (flattenedObject, language) => {
  // Should be kept updated with itemModel.js's details object fields
  const detailsFields = ['date', 'time', 'location', 'person', 'passage']

  const currLanguage = language === 'en' ? 'itemEn' : 'itemCh'

  const newObject = {}
  Object.keys(flattenedObject).forEach(field => {
    if (detailsFields.includes(field)) {
      if (!Object.keys(newObject).includes('details')) {
        newObject['details'] = { [field]: flattenedObject[field] }
      } else {
        newObject['details'][field] = flattenedObject[field]
      }
    } else {
      newObject[field] = flattenedObject[field]
    }
  })

  return { [currLanguage]: newObject }
}

const filterItemByLanguage = (item, language) => {
  const { id, itemId, page, pageSection, ...rest } = item
  const langItem = language === 'en'
    ? item.itemEn
    : item.itemCh
  const filtereditem = { id, itemId, page, pageSection, ...langItem }

  return filtereditem
}

export {
  splitLines,
  formatParagraph,
  pageSectionTranslate,
  convertName,
  flattenNestedObject,
  nestFlattenedObjectCreate,
  nestFlattenedObjectUpdate,
  filterItemByLanguage,
}
import React, { useState, useEffect } from 'react'

import itemService from '../services/itemService'

import {
  colorWhite,
} from '../helper-files/colors'

import { Row } from 'antd'

const lowerCaseWords = ['of', 'to']

const convertPageNames = (pages) => {
  const convertedPages = pages.map(page => {
    const pageName = page._id
    page._id = pageName.split('-')
      .map(pageNameWord => {
        let firstLetter = pageNameWord[0]
        if (!lowerCaseWords.includes(pageNameWord)) {
          firstLetter = pageNameWord[0].toUpperCase()
        }
        return firstLetter.concat(pageNameWord.substring(1, pageNameWord.length))
      })
    return page._id.join(' ')
  })
  return convertedPages
}

const AdminDashboardContent = () => {
  const [pages, setPages] = useState([])

  const fetchPages = async () => {
    const pages = await itemService.getPages()
    const convertedPages = convertPageNames(pages)
    setPages(convertedPages)
  }

  useEffect(() => {
    fetchPages()
  }, [])

  return (
    <Row style={{ display: 'flex', justifyContent: 'center', padding: '50px 0', backgroundColor: colorWhite }}>
      {pages.map((page, i) => {
        return <p key={i}>{page}</p>
      })}
    </Row>
  )
}

export default AdminDashboardContent
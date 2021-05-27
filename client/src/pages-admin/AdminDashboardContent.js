import React, { useState, useEffect } from 'react'

import itemService from '../services/itemService'

import TitleText from '../components-reusable/TitleText'
import PageCard from '../components-admin/PageCard'

import {
  colorWhite,
} from '../helper-files/colors'

import { Row } from 'antd'

const titleUnderlineStyle = {
  display: 'flex',
  justifyContent: 'center',
}

const AdminDashboardContent = () => {
  const [pages, setPages] = useState([])

  const fetchPages = async () => {
    const pages = await itemService.getPages()
    setPages(pages)
  }

  useEffect(() => {
    fetchPages()
  }, [])

  return (
    <>
      <TitleText titleUnderlineStyle={titleUnderlineStyle} titleStyle={{ textAlign: 'center' }} title={'Admin Dashboard'} underlineAlign='center' />
      <Row style={{ display: 'flex', justifyContent: 'center', backgroundColor: colorWhite }}>
        {pages.map((page, i) => {
          return <PageCard key={i} pageName={page._id} sectionNames={page.items.map(item => item._id)} />
        })}
      </Row>
    </>
  )
}

export default AdminDashboardContent
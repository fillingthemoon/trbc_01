import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import TitleText from '../components-reusable/TitleText'
import PageCard from '../components-admin/PageCard'

import {
  colorWhite,
} from '../helper-files/colors'

import { getPages } from '../reducers/itemsReducer'

import { Row } from 'antd'

const titleUnderlineStyle = {
  display: 'flex',
  justifyContent: 'center',
}

const AdminDashboardContent = () => {
  const dispatch = useDispatch()
  const pages = useSelector(state => state.items.pages)

  useEffect(() => {
    dispatch(getPages())
  }, [])

  if (pages.length <= 0) {
    return null
  }

  return (
    <>
      <TitleText titleUnderlineStyle={titleUnderlineStyle} titleStyle={{ textAlign: 'center' }} title={'Admin Dashboard'} underlineAlign='center' />
      <Row style={{ display: 'flex', justifyContent: 'center', backgroundColor: colorWhite }}>
        {pages.map((page, i) => {
          return <PageCard key={i}
            pageName={page._id}
            pageSections={page.pageSections.map(pageSection => pageSection._id)} />
        })}
      </Row>
    </>
  )
}

export default AdminDashboardContent
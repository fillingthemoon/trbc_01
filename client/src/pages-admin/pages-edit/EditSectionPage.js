import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import AdminLoginPage from '../AdminLoginPage'
import Notification from '../../components-reusable/Notification'
import AdminDashboardNavBar from '../AdminDashboardNavBar'
import EditableTable from './EditableTable'
import TitleText from '../../components-reusable/TitleText'

import { setNotification } from '../../reducers/notificationReducer'

import { sectionGetFuncs } from '../../helper-files/sectionGetFuncs'

import { convertName } from '../../helper-files/helperFunctions'

import { Layout } from 'antd'
const { Content } = Layout

const titleUnderlineStyle = {
  display: 'flex',
  justifyContent: 'center',
}

const EditSectionPage = (props) => {
  const {
    editSectionName
  } = props

  const valueObject = sectionGetFuncs(editSectionName)[editSectionName]

  const dispatch = useDispatch()
  const loggedInUser = useSelector(state => state.loggedInUser)
  const notification = useSelector(state => state.notification)
  const section = useSelector(state => state[valueObject.camelCase])

  useEffect(() => {
    dispatch(valueObject.func)
  }, [])

  if (section.length <= 0) {
    return null
  }

  if (!loggedInUser) {
    return <AdminLoginPage />
  }

  return (
    <Layout>
      <Notification notification={notification} />
      <AdminDashboardNavBar loggedInUser={loggedInUser} />

      <Content style={{ padding: '0 50px 50px 50px' }}>
        <TitleText
          titleUnderlineStyle={titleUnderlineStyle}
          titleStyle={{ textAlign: 'center', fontSize: '2rem' }}
          title={convertName('dashed', 'proper', editSectionName)}
          underlineAlign='center' />
        <EditableTable section={section} />
      </Content>
    </Layout>
  )
}

// {/* Iterate through each section item */}
// {section.map(sectionItem => {
//   // Iterate through each field in the section item
//   return Object.keys(sectionItem).map((field, i) =>
//     !(typeof sectionItem[field] === 'object' && sectionItem[field] !== null)
//       ? <p key={i}>{sectionItem[field]}</p>
//       // Iterate through each subfield if the field is a JavaScript object
//       : Object.keys(sectionItem[field]).map((subField, j) =>
//         <p key={j}>
//           {sectionItem[field][subField]}
//         </p>
//       )
//   )
// }
// )}

export default EditSectionPage
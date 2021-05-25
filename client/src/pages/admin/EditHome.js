import React, { useEffect, useState, useReducer } from 'react'
import Banner from '../../components-reusable/Banner'

// import {
//   Card,
//   Upload,
//   Typography,
//   Table,
//   Image,
//   Space,
//   Button,
//   Modal,
//   Form,
//   Input,

// } from "antd";
// import {
//   EditOutlined,
//   EllipsisOutlined,
//   SettingOutlined,
//   UploadOutlined,
// } from "@ant-design/icons";
// // Similiar to Our History Page

import axios from 'axios'

import { general } from '../../helper-files/images'
const { churchWide } = general

const EditHome = (props) => {
  return (
    <>
      <Banner imageTitlePairs={[{ title: 'Edit Home Page', image: churchWide }]} />
    </>
  )
}

export default EditHome

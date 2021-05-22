import React from 'react'

import { Divider, Typography, Row, Col, Avatar, Image } from 'antd'
import { UserOutlined } from '@ant-design/icons'

import image from '../imgs/exterior.jpg'
import Banner from '../components/Banner'

import revAdrianLim from '../imgs/ourteam/RevAdrianLim.jpg'
import revChang from '../imgs/ourteam/RevChang.jpg'
import revJerryGoh from '../imgs/ourteam/RevJerryGoh.jpg'
import psLam from '../imgs/ourteam/PsLam.jpg'
import yeoChongNim from '../imgs/ourteam/YeoChongNim.jpg'
import jennyAng from '../imgs/ourteam/JennyAng.jpg'
import leonardLee from '../imgs/ourteam/LeonardLee.jpg'
import vincentLai from '../imgs/ourteam/VincentLai.jpg'
import jasmineLee from '../imgs/ourteam/JasmineLee.jpg'
import dongFan from '../imgs/ourteam/DongFan.jpg'
import ivanChow from '../imgs/ourteam/IvanChow.jpg'

const OurTeam = () => {
  const { Title } = Typography
  var styles = {

    thickLine: {
      width: '35px',
      height: '4px',
      backgroundColor: '#F37021',
      borderStyle: 'none',
    },
  }
  var data = [
    {
      groupName: 'Pastoral',
      key: 'Pastoral',
      staff: [
        {
          key: 1,
          name: 'Rev Adrian Lim',
          role: 'Senior Pastor',
          image: { revAdrianLim },
        },


        {
          key: 2,
          name: 'Rev Andrew Chang',
          role: 'Interim Pastoral Advisor of \n Teochew/Chinese Congregation',
          image: { revChang },
        }, {
          key: 3,
          name: 'Rev Dr Jerry Goh',
          role: 'Pastor of English Congregation',
          image: { revJerryGoh },
        }, {
          key: 4,
          name: 'Pastor Lam Yuen Foong',
          role: 'Pastor of Sunset Congregation',
          image: { psLam },
        }

      ],
    },



    {
      groupName: 'Ministry',
      key: 'Ministry',
      staff: [
        {
          key: 5,
          name: 'Mr Yeo Chong Nim',
          role: 'Outreach Ministry',
          image: { yeoChongNim },
        },
        {
          key: 6,
          name: 'Ms Jenny Ang ',
          role: 'Children\'s Outreach Ministry',
          image: { jennyAng },
        },
      ],
    },
    {
      groupName: 'Administrative',
      key: 'Admin',
      staff: [
        {
          key: 7,
          name: 'Mr Leonard Lee',
          role: 'Administration Manager',
          image: { leonardLee },
        },
        {
          key: 8,
          name: 'Mr Vincent Lai Seck Tong',
          role: 'Administrative Executive (Facilities & Maintenance)',
          image: { vincentLai },
        },
        {
          key: 9,
          name: 'Ms Jasmine Lee',
          role: 'Administrative Executive',
          image: { jasmineLee },
        },
        {
          key: 10,
          name: 'Mr Dong Fan',
          role: 'Administrative Executive ',
          image: { dongFan },
        },
        {
          key: 11,
          name: 'Mr Ivan Chow',
          role: 'Church Caretaker',
          image: { ivanChow },
        },
      ],
    },
  ]

  return (
    <>
      <Banner name="Our Team" image={image}></Banner>
      <div className="main-container">
        <br />
        <br />
        {/* <Title>Pastoral</Title>
        <hr className="thick-line"></hr> */}

        {/* Use map to render reusable HTML content */}
        {data.map((group) => {
          return (
            <>
              {/* if groupName is "Mnistry" or "Administrative" it will render different title types */}
              {group.groupName === 'Ministry' ||
                group.groupName === 'Administrative' ||
                group.groupName === 'Pastoral' ? (
                  <>
                    <Divider />
                    <Title style={{ textAlign: 'center' }}>
                      {group.groupName}
                    </Title>
                    <hr className="thick-line"></hr>
                    <br />
                    <br />
                  </>
                ) : (
                  <>
                    <Divider orientation="left">
                      <Title level={3}>{group.groupName}</Title>
                    </Divider>
                  </>
                )}
              {/* if groupName is "Mnistry" or "Administrative" it will render different styles of the justify property */}
              <Row
                justify={
                  group.groupName === 'Ministry' ||
                    group.groupName === 'Administrative' ||
                    group.groupName === 'Pastoral'
                    ? 'space-around'
                    : 'start'
                }
              >
                {group.staff.map((staff) => {

                  return (
                    <Col
                      sm={24}
                      lg={8}
                      style={{ display: 'flex', justifyContent: 'center' }}
                      key={staff.name + staff.key}
                    >
                      <div style={{ textAlign: 'center' }} >
                        <Avatar size={120} src={staff.image} />


                        <p style={{ marginTop: '20px' }}>
                          <strong>{staff.name}</strong>
                          <br />
                          {/* Need a better way to insert newline */}
                          {staff.role.split('\n').map((i) => {
                            return (
                              <>
                                {i}
                                <br />
                              </>
                            )
                          })}
                        </p>
                      </div>
                    </Col>
                  )
                })}
              </Row>
            </>
          )
        })}
        <br />
      </div>
    </>
  )
}

export default OurTeam

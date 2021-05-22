import React from 'react'
import { Divider, Typography, Row, Col, Avatar, Image } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import image from '../imgs/exterior.jpg'
import Banner from '../components/Banner'
function OurTeam() {
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
          image: require('../imgs/ourteam/RevAdrianLim.jpg'),
        },


        {
          key: 2,
          name: 'Rev Andrew Chang',
          role: 'Interim Pastoral Advisor of \n Teochew/Chinese Congregation',
          image: require('../imgs/ourteam/RevChang.jpg'),
        },        {
          key:3,
          name:'Rev Dr Jerry Goh',
          role: 'Pastor of English Congregation',
          image: require('../imgs/ourteam/RevJerryGoh.jpg'),
        },{
          key: 4,
          name: 'Pastor Lam Yuen Foong',
          role: 'Pastor of Sunset Congregation',
          image: require('../imgs/ourteam/PsLam.jpg'),
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
          image: require('../imgs/ourteam/YeoChongNim.jpg'),
        },
        {
          key: 6,
          name: 'Ms Jenny Ang ',
          role: 'Children\'s Outreach Ministry',
          image: require('../imgs/ourteam/JennyAng.jpg'),
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
          image: require('../imgs/ourteam/LeonardLee.jpg'),
        },
        {
          key: 8,
          name: 'Mr Vincent Lai Seck Tong',
          role: 'Administrative Executive (Facilities & Maintenance)',
          image: require('../imgs/ourteam/VincentLai.jpg'),
        },
        {
          key: 9,
          name: 'Ms Jasmine Lee',
          role: 'Administrative Executive',
          image: require('../imgs/ourteam/JasmineLee.jpg'),
        },
        {
          key: 10,
          name: 'Mr Dong Fan',
          role: 'Administrative Executive ',
          image: require('../imgs/ourteam/DongFan.jpg'),
        },
        {
          key: 11,
          name: 'Mr Ivan Chow',
          role: 'Church Caretaker',
          image: require('../imgs/ourteam/IvanChow.jpg'),
        },
      ],
    },
  ]

  return (
    <>
      <Banner name= "Our Team" image={image}>

      </Banner>
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
              group.groupName === 'Pastoral'? (
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
                  group.groupName === 'Administrative'||
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
                        <Avatar size={120} src={staff.image}/>


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

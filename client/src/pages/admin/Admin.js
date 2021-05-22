import React from 'react'
import Banner from '../../components/Banner'
import { Link } from 'react-router-dom'
import { Card, Avatar, Typography, Row, Col, Button } from 'antd'
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons'
// Similiar to Our History Page
import churchWide from '../../imgs/church-wide.jpg'

function Admin() {
  const { Meta } = Card
  const { Title } = Typography
  const disabled =['Home', 'History',  'I\'m New',  'Discipleship', 'Resources']
  const data = [
    {
      key:'Home',
      title: 'Home',
      children: ['Home'],
    },

    {
      key:'About Us',
      title: 'About Us',
      children: ['Vision', 'History', 'Team', 'Statement'],
    },
    {
      key:'Join Us',
      title: 'Join Us',
      children: [ 'Chinese', 'English', 'Sunset'],
    },
    {
      key:'I\'m New',
      title: 'I\'m New',
      children: ['I\'m New'],
    },
    {
      key:'Outreach',
      title: 'Outreach',
      children: ['Outreach'],
    },
    {
      key:'EditMissions',
      title: 'Edit Missions',
      children: ['EditMissions'],
    },
    {
      key:'Discipleship',
      title: 'Discipleship',
      children: ['Discipleship'],
    },
    {
      key:'Resources',
      title: 'Resources',
      children: ['Resources'],
    },
  ]
  var count = 0
  return (
    <>
      <Banner imageTitlePairs={[{ title: 'Admin', image: churchWide }]} />

      <div className="main-container">
        <br />
        <Title style={{ textAlign: 'center' }}>Edit</Title>
        <hr className="thick-line"></hr>
        <br />
        <br />
        <Row gutter={[16, 16]}>
          {data.map((i) => {
            return (

              <Col
                sm={12}
                lg={8}
                style={{ display: 'flex', justifyContent: 'center' }}
                key={i.key}
              >
                <Card style={{ width: 300 }}>
                  <Meta

                    title={i.title}
                    description="Click on button to edit respective pages"
                  />
                  <br />
                  <br />
                  {i.children.map((button) => {
                    count += 1

                    return (
                      <Link
                        key={count}
                        to={{
                          pathname: `admin/${button.toLowerCase()}`,
                          state: button,
                        }}
                      >
                        <Button disabled={disabled.includes(button)? true:false}>{button}</Button>
                      </Link>
                    )
                  })}
                </Card>
                <br />
                <br />
              </Col>

            )
          })}
        </Row>
      </div>
    </>
  )
}

export default Admin

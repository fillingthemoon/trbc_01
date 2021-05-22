import React, { useState } from 'react'
import { Typography, Row, Col, Divider, Menu, Card, Button } from 'antd'
import { ClockCircleOutlined, PushpinOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import data from '../data/EventByServiceData'
import image from '../imgs/service-timing.jpg'
import Banner from '../components/Banner'
function Services() {
  const { Title } = Typography
  const { Meta } = Card



  const [service, setService] = useState('Teo Chew/Chinese Service')

  return (
    <div>
      <Banner name= "Services" image={image}>

      </Banner>

      <div className="main-container">
        <br />
        <br />
        {/* Attitude of Worship row */}
        <Title>Attitude of Worship</Title>
        <hr className="thick-line"></hr>
        <Title level={5}>
          God is spirit, and his worshipers must worship in the Spirit and in
          truth. - John 4:24 (NIV)
        </Title>
        <br />
        <Divider style={{ fontSize: 'x-large' }}>3 Elements of Worship</Divider>
        <br />
        {/* 3 Elements of Worship */}
        <Row gutter={[60, 60]} style={{ color: '#F37021' }}>
          <Col xs={{ span: 12 }} lg={{ span: 8 }}>
            <Title style={{ color: '#F37021' }} level={2}>
              Pellentesque
            </Title>
            <Title level={5}>Donec in arcu lorem. </Title>
          </Col>
          <Col xs={{ span: 12 }} lg={{ span: 8 }}>
            <Title style={{ color: '#F37021' }} level={2}>
              Porta metus
            </Title>
            <Title level={5}>
              Nunc leo ipsum, pellentesque porta metus id.
            </Title>
          </Col>
          <Col xs={{ span: 12 }} lg={{ span: 8 }}>
            <Title style={{ color: '#F37021' }} level={2}>
              Vestibulum imperdiet
            </Title>
            <Title level={5}>
              Phasellus a magna vel ligula sagittis posuere vel in eros.
            </Title>
          </Col>
        </Row>
        {/* Service Details rendered from information above */}
        <Title>Service Details</Title>
        <hr className="thick-line"></hr>
        <br></br>
        <br></br>
        <div style={{ display: 'flex' }}>
          <Menu
            onClick={(e) => {
              setService(e.key)
              return
            }}
            mode="horizontal"
            selectedKeys={service}
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <Menu.Item key="Teo Chew/Chinese Service">
              <Title level={4}>Teo Chew/Chinese Service</Title>
            </Menu.Item>
            <Menu.Item key="English Service">
              <Title level={4}>English Service</Title>
            </Menu.Item>
            <Menu.Item key="Sunset Service (Eng & Chi)">
              <Title level={4}>Sunset Service (Eng & Chi)</Title>
            </Menu.Item>
          </Menu>
        </div>
        <br />
        <br />
        <Row gutter={[64, 64]}>
          {data.map((i) => {
            // Filter according to service
            if (i.congre === service) {
              return (
                <Col sm={24} lg={8}>
                  <Link
                    to={{
                      pathname: `/trbc_00/services/${i.key}`,
                      state: i,
                    }}
                  >
                    <Card
                      width="100"
                      height="100"

                      cover={
                        <img
                          alt="example"
                          src="data:image/png;base64,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"
                        />
                      }
                    >
                      <Divider orientation="left">
                        <Title level={4}>{i.title}</Title>
                      </Divider>
                      <Meta
                        style={{ textAlign: 'left' }}
                        avatar={
                          <ClockCircleOutlined style={{ color: '#fa8c16' }} />
                        }
                        title={i.time}
                      />
                      <br />
                      <Meta
                        style={{ textAlign: 'left' }}
                        avatar={
                          <PushpinOutlined style={{ color: '#fa8c16' }} />
                        }
                        title={i.location}
                      />
                    </Card>
                  </Link>
                </Col>
              )
            }
            return null
          })}
          <Col sm={24} lg={12}>
            <Card
              style={{ display: 'flex', justifyContent: 'center', top: '30%' }}
              bordered={false}
            >
              <Title level={3}>Planning to drop us a visit?</Title>
              <Button type="primary" shape="round">
                Let us welcome you!
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Services

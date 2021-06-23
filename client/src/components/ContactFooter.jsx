import React from 'react'
import { useSelector } from 'react-redux'

import { Layout } from 'antd'
const { Footer } = Layout
import { Row, Col, Image } from 'antd'

import { IoMail } from 'react-icons/io5'
import { AiFillPhone } from 'react-icons/ai'
import { FaMapMarkerAlt } from 'react-icons/fa'

import TitleText from '../components-reusable/TitleText'

const iframe = `<iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.767288738597!2d103.8425741508193!3d1.3151596990360859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19e82a098165%3A0xc807eaeffa9aafc!2sSingapore%20Thomson%20Road%20Baptist%20Church!5e0!3m2!1sen!2ssg!4v1623754642754!5m2!1sen!2ssg"
      width="100%"
      height="100%"
      style="
        border: 4px solid #f37021;
      " 
      allowfullscreen="" 
      loading="lazy"
    >
    </iframe>`

const Iframe = (props) => {
  return (
    <div
      style={{ width: '100%', height: '100%' }}
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : '' }}
    />
  )
}

const ContactFooter = () => {
  const language = useSelector((state) => state.language)

  return (
    <Footer style={{ padding: 0 }}>
      <Row justify="center" align="middle" className="footer-row-container">
        <Col className="footer-info-container">
          <TitleText title={language === 'en' ? 'Contact Us' : '联系我们'} />
          <Row className="footer-info-trbc">
            {language === 'en'
              ? 'Singapore Thomson Road Baptist Church'
              : '新加坡淡申律浸信教会'}
          </Row>
          <Row gutter={10} className="footer-info-icon-details">
            <Col className="footer-info-icon">
              <FaMapMarkerAlt />
            </Col>
            <Col className="footer-contact-details">
              45 Thomson Road Singapore 307584
            </Col>
          </Row>
          <Row gutter={10} className="footer-info-icon-details">
            <Col className="footer-info-icon">
              <IoMail />
            </Col>
            <Col className="footer-contact-details">
              {' '}
              <a href="mailto:admin@trbc.org.sg">admin@trbc.org.sg</a>
            </Col>
          </Row>
          <Row gutter={10} className="footer-info-icon-details">
            <Col className="footer-info-icon">
              <AiFillPhone />
            </Col>
            <Col className="footer-contact-details"> +65 6256 2277</Col>
          </Row>
        </Col>
        <Col className="footer-img-container">
          <Iframe iframe={iframe} />
        </Col>
      </Row>
      <Row align="middle" justify="end" className="footer-copyright">
        Copyright © 2021. TRBC.
      </Row>
    </Footer>
  )
}

export default ContactFooter

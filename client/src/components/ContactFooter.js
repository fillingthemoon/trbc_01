import React from 'react'

import { Layout } from 'antd'
const { Footer } = Layout

import { IoMail, IoLocationSharp } from 'react-icons/io5'
import { AiFillPhone } from 'react-icons/ai'

import { general } from '../images'
const { trbcMap } = general

const ContactFooter = () => {
  return (
    <Footer style={{ padding: 0 }}>
      <div id="contact-footer-container">
        <div id="cf-text">
          <h1>Contact Us</h1>
          <hr className="title-underline" />
          <h2>Singapore Thomson Road Baptist Church</h2>
          <div>
            <div className='icon'><IoLocationSharp /></div>
            <p>45 Thomson Road Singapore 307584</p>
          </div>
          <div>
            <div className='icon'><IoMail /></div>
            <p>admin@trbc.org.sg</p>
          </div>
          <div>
            <div className='icon'><AiFillPhone /></div>
            <p>+65 6256 2277</p>
          </div>
        </div>
        <img
          id="img-trbc-map"
          src={trbcMap}
          alt=""
        />
      </div>
      <div id="cf-copyright">Copyright © 2021. TRBC.</div>
    </Footer>
  )
}

export default ContactFooter

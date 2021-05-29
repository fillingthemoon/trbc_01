import React, { useEffect } from 'react'
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch,
} from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

/**
 * "Pages":
 *  CEC,
 *  Discipleship,
 *  Home,
 *  I'm New,
 *  Missions,
 *  Our History,
 *  Our team,
 *  Outreach,
 *  Services,
 *  Statement of Faith
 *
 * "Items":
 *  CEC,
 *  Discipleship,
 *  Announcements, Events, Upcoming Sermons,
 *  I'm New,
 *  Missions,
 *  Our History,
 *  Our Team,
 *  Outreach,
 *  Services,
 *  Statement of Faith
 *
 * "Sections":
 *  CEC,
 *  Discipleship,
 *  Announcements, Events, Upcoming Sermons,
 *  I'm New,
 *  Missions,
 *  Our History,
 *  Administrative, Ministry, Pastoral,
 *  Children, Community, Interest Groups,
 *  English Service, Sunset Service (English/Mandarin), Teo Chew/Chinese Service,
 *  Statement of Faith
 */

// Main Pages
import NavBar from './components/NavBar'
import Home from './pages/Home'
import MissionVision from './pages/MissionVision'
import OurHistory from './pages/OurHistory'
import OurTeam from './pages/OurTeam'
import StatementOfFaith from './pages/StatementOfFaith'
import Services from './pages/Services'
import ImNew from './pages/ImNew'
import Outreach from './pages/Outreach'
import Missions from './pages/Missions'
import Discipleship from './pages/Discipleship'
import CEC from './pages/CEC'
import FacilityBooking from './pages/FacilityBooking'
import ResourceLibrary from './pages/ResourceLibrary'
import ContactFooter from './components/ContactFooter'

// Admin Pages
import Admin from './pages-admin/Admin'

import EditSectionPage from './pages-admin/pages-edit/EditSectionPage'

import './style.less'

import { getSections } from './reducers/itemsReducer'

import { Layout } from 'antd'
const { Content } = Layout

const App = () => {
  const dispatch = useDispatch()
  const sections = useSelector(state => state.items.sections)

  const matchEditSection = useRouteMatch('/admin/:sectionId')

  useEffect(() => {
    dispatch(getSections())
  }, [])

  if (!sections) {
    return null
  }

  const editSectionMatch = matchEditSection
    ? sections.find(section => section === matchEditSection.params.sectionId)
    : null

  return (
    <Layout>
      <NavBar />
      <Content>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/home' />
          </Route>
          <Route path='/home' exact>
            <Home />
          </Route>
          <Route path='/mission-vision' exact>
            <MissionVision />
          </Route>
          <Route path='/our-history' exact>
            <OurHistory />
          </Route>
          <Route path='/our-team' exact>
            <OurTeam />
          </Route >
          <Route path='/statement-of-faith' exact>
            <StatementOfFaith />
          </Route >
          <Route path='/services' exact>
            <Services />
          </Route >
          <Route path='/im-new' exact>
            <ImNew />
          </Route>
          <Route path='/outreach' exact>
            <Outreach />
          </Route>
          <Route path='/missions' exact>
            <Missions />
          </Route>
          <Route path='/discipleship' exact>
            <Discipleship />
          </Route >
          <Route path='/cec' exact>
            <CEC />
          </Route >
          <Route path='/facility-booking' exact>
            <FacilityBooking />
          </Route >
          <Route path='/resource-library'>
            <ResourceLibrary />
          </Route >
          <Route path='/admin' exact>
            <Admin />
          </Route >
          <Route path='/admin/:sectionId' exact>
            <EditSectionPage editSection={editSectionMatch} />
          </Route >
        </Switch >
      </Content>
      <ContactFooter />
    </Layout >
  )
}

export default App

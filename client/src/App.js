import React, { useEffect } from 'react'
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch,
} from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

/**
 * "Pages" (simply the routes in this website):
 *  Discipleship,
 *  Home,
 *  I'm New,
 *  Missions,
 *  Our History,
 *  Our Team,
 *  Ministry/Job Openings,
 *  Outreach,
 *  Statement of Faith
 *
 * "Items" (subcategories the Home page, for the purposes of UI/UX):
 *  Discipleship,
 *  Announcements, Events, Upcoming Sermons,
 *  Missions,
 *  Our History,
 *  Our Team,
 *  Ministry/Job Openings,
 *  Outreach,
 *  Services,
 *  Statement of Faith
 *
 * "Sections" (similar to items, but also subcategorises Our Team, Outreach, and Services):
 *  Discipleship,
 *  Announcements, Events, Upcoming Sermons,
 *  I'm New,
 *  Missions,
 *  Our History,
 *  Administrative, Ministry, Pastoral,
 *  Ministry/Job Openings,
 *  Children, Community, Interest Groups,
 *  English Service, Sunset Service (English/Mandarin), Teo Chew/Chinese Service,
 *  Statement of Faith
 */

// Main Pages
import NavBar from './components/NavBar'
import Home from './pages/Home'
import MinistryJobOpenings from './pages/MinistryJobOpenings'
import MissionVision from './pages/MissionVision'
import OurHistory from './pages/OurHistory'
import OurTeam from './pages/OurTeam'
import StatementOfFaith from './pages/StatementOfFaith'
import ImNew from './pages/ImNew'
import Outreach from './pages/Outreach'
import Missions from './pages/Missions'
import Discipleship from './pages/Discipleship'
import FacilityBooking from './pages/FacilityBooking'
import ResourceLibrary from './pages/ResourceLibrary'
import ContactFooter from './components/ContactFooter'
import PrivacyPolicy from './pages-sections/PrivacyPolicy'

// Admin Pages
import Admin from './pages-admin/Admin'

import EditSectionPage from './pages-admin/pages-edit/EditSectionPage'
import IndividualPage from './components-reusable/IndividualPage'

// Not Found 404

import NotFound404 from './pages/NotFound404'

// Style sheet
import './style.less'

// Reducers
import { getSections } from './reducers/itemsReducer'
import { getItems } from './reducers/itemsReducer'
import { stayAtCurrentLanguage } from './reducers/languageReducer'

// Ant Design
import { Layout } from 'antd'
const { Content } = Layout

const App = () => {
  const dispatch = useDispatch()
  const sections = useSelector(state => state.items.sections)
  const items = useSelector(state => state.items.items)
  const language = useSelector(state => state.language)

  const matchEditSection = useRouteMatch('/admin/:sectionId')
  const urlsWithIdParams = [
    '/outreach/:id',
    '/ministry-job-openings/:id',
    '/missions/:id',
    '/services/:id',
  ]
  const matchIndivPageItem = useRouteMatch(urlsWithIdParams)

  useEffect(() => {
    // Keep using current language
    const currentLanguageJSON = window.localStorage.getItem('currentLanguage')
    if (currentLanguageJSON) {
      const currentLanguage = JSON.parse(currentLanguageJSON)
      dispatch(stayAtCurrentLanguage(currentLanguage))
    }

    dispatch(getSections())
    dispatch(getItems())
  }, [language])

  if (sections.length <= 0 || items.length <= 0) {
    return null
  }

  const indivPageItemMatch = matchIndivPageItem
    ? items.find(item =>
      item.id === matchIndivPageItem.params.id
    )
    : null

  return (
    <Layout>
      <NavBar />
      <Content className='content-main'>
        <Switch>
          <Route path={urlsWithIdParams} exact>
            <IndividualPage item={indivPageItemMatch} />
          </Route>

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
          <Route path='/ministry-job-openings' exact>
            <MinistryJobOpenings />
          </Route >
          <Route path='/im-new' exact>
            <ImNew />
          </Route >
          <Route path='/outreach' exact>
            <Outreach />
          </Route>
          <Route path='/missions' exact>
            <Missions />
          </Route>
          <Route path='/discipleship' exact>
            <Discipleship />
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
            <EditSectionPage editPageSectionName={
              matchEditSection && matchEditSection.params.sectionId
            } />
          </Route >
          <Route path='/privacy-policy' exact>
            <PrivacyPolicy />
          </Route >
          <Route path="/*">
            <NotFound404/>
          </Route>
        </Switch >
      </Content>
      <ContactFooter />
    </Layout >
  )
}

export default App

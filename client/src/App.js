import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

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

import EditPage from './pages-admin/pages-edit/EditPage'

import { Layout } from 'antd'
const { Content } = Layout

import './style.less'

const App = () => {
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
            <EditPage/>
          </Route >
        </Switch >
      </Content>
      <ContactFooter />
    </Layout >
  )
}

export default App

import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import NavBar from './components/NavBar'
import MissionVision from './pages/MissionVision'
import OurHistory from './pages/OurHistory'
import ImNew from './pages/ImNew'
import Outreach from './pages/Outreach'
import Missions from './pages/Missions'
import Discipleship from './pages/Discipleship'
import FacilityBookings from './pages/FacilityBookings'
import OurTeam from './pages/OurTeam'
import Statement from './pages/Statement'
import Resources from './pages/Resources'
import ContactFooter from './components/ContactFooter'
import Event from './pages/Event'
import Services from './pages/Services'
import EventByService from './pages/EventByService'
import Home from './pages/Home'

import Admin from './pages/admin/Admin'

// Backend
import EditHome from './pages/admin/EditHome'
import EditTeam from './pages/admin/EditTeam'
import EditOutreach from './pages/admin/EditOutreach'
import EditService from './pages/admin/EditService'

//import EditHistory from './pages/admin/EditHistory';
import EditEnglish from './pages/admin/EditEnglish'
import EditChinese from './pages/admin/EditChinese'
import EditSunset from './pages/admin/EditSunset'
import EditVision from './pages/admin/EditVision'
import EditStatement from './pages/admin/EditStatement'
import EditMissions from './pages/admin/EditMissions'
import EditPage from './pages/admin/EditPage'
import EditDiscipleship from './pages/admin/EditDiscipleship'

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
          <Route path='/our-history' exact>
            <OurHistory />
          </Route>
          <Route path='/mission-vision' exact>
            <MissionVision />
          </Route>
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
          <Route path='/our-team' exact>
            <OurTeam />
          </Route >
          <Route path='/statement' exact>
            <Statement />
          </Route >

          <Route path='/services' exact>
            <Services />
          </Route >
          <Route path={['/outreach/:id', '/mission/:id']}
            render={(props) => <Event {...props} />}
            exact>
          </Route >
          <Route path='/services/:id'
            render={(props) => <EventByService {...props} />}
            exact>
          </Route>
          <Route path='/facility-bookings' exact>
            <FacilityBookings />
          </Route >
          <Route path='/resources'>
            <Resources />
          </Route >
          <Route path='/admin' exact>
            <Admin />
          </Route >
          <Route path='/admin/home' exact>
            <EditHome />
          </Route >
          <Route path='/admin/team' exact>
            <EditTeam />
          </Route >
          <Route path='/admin/outreach' exact>
            <EditOutreach />
          </Route >
          <Route path='/admin/service' exact>
            <EditService />
          </Route >
          {/* //<Route exact path='/admin/history' component={EditHistory} /> */}
          < Route path='/admin/english' exact>
            <EditEnglish />
          </Route >
          <Route path='/admin/chinese' exact>
            <EditChinese />
          </Route >
          <Route path='/admin/sunset' exact>
            <EditSunset />
          </Route >
          <Route path='/admin/vision' exact>
            <EditVision />
          </Route >
          <Route path='/admin/statement' exact>
            <EditStatement />
          </Route >
          <Route path='/admin/editmissions' exact>
            <EditMissions />
          </Route >
          <Route path='/admin/discipleship' exact>
            <EditDiscipleship />
          </Route >
          <Route path='/admin/editmissions/:id' exact>
            <EditPage />
          </Route >
        </Switch >
      </Content>
      <ContactFooter />
    </Layout >
  )
}

export default App

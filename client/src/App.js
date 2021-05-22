import React from 'react'

import { Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Vision from './pages/Vision'
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

//import EditHistory from "./pages/admin/EditHistory";
import EditEnglish from './pages/admin/EditEnglish'
import EditChinese from './pages/admin/EditChinese'
import EditSunset from './pages/admin/EditSunset'
import EditVision from './pages/admin/EditVision'
import EditStatement from './pages/admin/EditStatement'
import EditMissions from './pages/admin/EditMissions'
import EditPage from './pages/admin/EditPage'
import EditDiscipleship from './pages/admin/EditDiscipleship'

import { Layout } from 'antd'
const { Header, Content, Footer } = Layout

import './style.less'

const App = () => {
  return (
    <Layout>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/ourhistory" exact component={OurHistory} />
        <Route path="/vision" exact component={Vision} />
        <Route path="/imnew" exact component={ImNew} />
        <Route path="/outreach" exact component={Outreach} />
        <Route path="/missions" exact component={Missions} />
        <Route path="/discipleship" exact component={Discipleship} />
        <Route path="/ourteam" exact component={OurTeam} />
        <Route path="/statement" exact component={Statement} />

        <Route path="/services" exact component={Services} />
        <Route exact path="/outreach/:id" component={Event} />
        <Route exact path="/mission/:id" component={Event} />
        <Route
          exact
          path="/services/:id"
          component={EventByService}
        />
        <Route
          path="/facilitybookings"
          exact
          component={FacilityBookings}
        />
        <Route path="/resources" component={Resources} />
        <Route path="/admin" exact component={Admin} />
        <Route exact path="/admin/home" component={EditHome} />
        <Route exact path="/admin/team" component={EditTeam} />
        <Route
          exact
          path="/admin/outreach"
          component={EditOutreach}
        />
        <Route exact path="/admin/service" component={EditService} />
        {/* //<Route exact path="/admin/history" component={EditHistory} /> */}
        <Route exact path="/admin/english" component={EditEnglish} />
        <Route exact path="/admin/chinese" component={EditChinese} />
        <Route exact path="/admin/sunset" component={EditSunset} />
        <Route exact path="/admin/vision" component={EditVision} />
        <Route exact path="/admin/statement" component={EditStatement} />
        <Route exact path="/admin/editmissions" component={EditMissions} />
        <Route exact path="/admin/discipleship" component={EditDiscipleship} />
        <Route exact path="/admin/editmissions/:id" component={EditPage} />
      </Switch>
      <ContactFooter />
    </Layout>
  )
}

export default App

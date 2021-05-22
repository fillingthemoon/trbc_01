import React from 'react'

import { Switch, Route } from 'react-router-dom'

import NavBarAntd from './components/NavBarAntd'
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

import './style.less'

function App() {
  return (
    <div>
      <NavBarAntd />
      <Switch>
        <Route path="/trbc_00/" exact component={Home} />
        <Route path="/trbc_00/ourhistory" exact component={OurHistory} />
        <Route path="/trbc_00/vision" exact component={Vision} />
        <Route path="/trbc_00/imnew" exact component={ImNew} />
        <Route path="/trbc_00/outreach" exact component={Outreach} />
        <Route path="/trbc_00/missions" exact component={Missions} />
        <Route path="/trbc_00/discipleship" exact component={Discipleship} />
        <Route path="/trbc_00/ourteam" exact component={OurTeam} />
        <Route path="/trbc_00/statement" exact component={Statement} />

        <Route path="/trbc_00/services" exact component={Services} />
        <Route exact path="/trbc_00/outreach/:id" component={Event} />
        <Route exact path="/trbc_00/mission/:id" component={Event} />
        <Route
          exact
          path="/trbc_00/services/:id"
          component={EventByService}
        />
        <Route
          path="/trbc_00/facilitybookings"
          exact
          component={FacilityBookings}
        />
        <Route path="/trbc_00/resources" component={Resources} />
        <Route path="/trbc_00/admin" exact component={Admin} />
        <Route exact path="/trbc_00/admin/home" component={EditHome} />
        <Route exact path="/trbc_00/admin/team" component={EditTeam} />
        <Route
          exact
          path="/trbc_00/admin/outreach"
          component={EditOutreach}
        />
        <Route exact path="/trbc_00/admin/service" component={EditService} />
        {/* //<Route exact path="/trbc_00/admin/history" component={EditHistory} /> */}
        <Route exact path="/trbc_00/admin/english" component={EditEnglish} />
        <Route exact path="/trbc_00/admin/chinese" component={EditChinese} />
        <Route exact path="/trbc_00/admin/sunset" component={EditSunset} />
        <Route exact path="/trbc_00/admin/vision" component={EditVision} />
        <Route exact path="/trbc_00/admin/statement" component={EditStatement} />
        <Route exact path="/trbc_00/admin/editmissions" component={EditMissions} />
        <Route exact path="/trbc_00/admin/discipleship" component={EditDiscipleship} />
        <Route exact path="/trbc_00/admin/editmissions/:id" component={EditPage} />
      </Switch>
      <ContactFooter />
    </div>
  )
}

export default App

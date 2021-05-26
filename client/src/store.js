import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import announcementsReducer from './reducers/announcementsReducer'
import cecReducer from './reducers/cecReducer'
import discipleshipReducer from './reducers/discipleshipReducer'
import eventsReducer from './reducers/eventsReducer'
// import imNewReducer from './reducers/imNewReducer'
// import missionsReducer from './reducers/missionsReducer'
// import ourHistoryReducer from './reducers/ourHistoryReducer'
// import ourTeamReducer from './reducers/ourTeamReducer'
// import outreachReducer from './reducers/outreachReducer'
// import servicesReducer from './reducers/servicesReducer'
// import statementOfFaithReducer from './reducers/statementOfFaithReducer'
// import upcomingSermonsReducer from './reducers/upcomingSermonsReducer'

const reducer = combineReducers({
  announcements: announcementsReducer,
  cec: cecReducer,
  discipleship: discipleshipReducer,
  events: eventsReducer,
  // imNew: imNewReducer,
  // missions: missionsReducer,
  // ourHistory: ourHistoryReducer,
  // ourTeam: ourTeamReducer,
  // outreach: outreachReducer,
  // services: servicesReducer,
  // statementOfFaith: statementOfFaithReducer,
  // upcomingSermons: upcomingSermonsReducer,
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store
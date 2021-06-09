import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import announcementsReducer from './reducers/announcementsReducer'
import churchWideReducer from './reducers/churchWideReducer'
import discipleshipReducer from './reducers/discipleshipReducer'
import eventsReducer from './reducers/eventsReducer'
import imNewReducer from './reducers/imNewReducer'
import missionsReducer from './reducers/missionsReducer'
import ourHistoryReducer from './reducers/ourHistoryReducer'
import ourTeamReducer from './reducers/ourTeamReducer'
import outreachReducer from './reducers/outreachReducer'
import servicesReducer from './reducers/servicesReducer'
import statementOfFaithReducer from './reducers/statementOfFaithReducer'
import upcomingSermonsReducer from './reducers/upcomingSermonsReducer'

import loggedInUserReducer from './reducers/loggedInUserReducer'

import notificationReducer from './reducers/notificationReducer'

import itemsReducer from './reducers/itemsReducer'

import languageReducer from './reducers/languageReducer'
import languageSpinnerReducer from './reducers/languageSpinnerReducer'

const reducer = combineReducers({
  announcements: announcementsReducer,
  churchWide: churchWideReducer,
  discipleship: discipleshipReducer,
  events: eventsReducer,
  imNew: imNewReducer,
  missions: missionsReducer,
  ourHistory: ourHistoryReducer,
  ourTeam: ourTeamReducer,
  outreach: outreachReducer,
  services: servicesReducer,
  statementOfFaith: statementOfFaithReducer,
  upcomingSermons: upcomingSermonsReducer,

  loggedInUser: loggedInUserReducer,

  notification: notificationReducer,

  items: itemsReducer,

  language: languageReducer,
  languageSpinner: languageSpinnerReducer,
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store
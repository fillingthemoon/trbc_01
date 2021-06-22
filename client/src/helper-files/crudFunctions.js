/* get functions for various sections */
import { getDiscipleship, createDiscipleship, updateDiscipleship, deleteDiscipleship } from '../reducers/discipleshipReducer'
import { getAnnouncements, createAnnouncement, updateAnnouncement, deleteAnnouncement } from '../reducers/announcementsReducer'
import { getEvents, createEvent, updateEvent, deleteEvent } from '../reducers/eventsReducer'
import { getUpcomingSermons, createUpcomingSermon, updateUpcomingSermon, deleteUpcomingSermon } from '../reducers/upcomingSermonsReducer'
import { getImNew, createImNew, updateImNew, deleteImNew } from '../reducers/imNewReducer'
import { getMissions, createMission, updateMission, deleteMission } from '../reducers/missionsReducer'
import { getOurHistory, createOurHistory, updateOurHistory, deleteOurHistory } from '../reducers/ourHistoryReducer'
import { getOurTeam, createOurTeam, updateOurTeam, deleteOurTeam } from '../reducers/ourTeamReducer'
import { getOutreach, createOutreach, updateOutreach, deleteOutreach } from '../reducers/outreachReducer'
import { getServices, createService, updateService, deleteService } from '../reducers/servicesReducer'
import { getStatementOfFaith, createStatementOfFaith, updateStatementOfFaith, deleteStatementOfFaith } from '../reducers/statementOfFaithReducer'

// Read
const getFunction = {
  discipleship: getDiscipleship(),
  announcements: getAnnouncements(),
  events: getEvents(),
  'upcoming-sermons': getUpcomingSermons(),
  'im-new': getImNew(),
  missions: getMissions(),
  'our-history': getOurHistory(),
  administrative: getOurTeam('administrative'),
  ministry: getOurTeam('ministry'),
  pastoral: getOurTeam('pastoral'),
  outreach: getOutreach('outreach'),
  'english-service': getServices('english-service'),
  'sunset-service-english-mandarin': getServices(
    'sunset-service-english-mandarin'
  ),
  'teo-chew-chinese-service': getServices('teo-chew-chinese-service'),
  'statement-of-faith': getStatementOfFaith(),
}

// Create
const createFunction = {
  discipleship: createDiscipleship,
  announcements: createAnnouncement,
  events: createEvent,
  'upcoming-sermons': createUpcomingSermon,
  'im-new': createImNew,
  missions: createMission,
  'our-history': createOurHistory,
  administrative: createOurTeam,
  ministry: createOurTeam,
  pastoral: createOurTeam,
  outreach: createOutreach,
  'english-service': createService,
  'sunset-service-english-mandarin': createService,
  'teo-chew-chinese-service': createService,
  'statement-of-faith': createStatementOfFaith,
}

// Update
const updateFunction = {
  'discipleship': updateDiscipleship,
  'announcements': updateAnnouncement,
  'events': updateEvent,
  'upcoming-sermons': updateUpcomingSermon,
  'im-new': updateImNew,
  'missions': updateMission,
  'our-history': updateOurHistory,
  'administrative': updateOurTeam,
  'ministry': updateOurTeam,
  'pastoral': updateOurTeam,
  'outreach': updateOutreach,
  'english-service': updateService,
  'sunset-service-english-mandarin': updateService,
  'teo-chew-chinese-service': updateService,
  'statement-of-faith': updateStatementOfFaith,
}

// Delete
const deleteFunction = {
  'discipleship': deleteDiscipleship,
  'announcements': deleteAnnouncement,
  'events': deleteEvent,
  'upcoming-sermons': deleteUpcomingSermon,
  'im-new': deleteImNew,
  'missions': deleteMission,
  'our-history': deleteOurHistory,
  'administrative': deleteOurTeam,
  'ministry': deleteOurTeam,
  'pastoral': deleteOurTeam,
  'outreach': deleteOutreach,
  'english-service': deleteService,
  'sunset-service-english-mandarin': deleteService,
  'teo-chew-chinese-service': deleteService,
  'statement-of-faith': deleteStatementOfFaith,
}

export {
  getFunction,
  createFunction,
  updateFunction,
  deleteFunction,
}

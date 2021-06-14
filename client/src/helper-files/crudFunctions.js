/* get functions for various sections */
import { getChurchWide, createChurchWide, updateChurchWide } from '../reducers/churchWideReducer'
import { getDiscipleship, createDiscipleship, updateDiscipleship } from '../reducers/discipleshipReducer'
import { getAnnouncements, createAnnouncement, updateAnnouncement } from '../reducers/announcementsReducer'
import { getEvents, createEvent, updateEvent } from '../reducers/eventsReducer'
import { getUpcomingSermons, createUpcomingSermon, updateUpcomingSermon } from '../reducers/upcomingSermonsReducer'
import { getImNew, createImNew, updateImNew } from '../reducers/imNewReducer'
import { getMissions, createMission, updateMission } from '../reducers/missionsReducer'
import { getOurHistory, createOurHistory, updateOurHistory } from '../reducers/ourHistoryReducer'
import { getOurTeam, createOurTeam, updateOurTeam } from '../reducers/ourTeamReducer'
import { getOutreach, createOutreach, updateOutreach } from '../reducers/outreachReducer'
import { getServices, createService, updateService } from '../reducers/servicesReducer'
import { getStatementOfFaith, createStatementOfFaith, updateStatementOfFaith } from '../reducers/statementOfFaithReducer'

// Read
const getFunction = {
  'second-language-classes': getChurchWide('second-language-classes'),
  'interest-groups': getChurchWide('interest-groups'),
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
  'second-language-classes': createChurchWide,
  'interest-groups': createChurchWide,
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

// Create
const updateFunction = {
  'second-language-classes': updateChurchWide,
  'interest-groups': updateChurchWide,
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

export {
  getFunction,
  createFunction,
  updateFunction,
}

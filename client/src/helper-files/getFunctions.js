/* get functions for various sections */
import { getChurchWide } from '../reducers/churchWideReducer'
import { getDiscipleship } from '../reducers/discipleshipReducer'
import { getAnnouncements } from '../reducers/announcementsReducer'
import { getEvents } from '../reducers/eventsReducer'
import { getUpcomingSermons } from '../reducers/upcomingSermonsReducer'
import { getImNew } from '../reducers/imNewReducer'
import { getMissions } from '../reducers/missionsReducer'
import { getOurHistory } from '../reducers/ourHistoryReducer'
import { getOurTeam } from '../reducers/ourTeamReducer'
import { getOutreach } from '../reducers/outreachReducer'
import { getServices } from '../reducers/servicesReducer'
import { getStatementOfFaith } from '../reducers/statementOfFaithReducer'

const getFunction = {
  'second-langage-classes': getChurchWide('second-langage-classes'),
  'interest-groups': getChurchWide('interest-groups'),
  'discipleship': getDiscipleship(),
  'announcements': getAnnouncements(),
  'events': getEvents(),
  'upcoming-sermons': getUpcomingSermons(),
  'im-new': getImNew(),
  'missions': getMissions(),
  'our-history': getOurHistory(),
  'administrative': getOurTeam('administrative'),
  'ministry': getOurTeam('ministry'),
  'pastoral': getOurTeam('pastoral'),
  'outreach': getOutreach('outreach'),
  'english-service': getServices('english-service'),
  'sunset-service-english-mandarin': getServices('sunset-service-english-mandarin'),
  'teo-chew-chinese-service': getServices('teo-chew-chinese-service'),
  'statement-of-faith': getStatementOfFaith(),
}

export {
  getFunction,
}